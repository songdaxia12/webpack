const path = require('path')
const ESLintPlugin = require('eslint-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: './src/main/main.js',
  output: {
    path: undefined,
    filename: 'main.js',
    // clean: true,
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.less$/,
        use: [
          // compiles Less to CSS
          'style-loader',
          'css-loader',
          'less-loader',
        ],
      },
      {
        test: /\.s[ac]ss$/,
        use: [
          // 将 JS 字符串生成为 style 节点
          'style-loader',
          // 将 CSS 转化成 CommonJS 模块
          'css-loader',
          // 将 Sass 编译成 CSS
          'sass-loader',
        ],
      },
      {
        test: /\.styl$/,
        use: [
          // 将 JS 字符串生成为 style 节点
          'style-loader',
          // 将 CSS 转化成 CommonJS 模块
          'css-loader',
          // 将 Sass 编译成 CSS
          'stylus-loader',
        ], // 将 Stylus 文件编译为 CSS
      },
      {
        test: /\.(png|jpe?g|gif|webp|svg)$/,
        type: 'asset',
        parser: {
          dataUrlCondition: {
            maxSize: 6 * 1024, // 4kb
          },
        },
        generator: {
          filename: 'static/images/[hash:10][ext][query]',
        },
      },
      {
        test: /\.(jfif)$/,
        type: 'asset/resource',
        generator: {
          filename: 'static/images/[hash:10][ext][query]',
        },
      },
      {
        test: /\.(ttf|woff|woff2)$/,
        type: 'asset/resource',
        generator: {
          filename: 'static/iconfont/[hash:10][ext][query]',
        },
      },
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          // options: {
          //   presets: ['@babel/preset-env'],
          // },
        },
      },
    ],
  },
  plugins: [new ESLintPlugin({
    context: path.resolve(__dirname, '../src'),
  }),
  new HtmlWebpackPlugin({
    template: './src/main/html/index.html',
  }),
  ],
  mode: 'development',
  devServer: {
    host: 'localhost',
    port: 8080,
    open: true,
  },
}
