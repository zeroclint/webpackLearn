const webpack = require('webpack');
const webpackBaseConfig = require('./webpack.base.config')
const webpackMerge = require('webpack-merge')
// const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const path = require('path');
function resolve (dir) {
    return path.join(__dirname, '..', dir)
}
module.exports=webpackMerge(webpackBaseConfig,{
    // context: path.resolve(__dirname, './'),
    entry: resolve("/src/main.js"),
    resolve:{
        alias:{
            '@contains':"../src/contains"
        }
    },
   plugins:[
       // new webpack.optimize.UglifyJsPlugin({
       //     beautify: false,
       //     mangle: {
       //         screw_ie8: true,
       //         keep_fnames: true
       //     },
       //     compress: {
       //         warnings: false,
       //         screw_ie8: true,
       //         drop_debugger: true,
       //         drop_console: true
       //     },
       //     comments: false
       // }),
   ]
})