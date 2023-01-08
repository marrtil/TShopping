const path = require("path");
const webpack = require("webpack");

module.exports = {
  mode: "development", //production
  devtool: "eval", //hidden-source-map hidden안붙이면 배포했을때 개발자도구열면 모든코드가 보임
  resolve: {
    extensions: [".jsx", ".js", ".tsx", ".ts"], //webpack에서 처리해줄수있는 확장자들
  },

  entry: {
    app: "./client", //여러가지 모두 적용할 파일
  },

  module: {
    rules: [
      // {
      //   loader: "babel-loader",
      //   options: { plugins: ["react-refresh/babel"] },
      // },
      {
        test: /\.tsx?$/,
        loader: "ts-loader",
        exclude: path.join(__dirname, "node_modules"),
      },
    ],
  },
  plugins: [],
  output: {
    filename: "app.js", //'[name].js'//웹팩처리하고 나올 최종결과물 파일이름
    path: path.join(__dirname, "dist"), //app.js가 생성될 폴더 경로
    publicPath: "/dist/",
  },
  devServer: {
    devMiddleware: { publicPath: "/dist" },
    static: { directory: path.resolve(__dirname) },
    hot: true,
  },
};
