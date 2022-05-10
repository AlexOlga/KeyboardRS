const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");


module.exports = (env, options) => {

    const isProduction = options.mode == 'production';
    const config={
        mode: isProduction ? 'production' : 'development',
        watch: false,
        devtool: 'source-map',
        entry: ['./src/index.js', './src/styles.css'],
        output: {
            path: path.join(__dirname, 'dist'),
            filename: 'index.js'
        },      
        
        plugins: [
            new CleanWebpackPlugin(),
            new HtmlWebpackPlugin({
                template: 'index.html',
            }),
            new MiniCssExtractPlugin({filename:'styles.css'}),           
            
        ],
        module: {
            rules: [
                {
                    test: /\.js$/,
                    exclude: /node_modules/,
                    use: {
                      loader: 'babel-loader',
                      options: {
                        presets: ['@babel/preset-env']
                      }
                    }
                },
                {
                    test: /\.css$/i,
                    use: [MiniCssExtractPlugin.loader, "css-loader"],
                  },
                
                  {
                    test: /\.(png|ico|svg|jpe?g|gif)$/i,
                    use: [
                      {
                        loader: 'file-loader',
                      },
                    ],
                  },
                  {
                    test: /\.html$/i,
                    loader: "html-loader",
                  },

            ]
        },

    }
    return config;
}