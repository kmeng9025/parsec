const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');
const cors = require('cors');

const app = express();
const PORT = 8080;

// Enable CORS for browser compatibility
app.use(cors());

// Proxy configuration
app.use('/', createProxyMiddleware({
    target: 'https://web.parsec.app',
    changeOrigin: true,
    secure: true
}));

app.listen(PORT, () => {
    console.log(`Proxy server running on port ${PORT}`);
});