import path from 'path'; // Join paths with the right type of slash

require('es6-promise').polyfill();

const config = {
  entry: {
    'bundle': path.join(__dirname, 'client', 'index.js'),
    'tests': path.join(__dirname, 'client', 'tests.js'),
  },
  output: {
    path: path.join(__dirname, 'public'),
    filename: '[name].js',
  },
  module: {
    loaders: [
      {
        test: /\.js$/, // Transpile all .js files from ES6 to ES5
        exclude: /(node_modules|bower_components)/,
        loader: 'babel'
      },
      {
        test: /\.css$/, // Use the style-loader for all .css files
        loaders: ['style', 'css']
      },
      {
        test: /\.(ttf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/, // Use the file-loader for fonts
        loaders: ['file-loader']
      },
      {
        test: /\.html$/,
        loader: 'raw'
      }
    ]
  },
  devtool: 'source-map'
};

export default config;
