'use strict';
const webpack = require('webpack');
var path = require('path');
const argv = require('yargs').argv;
const OpenBrowserPlugin = require('open-browser-webpack-plugin');

module.exports = {
  entry: [
    './src/index'
  ],
  output: {
    path: './dist/',
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ['', '.js', '.jsx'],
    root: [
      path.join(__dirname, 'src'),
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(), // 热加载
    // new OpenBrowserPlugin({url: ('http://localhost:' + argv.port + "/")}),
    new OpenBrowserPlugin({url: ('http://localhost:' + argv.port + "/webpack-dev-server/")}) // 热加载
  ],
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loaders: ['babel-loader'],
      }
    ]
  },
  //webpack-dev-server的配置, 通常弄成独立的文件,比如server.js,
  //或者使用命令行形式,比如npm scripts命令行形式,类似webpack-dev-server -d --inline --hot
  //弄webpack-dev-server通常是为了自动刷新和热更新,配置麻烦
  devserver: {
    contentBase: "./", //本地服务器所加载的页面所在的目录
    port: argv.port,
    colors: true, //终端中输出结果为彩色
    historyApiFallback: true, //不跳转
    inline: true, //实时刷新
    hot: true
  }
};
