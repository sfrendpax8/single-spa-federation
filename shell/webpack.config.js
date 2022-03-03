const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');

module.exports = {
  entry: path.resolve(__dirname, "src/root-config"),
  cache: false,
  output: {
    filename: "root-config.js",
    // libraryTarget: "system",
    path: path.resolve(__dirname, "dist"),
    publicPath: 'http://localhost:9000/',
  },
  module: {
    rules: [
      // { parser: { system: false } },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [{ loader: "babel-loader" }],
      },
    ],
  },
  devServer: {
    port: 9000,
    // https: false,
    // host: 'localhost',
    // headers: {
    //   "Access-Control-Allow-Origin": "*",
    // },
    // allowedHosts: 'all',
    // disableHostCheck: true,
    // historyApiFallback: true,
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'shell',
      library: { type: 'var', name: 'shell' },
      filename: 'remoteEntry.js',
      remotes: {
        // vue3app: 'vue3app@http://localhost:8082/remoteEntry.js', // with this approach, it seems single spa errors out
        vue3app: 'vue3app',
      },
      shared: []
    }),
    new HtmlWebpackPlugin({
      // inject: false, // initially broke things, but seems to fix error code in console regarding root-config.js being requested
      template: "src/index.ejs",
    }),
  ],
};
