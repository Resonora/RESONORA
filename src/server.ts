import { createNodeRequestHandler, isMainModule } from '@angular/ssr/node';
import express from 'express';

const app = express();
app.use((req, res, next) => {
  res
    .status(410)
    .set('X-Robots-Tag', 'noindex, nofollow, noarchive')
    .type('html')
    .send(`<!doctype html>
<html lang="da">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="robots" content="noindex, nofollow, noarchive">
    <title>Resonora er sat på pause</title>
    <style>
      body { min-height: 100vh; margin: 0; display: grid; place-items: center; background: #f6eee7; color: #342f2a; font-family: Georgia, serif; }
      main { padding: 2rem; text-align: center; }
      h1 { margin: 0; font-size: clamp(2rem, 6vw, 4rem); font-weight: 400; }
    </style>
  </head>
  <body><main><h1>Resonora er sat på pause for nu...</h1></main></body>
</html>`);
});

/**
 * Start the server if this module is the main entry point, or it is ran via PM2.
 * The server listens on the port defined by the `PORT` environment variable, or defaults to 4000.
 */
if (isMainModule(import.meta.url) || process.env['pm_id']) {
  const port = process.env['PORT'] || 4000;
  app.listen(port, (error) => {
    if (error) {
      throw error;
    }

    console.log(`Node Express server listening on http://localhost:${port}`);
  });
}

/**
 * Request handler used by the Angular CLI (for dev-server and during build) or Firebase Cloud Functions.
 */
export const reqHandler = createNodeRequestHandler(app);
