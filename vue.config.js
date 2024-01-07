const { defineConfig } = require('@vue/cli-service');

module.exports = defineConfig({
  transpileDependencies: true,
  chainWebpack: config => {
    config.plugin('html').tap(args => {
      args[0].title = 'Joey Leger | JoeyUI';
      return args;
    });
  },
  css: {
    loaderOptions: {
      sass: {
        additionalData: '@import "@/assets/scss/main.scss";',
      },
    },
  },
});
