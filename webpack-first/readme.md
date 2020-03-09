#1. npm init -y 初始化
#2. npm install webpack webpack-cli -D 安装webpack和webpack-cli
#3. 新建src/index.js 文件，并且在里面写一些代码
#4. npx webpack --mode=development 进行构建，默认是production(生产)模式，用于实际上线项目，代码可读性低，development(开发)模式，代码可读性高
#5. 经过第4步的操作后，目录下会多出一个dist的文件夹，里面有一个main.js文件
###！webpack有默认配置，如默认的入口文件是 ./src，默认打包到dist/main.js
#6. 此时main.js中的代码还是ES6的代码，需要将JS转义为低版本代码
##      -- 使用babel-loader将JS代码向低版本转换
##      -- npm install babel-loader -D 安装babel-loader
##      -- 配置babel    
##      -- npm install @babel/core @babel/preset-env        --@babel/plugin-transform-runtime -D npm install @babel/runtime @babel/runtime-corejs3