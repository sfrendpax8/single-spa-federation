const port = 8082;
const projectName = 'vue3app'; // can probably retrieve through script or packageJson property

module.exports = {
  configureWebpack: {
    output: {
      filename: `js/${projectName}.js`,
      devtoolNamespace: projectName,
    },
    // externals: [],
  },
  // chainWebpack: config => {
  //   config.externals(['vue']);
  // },

  // In this scope, we put stuff available through Vue Configuration Reference
  devServer: {
    https: false,
    host: 'localhost',
    port,
  },
  filenameHashing: false,
};

