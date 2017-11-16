const webpack = require('webpack');
const path = require('path');

const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const isProduction = process.env.NODE_ENV === 'production';

const plugins = [
  new webpack.HotModuleReplacementPlugin(),
  new webpack.optimize.ModuleConcatenationPlugin(),
  new webpack.NamedModulesPlugin(),
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
  new webpack.DefinePlugin({
    'process.env': {
      NODE_ENV: JSON.stringify(process.env.NODE_ENV)
    }
  }),
  new webpack.SourceMapDevToolPlugin({
    filename: '[name].js.map',
    exclude: ['vendor']
  }),
];

if (isProduction) {
  // needs to be loaded before sourcemap plugin
  plugins.splice(-1, 0, new webpack.optimize.UglifyJsPlugin({
    sourceMap: true,
    compress: {
      warnings: false
    }
  }))
}

module.exports = {
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
  plugins,
  stats: { colors: true },
  devServer: {
    hot: true,
    port: 8090,
    publicPath: '/',
    historyApiFallback: { index: '/' },
  },
};
