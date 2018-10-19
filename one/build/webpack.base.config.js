const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
//Vue-loader在15.*之后的版本都是 vue-loader的使用都是需要伴生 VueLoaderPlugin的,
const VueLoaderPlugin = require('vue-loader/lib/plugin');
// const ClearWebpackPlugin = require('clean-webpack-plugin');
// const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
function resolve (dir) {
    return path.join(__dirname, '..', dir)
}
module.exports={
    // entry: resolve("../src/main.js"),
    output: {
        path:resolve("/dist"),
        // filename: '[name].[hash:8].js',  //生成的hash全一样
        //异步加载的模块是要以文件形式加载，生成的文件名是以chunkFilename配置的
        chunkFilename: '[name].[chunkhash:8].js'
    },
    module:{
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader',
                // options: vueLoaderConfig
            },
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                use: ['vue-style-loader','css-loader']
            },
            // 处理在js中引用scss文件
            {
                test: /\.scss$/,
                use: ['style-loader', 'css-loader', 'sass-loader'],
            },
            {
                test: /\.(eot|woff|woff2|ttf|svg|gif)$/,
                // loader: "file-loader"
                loader: "url-loader?limit=1000000"
            },
        ],
    },
    resolve:{
        //引入路径是不用写对应的后缀名
        extensions: ['.js', '.vue', '.json'],
        //缩写扩展
        alias:{
            //正在使用的是vue的运行时版本，而此版本中的编译器时不可用的，我们需要把它切换成运行时 + 编译的版本
            'vue$':'vue/dist/vue.esm.js',// 'vue/dist/vue.common.js' for webpack 1
            //用@直接指引到src目录下，如：'./src/main'可以写成、'@/main'
            '@': path.resolve(__dirname,'./src'),
        }
    },
    plugins: [
        // new webpack.BannerPlugin('版权所有，翻版必究'),
        new VueLoaderPlugin(),
        new HtmlWebpackPlugin({
            template: resolve("index.html")//new 一个这个插件的实例，并传入相关的参数
        }),
        // new UglifyJsPlugin(),
        // new ClearWebpackPlugin([resolve('dist')]),
        // new BundleAnalyzerPlugin()
    ],
}