const convert = require('koa-connect');
const history = require('connect-history-api-fallback');
const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
  mode: process.env.NODE_ENV,
  entry: {
    main: './src/app.js',
  },
  output: {
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
    new HtmlWebpackPlugin({
      hash: true,
      template: 'index.template.html',
    }),
  ],
  serve: {
    port: 8090,
    add: (app) => {
      app.use(convert(history()));
    },
  },
};
