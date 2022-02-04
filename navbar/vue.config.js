const port = 8083;
const projectName = 'navbar'; // can probably retrieve through script or packageJson property

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

