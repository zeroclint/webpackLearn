const webpack = require('webpack');
const webpackBaseConfig = require('./webpack.base.config')
const webpackMerge = require('webpack-merge')
const path = require('path');
function resolve (dir) {
    return path.join(__dirname, '..', dir)
}
module.exports=webpackMerge(webpackBaseConfig,{
    entry: resolve("/src/main.js"),
    devServer: {
        // contentBase: "./dist",//本地服务器所加载的页面所在的目录
        historyApiFallback: true,//不跳转
        // inline: true,//实时刷新
        // clientLogLevel: 'warning',
        // historyApiFallback: {
        //     rewrites: [
        //         { from: /.*/, to: path.posix.join(config.dev.assetsPublicPath, 'index.html') },
        //     ],
        // },
        // hot: true,
        // contentBase: false, // since we use CopyWebpackPlugin.
        // compress: true,
        // host: HOST || config.dev.host,
        // port: PORT || config.dev.port,   //默认8080
        // open: config.dev.autoOpenBrowser,
        // overlay: config.dev.errorOverlay
        //     ? { warnings: false, errors: true }
        //     : false,
        // publicPath: config.dev.assetsPublicPath,
        // proxy: config.dev.proxyTable,
        // quiet: true, // necessary for FriendlyErrorsPlugin
        // watchOptions: {
        //     poll: config.dev.poll,
        // }
    }
})