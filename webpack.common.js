const path = require("path");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: {
    app: "./src/main.js"
  },
  plugins: [
    new CleanWebpackPlugin(["public"]),
    new HtmlWebpackPlugin({
      title: "Dipen Hamal",
      preview: "/src/images/preview.png",
      template: "layout.ejs"
    })
  ],
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "public")
  },
  resolve: {
    modules: [
      path.resolve(__dirname, "src"),
      "node_modules",
      "src",
      "src/components",
      "src/styles",
      "src/fixtures"
    ],
    extensions: [".js", ".jsx"]
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"]
          }
        }
      },
      {
        test: /\.(gif|jsx)$/,
        use: [
          {
            loader: "file-loader",
            options: {}
          }
        ]
      },
      {
        test: /\.scss$|css$/,
        use: [
          "style-loader", // creates style nodes from JS strings
          "css-loader", // translates CSS into CommonJS
          "sass-loader" // compiles Sass to CSS, using Node Sass by default
        ]
      },
      {
        test: /\.(ttf|eot|svg|woff|jpg|png)(\?[a-z0-9]+)?$/, // font files
        use: [
          {
            loader: "file-loader?name=[path][name].[ext]"
          }
        ]
      }
    ]
  }
};
