module.exports = {
  css: {
    loaderOptions: {
      sass: {
        prependData: `
          @import "@/global/main.scss";
        `
      }
    }
  },
  chainWebpack: config => {
    config.plugin('html').tap(args => {
      args[0].title = 'Joey Leger | JoeyUI';
      return args;
    });
  }
};
