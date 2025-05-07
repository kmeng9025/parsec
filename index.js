const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');
const cors = require('cors');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 8080;

const target = 'https://web.parsec.app';

// Enable proxying of all requests (static + API + WebSocket)
app.use(
  '/',
  createProxyMiddleware({
    target,
    changeOrigin: true,
    ws: true, // WebSocket support
    secure: true,
    selfHandleResponse: false,
    onProxyReq: (proxyReq, req, res) => {
      // Optional: modify headers or log
    },
    onProxyRes: (proxyRes, req, res) => {
      // Optional: inspect or modify response
    },
    pathRewrite: {
      '^/': '/', // Keep path as-is
    },
  })
);

app.listen(PORT, () => {
  console.log(`Parsec proxy running on http://localhost:${PORT}`);
});
