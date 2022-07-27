const target= 'http://127.0.01:3000'

module.exports = {
  devServer: {
    port: 8080,
    proxy: {
      '^/api': {
        target,
        changeOrigin: true
      },
      '^/upload': {
        target,
        changeOrigin: true
      },
      '^/download': {
        target,
        changeOrigin: true
      }
    }
  },


}

const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false,

  pluginOptions: {
    vuetify: {
			// https://github.com/vuetifyjs/vuetify-loader/tree/next/packages/vuetify-loader
		}
  }
})
