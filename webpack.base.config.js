const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const fs = require('fs');

const PATHS = {
  src: path.resolve(__dirname, "./src"),
  dist: path.resolve(__dirname, "./dist"),
  assets: "assets/",
};

const PAGES_DIR = `${PATHS.src}/pages/`;
const PAGES = fs
  .readdirSync(PAGES_DIR)
  .filter((fileName) => fileName.endsWith(".pug"));

module.exports = {
  externals: {
    paths: PATHS,
  },
  entry: {
    app: PATHS.src,
  },
  output: {
    filename: "js/[name].[hash].js",
    path: PATHS.dist,
    publicPath: "/",
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        vendor: {
          name: "vendors",
          test: /node_modules/,
          chunks: "all",
          enforce: true,
        },
      },
    },
  },
  module: {
    rules: [
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset/resource",
        generator: {
          filename: "[path][name][ext]",
        },
      },
      {
        test: /\.(woff2?|ttf|eot)(\?v=\w+)?$/,
        type: "asset/resource",
        generator: {
          filename: "[path][name][ext]",
        },
      },
      {
        test: /\.pug$/,
        loader: "pug-loader",
        options: {
          method: 'render', // fastest method to generate static HTML files
          pretty: true
        }
      },
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
      {
        test: /\.(sa|sc|c)ss$/,
        exclude: /(node_modules|bower_components)/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: "css-loader",
            options: { sourceMap: true },
          },
          {
            loader: "sass-loader",
            options: { sourceMap: true },
          },
          // {
          //   loader: "postcss-loader",
          //   options: {
          //     postcssOptions: {
          //       config: path.resolve(__dirname, "postcss.config.js"),
          //     },
          //   },
          // },
        ],
      },
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
    ],
  },
  plugins: [
    ...PAGES.map(
      (page) =>
        new HtmlWebpackPlugin({
          template: `${PAGES_DIR}/${page}`,
          filename: `./${page.replace(/\.pug/, ".html")}`,
        })
    ),
    new MiniCssExtractPlugin({
      filename: "css/[name].[hash].css",
    }),
    new CopyWebpackPlugin({
      patterns: [
        { from: `${PATHS.src}/assets/images`, to: "assets/images" },
        { from: `${PATHS.src}/assets/fonts`, to: "assets/fonts" },
        { from: `${PATHS.src}/static`, to: "" },
      ],
    }),
  ],
};
