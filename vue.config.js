const { defineConfig } = require('@vue/cli-service')
let publicPath = ''
if (process.env.APP_ENV === 'production') {
  publicPath = '/proposal-profiles/'
}
if (process.env.APP_ENV === 'development') {
  publicPath = '/'
}
module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: publicPath
})
