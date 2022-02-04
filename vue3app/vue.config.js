const port = 8082;
const projectName = 'vue3app'; // can probably retrieve through script or packageJson property

module.exports = {
  configureWebpack: {
    output: {
      filename: `js/${projectName}.js`,
      devtoolNamespace: projectName,
    },
    devtool: 'source-map',
    cache: false,
  },
  chainWebpack: config => {
    config.devServer
      .headers({
        "Access-Control-Allow-Origin": "*",
      })

    config.optimization.delete("splitChunks");
    config.output.libraryTarget("umd");
  },

  // In this scope, we put stuff available through Vue Configuration Reference
  devServer: {
    https: false,
    host: 'localhost',
    port,
    allowedHosts: 'all',
  },
  filenameHashing: false,
  css: {
    extract: false,
  }
};

