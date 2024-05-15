const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
    app.use(
        '/submit_input',
        createProxyMiddleware({
            target: 'http://app-service:8080',
            changeOrigin: true,
        })
    );
};
