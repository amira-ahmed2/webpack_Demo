const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");

const pathM = require('path');

module.exports = {
    mode:"development",
    entry:"./src/index.js",
    output:{
        filename:"script.boundle.js",
        path:pathM.resolve(__dirname,"dist")
    },
    module:{
        rules: [
            {
              test: /\.css$/i,
              use: [MiniCssExtractPlugin.loader, "css-loader"],
            },{
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
              },{
                test: /\.s[ac]ss$/i,
                use: [
                  // Creates `style` nodes from JS strings
                 "style-loader", "css-loader", "sass-loader",
                ],
              },
          ],
    },
    Plugins:[
new HtmlWebpackPlugin({template:"./src/index.html"}),
new MiniCssExtractPlugin({filename:"style.bundel.css"}),
new CssMinimizerPlugin(),    ],
}