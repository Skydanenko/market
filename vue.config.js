module.exports = {
  configureWebpack: {
    optimization: {
      splitChunks: {
        chunks: 'all',
        minSize: 0,
        automaticNameDelimiter: '~',
        enforceSizeThreshold: 10000,
        cacheGroups: {
          vendors: {
            test: /[\\/]node_modules[\\/]/,
            priority: -10,
            reuseExistingChunk: true
          }
        }
      }
    }
  },
  css: {
    loaderOptions: {
      sass: {
        additionalData: `
            @import "@/styles/_typography.scss";
            @import "@/styles/_colors.scss";
            @import "@/styles/common.scss";
            `
      }
    }
  }
}
