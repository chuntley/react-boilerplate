const webpack = require('webpack');
const path = require('path');

const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  devtool: 'cheap-module-eval-source-map',
  entry: {
    main: './src/app.js',
  },
  output: {
    path: `${__dirname}/dist`,
    chunkFilename: '[name].[chunkhash].[id].js',
    filename: '[name].[hash].js',
    publicPath: '/',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: [/node_modules/],
        use: [{
          loader: 'babel-loader',
        }],
      },
    ],
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.optimize.ModuleConcatenationPlugin(),
    new HtmlWebpackPlugin({
      hash: true,
      template: 'index.template.html',
    }),
    new CleanWebpackPlugin(['dist'], {
      verbose: true,
      dry: false,
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      minChunks: (module) => {
        return module.context && module.context.indexOf('node_modules') !== -1;
      },
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'manifest',
    }),
  ],
  stats: { colors: true },
  devServer: {
    hot: true,
    port: 8090,
    publicPath: '/',
    historyApiFallback: { index: '/' },
  },
};
