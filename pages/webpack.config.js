const path = require('path');

module.exports = {
  mode: 'development',
  entry: './team.js',
  output: {
    filename: 'compiledTeam.js',
    path: path.resolve(__dirname, './'),
  },
  module: {
      rules: [{
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env', '@babel/preset-react']
            }
        }
      }, {
          test: /\.css$/,
          use: ['style-loader', 'css-loader']
      }]
  }
};