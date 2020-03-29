module.exports = {
  css: {
    loaderOptions: {
      sass: {
        prependData: `
          @import "@/global/main.scss";
        `
      }
    }
  }
};
