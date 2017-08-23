var HtmlwebpackPlugin = require('html-webpack-plugin');
var OpenBrowserPlugin = require('open-browser-webpack-plugin');
var webpack=require('webpack');
var path=require('path');
module.exports = {
    entry: './index.js',
    output: {
        filename: 'bundle.js',
        path:path.resolve(__dirname,'dist'),
        publicPath: '/'
    },
    module:{
        loaders:[
            {test:/\.css$/,loader:'style-loader!css-loader'},
            { test: /\.(png|jpg)$/, loader: 'url-loader?limit=8192' }
        ]
    },
    plugins:[
        // new HtmlwebpackPlugin({
        //     title: 'Webpack-demos',
        //     filename: 'index.html'
        // }),
        new webpack.HotModuleReplacementPlugin()
        // new OpenBrowserPlugin({
        //     url: 'http://localhost:8080'
        // })
    ],devServer: {
        hot: true, // 告诉 dev-server 我们在使用 HMR
        contentBase: path.resolve(__dirname, 'dist'),
        publicPath: '/' //定义静态服务器的基路径
    }
};