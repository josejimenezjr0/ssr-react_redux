module.exports = {
  //run babel on every file
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
      }
    ]
  },

  mode: 'development'
}