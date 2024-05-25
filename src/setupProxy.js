const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
    app.use(
        '/submit_input',
        createProxyMiddleware({
            target: process.env.REACT_APP_BACKEND_URL || 'http://localhost:8080',
            changeOrigin: true,
        })
    );
};
