const http = require('http');
const fs = require('fs');
const path = require('path');

const host = '127.0.0.1';
const port = 8124;
const base = path.resolve('C:/Users/kofow/Documents/creator-os-review');

const types = {
  '.html': 'text/html; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.svg': 'image/svg+xml',
  '.json': 'application/json; charset=utf-8',
};

http
  .createServer((req, res) => {
    const rawPath = (req.url || '/').split('?')[0];
    const requestPath = rawPath === '/' ? '/creator-os-fixed.html' : decodeURIComponent(rawPath);
    const filePath = path.resolve(base, `.${requestPath}`);

    if (!filePath.startsWith(base)) {
      res.statusCode = 403;
      res.end('forbidden');
      return;
    }

    fs.readFile(filePath, (err, data) => {
      if (err) {
        res.statusCode = 404;
        res.end('not found');
        return;
      }

      const ext = path.extname(filePath).toLowerCase();
      res.setHeader('Content-Type', types[ext] || 'text/plain; charset=utf-8');
      res.end(data);
    });
  })
  .listen(port, host, () => {
    console.log(`CreatorOS review server running at http://${host}:${port}/creator-os-fixed.html`);
  });
