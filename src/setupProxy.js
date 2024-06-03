const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
    app.use(
        '/submit_input',
        createProxyMiddleware({
            target: window.appConfig.REACT_APP_BACKEND_URL,
            changeOrigin: true,
        })
    );
};
