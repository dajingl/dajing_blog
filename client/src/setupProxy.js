const { createProxyMiddleware } = require("http-proxy-middleware"); //注意写法，这是1.0以后的版本
module.exports = function (app) {
    app.use(
        createProxyMiddleware("/api", {
            target: 'http://127.0.0.1:7001', // 测试环境  //PS: 必须带http://
            // target: 'https://101.34.86.51:7001', // 测试环境  //PS: 必须带http://
            pathRewrite: {
                "^/api": "",
            },
            changeOrigin: true,
            secure: false, // 是否验证证书
            ws: true, // 启用websocket
        })
    );
};
