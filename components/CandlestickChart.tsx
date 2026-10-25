'use client';

import { useEffect, useRef, useState } from 'react';
import { ChartLine } from 'lucide-react';

type Range = '1M' | '6M' | '1Y' | 'ALL';

interface Candle { o: number; h: number; l: number; c: number }

const RANGES: Range[] = ['1M', '6M', '1Y', 'ALL'];

/* deterministic pseudo-random bullish OHLC generator (close >= open always) */
function genCandles(seed: number, n: number, base: number, vol: number): Candle[] {
  let s = seed;
  const rnd = () => {
    s = (s * 16807 + 0) % 2147483647;
    return (s % 10000) / 10000;
  };
  const out: Candle[] = [];
  let price = base;
  for (let i = 0; i < n; i++) {
    const drift = vol * 0.35;
    const o = price;
    const move = rnd() * vol + drift * 0.2;
    const c = o + move;
    const h = c + rnd() * vol * 0.4;
    const l = Math.max(1, o - rnd() * vol * 0.25);
    out.push({ o, h, l, c: Math.max(c, o) });
    price = c;
  }
  return out;
}

const DATASETS: Record<Range, { candles: Candle[]; change: string }> = {
  '1M': { candles: genCandles(7, 22, 100, 6), change: '+38% Bullish' },
  '6M': { candles: genCandles(23, 48, 90, 8), change: '+164% Bullish' },
  '1Y': { candles: genCandles(59, 64, 70, 12), change: '+342% Bullish Spike' },
  ALL: { candles: genCandles(97, 80, 40, 16), change: '+820% All-Time' },
};

function ema(values: number[], period: number): number[] {
  const k = 2 / (period + 1);
  const out: number[] = [];
  let prev = values[0];
  for (let i = 0; i < values.length; i++) {
    prev = i === 0 ? values[0] : values[i] * k + prev * (1 - k);
    out.push(prev);
  }
  return out;
}

export default function CandlestickChart() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const wrapRef = useRef<HTMLDivElement>(null);
  const tooltipRef = useRef<HTMLDivElement>(null);
  const readoutRef = useRef<HTMLDivElement>(null);
  const [range, setRange] = useState<Range>('1Y');
  const rangeRef = useRef<Range>('1Y');
  rangeRef.current = range;

  /* redraw on range change + resize */
  useEffect(() => {
    const canvas = canvasRef.current;
    const wrap = wrapRef.current;
    if (!canvas || !wrap) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let hoverIdx = -1;

    const draw = () => {
      const dpr = window.devicePixelRatio || 1;
      const w = wrap.clientWidth;
      const h = wrap.clientHeight;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      canvas.style.width = `${w}px`;
      canvas.style.height = `${h}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      ctx.clearRect(0, 0, w, h);

      const data = DATASETS[rangeRef.current].candles;
      const closes = data.map((d) => d.c);
      const line = ema(closes, 20);
      const padL = 44;
      const padR = 12;
      const padT = 12;
      const padB = 28;
      const chartW = w - padL - padR;
      const chartH = h - padT - padB;
      const volH = chartH * 0.22;
      const priceH = chartH - volH - 8;

      const min = Math.min(...data.map((d) => d.l)) * 0.98;
      const max = Math.max(...data.map((d) => d.h)) * 1.02;
      const xOf = (i: number) => padL + (i / (data.length - 1)) * chartW;
      const yOf = (v: number) => padT + priceH - ((v - min) / (max - min)) * priceH;

      /* grid */
      ctx.strokeStyle = 'rgba(148,163,184,0.15)';
      ctx.fillStyle = 'rgba(148,163,184,0.7)';
      ctx.font = '10px "JetBrains Mono", monospace';
      ctx.lineWidth = 1;
      const gridLines = 5;
      for (let g = 0; g <= gridLines; g++) {
        const v = min + ((max - min) / gridLines) * g;
        const y = yOf(v);
        ctx.beginPath();
        ctx.moveTo(padL, y);
        ctx.lineTo(w - padR, y);
        ctx.stroke();
        ctx.fillText(v.toFixed(1), 6, y + 3);
      }

      /* area gradient under close line */
      const grad = ctx.createLinearGradient(0, padT, 0, padT + priceH);
      grad.addColorStop(0, 'rgba(16,185,129,0.22)');
      grad.addColorStop(1, 'rgba(16,185,129,0)');
      ctx.beginPath();
      ctx.moveTo(xOf(0), yOf(closes[0]));
      for (let i = 1; i < closes.length; i++) ctx.lineTo(xOf(i), yOf(closes[i]));
      ctx.lineTo(xOf(closes.length - 1), padT + priceH);
      ctx.lineTo(xOf(0), padT + priceH);
      ctx.closePath();
      ctx.fillStyle = grad;
      ctx.fill();

      /* volume bars */
      const maxVol = Math.max(...data.map((d) => d.c - d.o + 0.001));
      const barW = Math.max(2, chartW / data.length - 2);
      for (let i = 0; i < data.length; i++) {
        const d = data[i];
        const vh = ((d.c - d.o) / maxVol) * volH;
        ctx.fillStyle = 'rgba(16,185,129,0.25)';
        ctx.fillRect(xOf(i) - barW / 2, h - padB - vh, barW, vh);
      }

      /* candles */
      for (let i = 0; i < data.length; i++) {
        const d = data[i];
        const x = xOf(i);
        const yO = yOf(d.o);
        const yC = yOf(d.c);
        const yH = yOf(d.h);
        const yL = yOf(d.l);
        ctx.strokeStyle = '#059669';
        ctx.fillStyle = '#10b981';
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.moveTo(x, yH);
        ctx.lineTo(x, yL);
        ctx.stroke();
        const bodyTop = Math.min(yO, yC);
        const bodyH = Math.max(2, Math.abs(yC - yO));
        ctx.fillRect(x - barW / 2, bodyTop, barW, bodyH);
      }

      /* EMA line */
      ctx.beginPath();
      ctx.strokeStyle = '#3B82F6';
      ctx.lineWidth = 1.6;
      ctx.shadowColor = 'rgba(59,130,246,0.6)';
      ctx.shadowBlur = 8;
      for (let i = 0; i < line.length; i++) {
        const x = xOf(i);
        const y = yOf(line[i]);
        if (i === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      }
      ctx.stroke();
      ctx.shadowBlur = 0;

      /* crosshair + focal circle */
      if (hoverIdx >= 0 && hoverIdx < data.length) {
        const x = xOf(hoverIdx);
        const y = yOf(data[hoverIdx].c);
        ctx.setLineDash([4, 4]);
        ctx.strokeStyle = 'rgba(226,232,240,0.6)';
        ctx.beginPath();
        ctx.moveTo(x, padT);
        ctx.lineTo(x, h - padB);
        ctx.stroke();
        ctx.beginPath();
        ctx.moveTo(padL, y);
        ctx.lineTo(w - padR, y);
        ctx.stroke();
        ctx.setLineDash([]);
        ctx.beginPath();
        ctx.fillStyle = '#fff';
        ctx.strokeStyle = '#10b981';
        ctx.lineWidth = 2;
        ctx.arc(x, y, 4.5, 0, Math.PI * 2);
        ctx.fill();
        ctx.stroke();
      }

      /* x labels */
      ctx.fillStyle = 'rgba(148,163,184,0.7)';
      const step = Math.ceil(data.length / 6);
      for (let i = 0; i < data.length; i += step) {
        ctx.fillText(`T-${data.length - i}`, xOf(i) - 10, h - 8);
      }
    };

    const onMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      const data = DATASETS[rangeRef.current].candles;
      const chartW = rect.width - 44 - 12;
      const x = e.clientX - rect.left - 44;
      const idx = Math.round((x / chartW) * (data.length - 1));
      if (idx < 0 || idx >= data.length) {
        hoverIdx = -1;
        if (tooltipRef.current) tooltipRef.current.style.display = 'none';
        draw();
        return;
      }
      hoverIdx = idx;
      const d = data[idx];
      const tip = tooltipRef.current;
      if (tip) {
        tip.style.display = 'block';
        tip.style.left = `${44 + (idx / (data.length - 1)) * chartW}px`;
        tip.style.top = `${e.clientY - rect.top - 12}px`;
        const tipDate = tip.querySelector('[data-tip-date]');
        const tipPrice = tip.querySelector('[data-tip-price]');
        if (tipDate) tipDate.textContent = `Cycle T-${data.length - idx}`;
        if (tipPrice) tipPrice.textContent = `₹${d.c.toFixed(2)}`;
      }
      const ro = readoutRef.current;
      if (ro) {
        const set = (k: string, v: string) => {
          const el = ro.querySelector(`[data-ro="${k}"]`);
          if (el) el.textContent = v;
        };
        set('open', d.o.toFixed(2));
        set('high', d.h.toFixed(2));
        set('low', d.l.toFixed(2));
        set('close', d.c.toFixed(2));
      }
      draw();
    };

    const onMouseLeave = () => {
      hoverIdx = -1;
      if (tooltipRef.current) tooltipRef.current.style.display = 'none';
      draw();
    };

    draw();
    const t = setTimeout(draw, 100);
    canvas.addEventListener('mousemove', onMouseMove);
    canvas.addEventListener('mouseleave', onMouseLeave);
    window.addEventListener('resize', draw);
    return () => {
      clearTimeout(t);
      canvas.removeEventListener('mousemove', onMouseMove);
      canvas.removeEventListener('mouseleave', onMouseLeave);
      window.removeEventListener('resize', draw);
    };
  }, [range]);

  return (
    <div className="bg-white rounded-2xl border border-slate-200 shadow-xl overflow-hidden">
      {/* terminal chrome */}
      <div className="bg-slate-900 text-white px-4 sm:px-5 py-3 flex flex-wrap items-center gap-3">
        <div className="flex items-center gap-1.5">
          <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
          <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
        </div>
        <span className="text-slate-400 mx-1 hidden sm:inline">|</span>
        <span className="font-mono text-emerald-400 text-xs font-semibold">DREAMADS/TECH-INDEX</span>
        <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-950/80 text-emerald-300 border border-emerald-800/80">
          BULLISH 1D
        </span>
        <div className="ml-auto flex items-center gap-1 bg-slate-800/90 p-1 rounded-lg">
          {RANGES.map((r) => (
            <button
              key={r}
              onClick={() => setRange(r)}
              className={`px-2 sm:px-3 py-1 rounded-md text-[11px] font-bold transition-colors ${
                range === r ? 'bg-corp-blue text-white' : 'text-slate-400 hover:text-white'
              }`}
            >
              {r}{r === '1Y' ? <span className="hidden sm:inline"> (+342%)</span> : ''}
            </button>
          ))}
        </div>
      </div>

      {/* canvas body */}
      <div className="p-4 sm:p-6 bg-slate-950">
        <div ref={readoutRef} className="flex flex-wrap items-center gap-x-4 gap-y-1.5 mb-3 font-mono text-[11px]">
          {(['open', 'high', 'low', 'close'] as const).map((k) => (
            <span key={k} className="flex items-center gap-1.5">
              <span className="text-slate-400 uppercase">{k}</span>
              <span data-ro={k} className="text-emerald-400 font-bold">—</span>
            </span>
          ))}
          <span className="text-emerald-400 bg-emerald-950/80 border border-emerald-800/80 px-2 py-0.5 rounded text-[10px]">
            {DATASETS[range].change}
          </span>
          <span className="ml-auto hidden sm:flex items-center gap-1.5 text-slate-500">
            <ChartLine className="w-3 h-3 text-emerald-400" /> Interactive Cursor Enabled
          </span>
        </div>
        <div ref={wrapRef} className="relative w-full h-[280px] sm:h-[360px] cursor-crosshair">
          <canvas ref={canvasRef} className="absolute inset-0" />
          <div
            ref={tooltipRef}
            className="absolute pointer-events-none hidden bg-slate-900/95 backdrop-blur-md border border-emerald-500/40 rounded-xl p-3 font-mono shadow-2xl -translate-x-1/2 -translate-y-full z-10"
          >
            <div data-tip-date className="text-[10px] text-slate-400">—</div>
            <div data-tip-price className="text-emerald-400 font-bold text-sm">—</div>
          </div>
        </div>
        <div className="flex flex-wrap items-center gap-x-5 gap-y-1 mt-3 pt-3 border-t border-slate-900 text-[10px] font-mono">
          <span className="flex items-center gap-1.5 text-slate-400">
            <span className="w-2.5 h-2.5 rounded-sm bg-emerald-500" /> Bullish Green Candles
          </span>
          <span className="flex items-center gap-1.5 text-slate-400">
            <span className="w-4 h-0.5 rounded bg-blue-500" /> 20-Day EMA
          </span>
          <span className="ml-auto text-slate-500 hidden lg:block">Algorithm: Enterprise Scaling Pipeline</span>
        </div>
      </div>
    </div>
  );
}
