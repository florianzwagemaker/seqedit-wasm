const path = require('path');

module.exports = {
  experiments: {
    asyncWebAssembly: true,
  },
  entry: './www/main.ts',
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.wasm$/,
        type: "webassembly/async",
      },
    ],
  },
  resolve: {
    extensions: ['.ts', '.js'],
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'www', 'dist'),
  },
  devServer: {
    static: {
        directory: path.join(__dirname, 'www'),
    },
    compress: true,
    port: 8080,
    watchFiles: ['www/**', 'pkg/**'],
  },
  watchOptions: {
    poll: 1000,
  },
  mode: 'development',
  devtool: 'inline-source-map',
};
