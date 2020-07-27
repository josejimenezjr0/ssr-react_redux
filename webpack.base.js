const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
  //run babel on every file

  plugins: [
    new MiniCssExtractPlugin({
      filename: '../public/main.css',
    }),
  ],

  module: {
    rules: [
      {
        test: /\.js?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        options: {
          presets: [
            '@babel/preset-react',
            ['@babel/preset-env', { targets: { browsers: ['last 1 versions']}}]
          ],
          plugins: ['@babel/plugin-transform-runtime']
        }
      },
      {
        test: /\.css$/i,
        exclude: /node_modules/,
        // use: [MiniCssExtractPlugin.loader, 'css-loader'],
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: { importLoaders: 1 } 
          },
          'postcss-loader'
        ],
      },
    ]
  },

  mode: 'development'
}