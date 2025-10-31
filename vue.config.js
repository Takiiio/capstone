const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: process.env.NODE_ENV === 'production'
    ? '/capstone/' // GitHub 리포지토리 이름으로 변경
    : '/'
})