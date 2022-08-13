const modoDev = process.env.NODE_ENV !== 'production'
const webpack = require('webpack')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CssMinimizerWebpackPlugin = require('css-minimizer-webpack-plugin')
const TerserPlugin = require('terser-webpack-plugin')

module.exports = {
  // mode: 'development',
  mode: modoDev ? 'development' : 'production',
  entry: './src/principal.js',
  output: {
    filename: 'principal.js',
    path: __dirname + '/public'
  },
  devServer:{
    contentBase: "./public",
    port: 9000
  },
  optimization: {
    minimizer:[
      new TerserPlugin({
        parallel: true,
        terserOptions:{
          ecma:6,
        }
      })
    ]
  },
  plugins:[
    new MiniCssExtractPlugin({
      filename:"estilo.css",
    })
  ],
  module: {
    rules: [{
      test: /\.s?[ac]ss$/, // css, scss, sass
      use: [
        MiniCssExtractPlugin.loader,
        //'style-loader', // adiciona CSS a DOM injetando a tag style
        'css-loader', //interpreta @import, url()...
        'sass-loader',
      ]
    }]
  }
}