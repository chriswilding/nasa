import path from "path";

import HtmlWebpackPlugin from "html-webpack-plugin";
import OptimizeCSSAssetsPlugin from "optimize-css-assets-webpack-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import UglifyJsPlugin from "uglifyjs-webpack-plugin";

export default {
  devServer: {
    historyApiFallback: true
  },
  entry: ["whatwg-fetch", "./src/index.jsx"],
  module: {
    rules: [
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader",
            options: { minimize: true }
          }
        ]
      },
      {
        exclude: /node_modules/,
        test: /\.(js|jsx)$/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.scss$/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"]
      }
    ]
  },
  optimization: {
    minimizer: [
      new UglifyJsPlugin({
        cache: true,
        parallel: true,
        sourceMap: true // set to true if you want JS source maps
      }),
      new OptimizeCSSAssetsPlugin({})
    ],
    splitChunks: {
      cacheGroups: {
        styles: {
          name: "styles",
          test: /\.css$/,
          chunks: "all",
          enforce: true
        }
      }
    }
  },
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist")
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: "index.html",
      inject: "body",
      template: "./public/index.html"
    }),
    new MiniCssExtractPlugin({
      filename: "[name].[chunkhash].css",
      chunkFilename: "[id].css"
    })
  ],
  resolve: {
    extensions: [".css", ".js", ".jsx", ".scss"]
  }
};
