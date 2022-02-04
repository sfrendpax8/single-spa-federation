const port = 8081;
const projectName = 'vue2-main'; // can probably retrieve through script or packageJson property

module.exports = {
  configureWebpack: {
    output: {
      filename: `js/${projectName}.js`,
      devtoolNamespace: projectName,
    },
    externals: ['vue', 'vue-router'],
  },

  devServer: {
    https: false,
    host: 'localhost',
    port,
  },
  filenameHashing: false,
};

