const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
    app.use(
        '/api/v1',
        createProxyMiddleware({
        target: 'http://13.125.148.30:8080',
        changeOrigin: true,
        })
    );
}

