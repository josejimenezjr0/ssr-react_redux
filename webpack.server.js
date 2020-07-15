const path = require('path')

module.exports = {
  //inform webpack for node instead of browser
  target: 'node',

  //root file of server
  entry: './src/index.js',

  //output file destination
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'build')
  },

  //run babel on every file
  module: {
    rules: [
      {
        test: /\.js?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        options: {
          presets: [
            'react',
            'stage-0',
            ['env', { targets: { browsers: ['last 2 versions']}}]
          ]
        }
      }
    ]
  }
}