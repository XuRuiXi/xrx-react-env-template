const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  mode: 'production',
  devtool: 'eval',
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: 'index.js',
    // publicPath: '',
    assetModuleFilename: 'resources/[name].[hash:5][ext]'
  },
  // 代码分割
  optimization: {
    splitChunks: {
      /*
          有效值为 `all`，`async` 和 `initial`
          三种值的区别：
          all: 所有引入的库都会进行代码分割
          async: 异步引入的库进行代码分割，（默认）
          initial: 同步引入的库进行代码分割
          */
      chunks: "all",
    },
  },
  plugins: [
    // **/*表示会取output.path的目录
    // !取反，表示不会被删除
    new CleanWebpackPlugin({
      cleanOnceBeforeBuildPatterns: ['**/*', '!不会被删除的文件.html']
    }),
  ]
};