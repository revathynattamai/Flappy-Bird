const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    mode: "development",
    entry: "./src/index.js",
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "bundle.js",
    },
    devServer: {
        contentBase: path.join(__dirname, '../dist'),
        compress: true,
        host: 'localhost',
        port: 5000,
        hot: true,
      },
      resolve: {
        extensions: ['.js', '.jsx']
      },
      module: {
        rules: [
          {
            test: /\.js$/,
            exclude: /node_modules/,
            use: {
              loader: 'babel-loader',
            },
          },
          {
            test: /\.less$/,
            exclude: /node_modules/,
            use: [
              {
                loader: 'style-loader',
              },
              {
                loader: 'css-loader',
              },
              {
                loader: 'less-loader',
              },
            ],
          },
        ],
      },

    devtool: "source-map",
    plugins: [
      new HtmlWebpackPlugin({
        title: 'Flappy bird',
        template: path.resolve(__dirname, 'index.html'),
        excludeChunks: ['polyfills'],
      }),
    ]
}
