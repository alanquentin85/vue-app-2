module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
      ? '/vue-app-2/'
      : '/',
  transpileDependencies: [
    'vuetify'
  ]
}
