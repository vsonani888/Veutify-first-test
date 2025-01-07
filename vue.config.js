const { defineConfig } = require('@vue/cli-service');

module.exports = defineConfig({
  transpileDependencies: true,

  pluginOptions: {
    vuetify: {
      // Custom options for Vuetify loader
      treeShake: true, // Enables tree-shaking to reduce bundle size
    },
  },

  

  // Configure development server
  devServer: {
    port: 8080, // Specify port number
    open: true, // Automatically open the app in the browser
  },

  // Set public path if deploying to a subpath
  publicPath: process.env.NODE_ENV === 'production' ? '/Veutify-first-test/' : '/',

  // Enable source maps for easier debugging in development
  productionSourceMap: false,
});
