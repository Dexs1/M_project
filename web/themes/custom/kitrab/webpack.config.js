const path = require('path');
const miniCss = require('mini-css-extract-plugin');

// Default development mode
let mode = 'development';
// Production mode, if when starting the webpack was specified --mode=production
if (process.env.NODE_ENV === 'production') {
  mode = 'production';
}

module.exports = {
  mode,
  // Specify the entry point - the main module of the application,
  // in which all others are imported
  entry: './src/index.js',

  devtool: 'source-map',
  devServer: {
    // Enables automatic page reloading when changed
    hot: true,
  },
  output: {
    filename: 'bundle.js',
    //The directory in which it will be to place the final bundle,
    // the dist folder in the root of the application
    path: path.resolve(__dirname, 'dist'),
    //Clears the dist directory before updating the bundle
    clean: true,

  },
  module: {
    rules: [{
      test:/\.(s*)css$/,
      use: [
        miniCss.loader,
        'css-loader',
        'sass-loader',
      ]
    }]
  },
  plugins: [
    new miniCss({
      filename: 'style.css',
    }),
  ]
}
