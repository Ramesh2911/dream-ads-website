'use client';

import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';

/** Links to the contact form with the job pre-filled via query params. */
export default function CareerApplyLink({ title }: { title: string }) {
  return (
    <Link
      href={`/contact?subject=career&role=${encodeURIComponent(title)}`}
      className="btn-primary shrink-0 !py-2.5 text-[13px] self-start sm:self-auto"
    >
      Apply <ArrowUpRight className="w-4 h-4" />
    </Link>
  );
}
