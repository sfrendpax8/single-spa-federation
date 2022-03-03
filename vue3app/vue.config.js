// const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const ModuleFederationPlugin = require("webpack").container.ModuleFederationPlugin;

const port = 8082;
const projectName = 'vue3app'; // can probably retrieve through script or packageJson property

module.exports = {
  configureWebpack: {
    entry: './src/bootstrap.js',
    output: {
      // filename: `js/${projectName}.js`,
      // devtoolNamespace: projectName,
      // publicPath: 'auto'
    },
    devtool: 'source-map',
    cache: false,
    plugins: [
      new ModuleFederationPlugin({
        name: projectName,
        filename: 'remoteEntry.js',
        library: { type: 'var', name: projectName },
        exposes: {
          './App': './src/bootstrap.js',
        },
        shared: ['vue', 'vue-router']
        // shared: require("./package.json").dependencies,
      }),
    ],
  },
  chainWebpack: config => {
    config.devServer
      .headers({
        "Access-Control-Allow-Origin": "*",
      })

    config.optimization.delete("splitChunks");
    // config.output.libraryTarget("umd");
  },

  // In this scope, we put stuff available through Vue Configuration Reference
  publicPath: `http://localhost:${port}/`,
  devServer: {
    // https: false,
    // host: 'localhost',
    port,
    // allowedHosts: 'all',
  },
  // filenameHashing: false,
  // css: {
  //   extract: false,
  // },
};

