const { ModuleFederationPlugin } = require("webpack").container;

const port = 8085;
const projectName = 'sidebar';

module.exports = {
  publicPath: `http://localhost:${port}/`,
  devServer: {
    https: false,
    host: 'localhost',
    port,
    allowedHosts: 'all',
  },
  css: {
    extract: false,
  },
  configureWebpack: {
    devtool: 'source-map',
    cache: false,
    plugins: [
      new ModuleFederationPlugin({
        name: projectName,
        library: { type: 'var', name: projectName },
        filename: 'remoteEntry.js',
        exposes: {
          './App': './src/bootstrap.js',
        },
        shared: ['vue', 'vue-router']
      }),
    ],
  },
  chainWebpack: config => {
    config.devServer
      .headers({
        "Access-Control-Allow-Origin": "*",
      })

    config.optimization.delete("splitChunks");
  },
};

