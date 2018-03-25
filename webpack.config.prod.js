const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const autoprefixer = require('autoprefixer');
const webpack = require('webpack');

module.exports = {
  entry: ['./src/polyfill', './src/index.js', './src/styles/main.scss'],
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, './public/dist')
  },
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [{
            loader: 'css-loader',
            options: {
              sourceMap: true,
              modules: true,
              localIdentName: '[name]__[local]___[hash:base64:5]'
            }
          }, {
            loader: 'postcss-loader',
            options: {
              sourceMap: true,
              ident: 'postcss',
              plugins: () => [autoprefixer({ browsers: ['last 2 versions', '> 1%'] })]
            }
          }, {
            loader: 'sass-loader',
            options: {
              sourceMap: true
            }
          }]
        })
      }, 
      {
        test: /\.js$/,
        exclude: [/node_modules/, path.resolve(__dirname, 'src/polyfill.js')],
        use: [{
          loader: 'eslint-loader',
        }, {
          loader: 'babel-loader',
          options: {
            presets: ['react', 'stage-0', 'es2015'],
            plugins: ['transform-class-properties', 'transform-decorators-legacy']
          }
        }]
      },
      {
        test: /\.(png|jp(e*)g|svg)$/,  
        use: [{
          loader: 'url-loader',
          options: { 
            limit: 8192,
            name: 'assets/[hash]-[name].[ext]'
          } 
        }]
      },
      { 
        test: /\.woff$/, 
        use: [{
          loader: 'url-loader',
          options: { 
            limit: 8192,
            name: 'assets/[name].[ext]'
          } 
        }] 
      }
    ]
  },
  devServer: {
    contentBase: './public/'
  },
  plugins: [
    new ExtractTextPlugin('bundle.css'),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production')
    }),
    new webpack.optimize.UglifyJsPlugin({sourceMap: true})
  ]
};