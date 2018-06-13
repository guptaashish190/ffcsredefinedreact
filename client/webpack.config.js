const path = require("path");
const HtmlWebPackPlugin = require("html-webpack-plugin");
const webpack = require("webpack");

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
            }
        ]
    },plugins: [
        new HtmlWebPackPlugin({
            template: "./src/index.html",
            filename: "./public/index.html"
          })
      ],
}