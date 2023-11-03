const { defineConfig } = require('@vue/cli-service')
const webpack = require('webpack');
const fs = require('fs');

module.exports = defineConfig({
  transpileDependencies: true
})

module.exports = {
  devServer: {
    host: '0.0.0.0',
    port: 3000,
    historyApiFallback: true,
    allowedHosts: 'all',
  },
  configureWebpack: config => {
    const commitHash = fs.readFileSync('commit-hash.txt').toString().trim();

    config.plugins.push(new webpack.DefinePlugin({
      'process.env.GIT_COMMIT': JSON.stringify(commitHash)
    }));
  },
}

