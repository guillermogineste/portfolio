var webpack = require("webpack");

module.exports = {
  devtool: 'cheap-module-source-map',
  entry: [
    "./src/index.js"
  ],
  module: {
    loaders: [{
      test: /\.js?$/,
      exclude: /node_modules/,
      loader: "babel"
    }]
  },
  resolve: {
    extensions: ["", ".js"]
  },
  output: {
    path: "dist",
    publicPath: "/",
    filename: "bundle.js"
  },
  devServer: {
    contentBase: "./dist"
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env':{
        'NODE_ENV': JSON.stringify('production')
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    })
  ]
};
