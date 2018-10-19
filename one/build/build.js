let webpack=require("webpack");
const webpackProdConfig = require('./webpack.prod.config')
// console.log(webpackProdConfig)

webpack(webpackProdConfig, function (err, stats) {
    process.stdout.write(stats.toString({
        colors: true,
        modules: false,
        children: false,
        chunks: false,
        chunkModules: false
    }) + '\n\n')
    // console.log("kdkdk",stats)
})