const path = require("path");
const HtmlWebPackPlugin = require("html-webpack-plugin");
const webpack = require("webpack");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
module.exports = {
    devServer: {
        contentBase: "./public"
    },
    entry : __dirname + "/src/index.js",
    output : {
        path: __dirname + "/public/",
        filename : "bundle.js"
    },
    watch: true,

    module : {
        rules : [
            {
                test : /\.js$/,
                exclude : /(node_modules)/,
                use: {
                    loader : "babel-loader"
                }
            },
            {
                test: /\.scss$/,
                use: [
                    process.env.NODE_ENV !== 'production' ? 'style-loader' : MiniCssExtractPlugin.loader,
                    "css-loader",
                    "sass-loader"
                ]
            }
        ]
    },plugins: [
        new HtmlWebPackPlugin({
            template: "./src/index.html",
            filename: "./public/index.html"
          }),
          new MiniCssExtractPlugin({
            // Options similar to the same options in webpackOptions.output
            // both options are optional
            filename: "[name].css",
            chunkFilename: "[id].css"
        }),
        "prettier"
      ],
}