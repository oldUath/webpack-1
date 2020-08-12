const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');

module.exports = {
  entry: './src/index.js',

  output: {
    filename: 'index.[contenthash].js'
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: '东芝',
      template: './src/assets/index.html'
    })

  ],
  module: {
    rules: [
      {
        test: /\.(gif|png|jpe?g|svg)$/i,
        use: ["file-loader"]
      },
      {
        test: /\.styl$/,
        loader: ["style-loader" ,"css-loader", "stylus-loader" ]
      },
      {
        test: /\.less$/,
        use: [{
          loader: "style-loader" // creates style nodes from JS strings
        }, {
          loader: "css-loader" // translates CSS into CommonJS
        }, {
          loader: "less-loader" // compiles Less to CSS
        }]
      },
      {
        test: /\.scss$/,
        use: [
          "style-loader",// 将 JS 字符串生成为 style 节点

          "css-loader",// 将 CSS 转化成 CommonJS 模块

          {
            loader: "sass-loader",
            options: {
              implementation: require('dart-sass')
            }
          }
        ]
      },
      


    ]
  }
}