process.env.NODE_ENV = 'production';
const next = require('next');
const http = require('http');

const app = next({ dev: false });
const handle = app.getRequestHandler();

app
  .prepare()
  .then(() => {
    const port = Number(process.env.PORT || 3100);
    http
      .createServer((req, res) => handle(req, res))
      .listen(port, () => {
        console.log('Next.js ready on ' + port);
      });
  })
  .catch((err) => {
    console.error('Next failed to start:', err);
    process.exit(1);
  });
