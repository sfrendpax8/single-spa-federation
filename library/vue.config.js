const port = 8084;
const projectName = 'library'; // can probably retrieve through script or packageJson property

module.exports = {
  configureWebpack: {
    output: {
      // filename: `js/${projectName}.js`,
      devtoolNamespace: projectName,
    },
    externals: [],
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

