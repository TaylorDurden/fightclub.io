const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const InterpolateHtmlPlugin = require("interpolate-html-plugin");

module.exports = {
  mode: "development",
  entry: "./src/index.tsx",
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist"),
    // clean: true,
  },

  // Enable sourcemaps for debugging webpack's output.
  devtool: "source-map",

  devServer: {
    contentBase: path.resolve(__dirname, "dist"),
  },

  resolve: {
    extensions: [".ts", ".tsx", ".js", ".json"],
  },

  module: {
    rules: [
      {
        // 匹配哪些文件
        test: /\.css$/,
        // 使用哪些loader来处理
        use: [
          // use数组中loader执行顺序：从右到左，从下到上。下面的执行顺位为1.css-loader， 2.style-loader
          // 创建style标签，将js中的样式资源引入，添加到head中生效
          "style-loader",
          // 将css文件变成commonjs模块加载到js文件中，内容是样式字符串
          "css-loader",
        ],
      },
      // All files with a '.ts' or '.tsx' extension will be handled by 'awesome-typescript-loader'.
      {
        test: /\.tsx?$/,
        loader: "awesome-typescript-loader",
      },
      // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
      // {
      //   enforce: "pre",
      //   test: /\.js$/,
      //   loader: "source-map-loader",
      // },
      // {
      //   test: /\.(png|jpe?g|gif)$/i,
      //   use: [
      //     {
      //       loader: 'file-loader',
      //     },
      //   ],
      // },
      {
        test: /\.(png|woff|woff2|eot|ttf|svg|jpg|jpeg)$/,
        loader: 'url-loader'
      }
    ],
  },

  plugins: [
    // 功能：默认会创建一个空的html，自动引入打包输出的所有资源（js/css）
    // 前提：需要有结构的html文件
    new HtmlWebpackPlugin({
      // 复制 ./src/index.html文件，并自动引入打包输出的所有资源（js/css）
      template: "public/index.html",
    }),
    new InterpolateHtmlPlugin({
      PUBLIC_URL: ".", // can modify `static` to another name or get it from `process`
    }),
  ],
};
