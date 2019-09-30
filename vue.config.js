module.exports = {
    configureWebpack: config => {
        require('vux-loader').merge(config, {
            options: {},
            plugins: ['vux-ui']
        })
        config.devServer = {
            proxy: {
                '/API': { //在ajax请问的url参数前 加上'/API'就行了，此时的'/API'就是 'https://www.easy-mock.com'的变量。
                    target: 'https://www.easy-mock.com',
                    ws: true,
                    changeOrigin: true,
                    pathRewrite: {
                        '^/API': ''
                    }
                }
            }
        }
    }
};