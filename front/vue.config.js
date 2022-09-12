const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    proxy: {
      '^/api': {
        target: 'http://localhost:3000',
        ws: false,
      },
      '^/uploads': {
        target: 'http://localhost:3000',
        ws: false,
      },
    },
  },
})
