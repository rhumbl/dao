var path = require('path');
var webpack = require('webpack')

module.exports = {
   entry: './index.js',
   output: {
       path: __dirname + '/dist/',
       filename: 'dao.js'
   },
   module: {
       loaders: [
         {
           test: /\.js$/, loader: "babel-loader",
           query: {
             plugins: ['transform-decorators-legacy' ],
             presets: ['es2015', 'stage-0'],
           },
           exclude: /(node_modules|bower_components|vendor)/
         },
         {
           test: /\.jsx$/, loader: "babel-loader",
           query: {
             plugins: ['transform-decorators-legacy' ],
             presets: ['es2015','stage-0']
           },
           exclude: /(node_modules|bower_components|vendor)/
	       },
         {
           test: /vendor\/.+\.(jsx|js)$/,
           loader: "imports?this=>window"
         },
         { test: /\.css$/, loader: "style-loader!css-loader" },
          { test: /\.png$/, loader: "url-loader?limit=100000" },
          { test: /\.jpg$/, loader: "file-loader" },
       ]
   },
   resolve: {
     alias: {
     }
   },
    plugins: [
      new webpack.ProvidePlugin({
      })
    ]
};
