const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');

module.exports = {
  entry: path.resolve(__dirname, "src/bootstrap"),
  cache: false,
  output: {
    filename: "root-config.js",
    path: path.resolve(__dirname, "dist"),
    publicPath: 'http://localhost:9000/',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [{ loader: "babel-loader" }],
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  devServer: {
    port: 9000,
    https: false,
    host: 'localhost',
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
    disableHostCheck: true,
    historyApiFallback: true,
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'shell',
      library: { type: 'var', name: 'shell' },
      filename: 'remoteEntry.js',
      remotes: {
        vue3app: 'vue3app',
        vue2app: 'vue2app',
        navbar: 'navbar',
        sidebar: 'sidebar',
      },
      shared: ['single-spa']
    }),
    new HtmlWebpackPlugin({
      template: "src/index.ejs",
    }),
  ],
};
