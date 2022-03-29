module.exports = {
  mode: 'development',
  entry: './src/js/app.js',
  output: {
    path: __dirname + '/dist',
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        type: "javascript/auto",
        resolve: {
          fullySpecified: false, // disable the behaviour,
          extensions: ['.wasm', '.mjs', '.js', '.jsx', '.json']
        },
      },
    ],
  },
}
