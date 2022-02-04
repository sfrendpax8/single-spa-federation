const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: path.resolve(__dirname, "src/root-config"),
  cache: false,
  output: {
    filename: "root-config.js",
    libraryTarget: "system",
    path: path.resolve(__dirname, "dist"),
  },
  module: {
    rules: [
      { parser: { system: false } },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [{ loader: "babel-loader" }],
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
    // allowedHosts: 'all',
    disableHostCheck: true,
    historyApiFallback: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      inject: false, // initially broke things, but seems to fix error code in console regarding root-config.js being requested
      template: "src/index.ejs",
    }),
  ],
};
