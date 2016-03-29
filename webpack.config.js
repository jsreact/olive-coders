module.exports = {
  entry: {
    main: [
      './src/index.js',
      'webpack-dev-server/client?http://localhost:5000',
      'webpack/hot/only-dev-server'
    ]
  },
  output: {
    publicPath: 'http://localhost:5000/',
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loaders: ['react-hot', 'babel?' + JSON.stringify({ presets: ['react', 'es2015' ], plugins: ['syntax-object-rest-spread'] })],
        exclude: /node_modules/,
      },
    ]
  },
  devServer: {
    port: 5000,
  }
}
