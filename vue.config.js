const port = process.env.PORT;

module.exports = {
    configureWebpack: config => {
        if (process.env.NODE_ENV === 'development') {
            require('opn')(`http://localhost:${port}`);
        }
    },
    chainWebpack: config => {
        config.plugin('html').tap(args => {
            args[0].minify = false;
            return args;
        });
    }
}
