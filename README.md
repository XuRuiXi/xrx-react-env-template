### 基于webpack5搭建的react开发环境

- 放在public里面的文件，不经过依赖也会被一起打包，放在打包后的public目录。
- 本地开发支持路由的history模式
- 支持ts，支持es6+语法，css语法做了兼容处理。

注意：如果非npm下载依赖包，文件下载完成后需要手动执行一遍husky install

启动项目:npm run start
打包:npm run build