const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

let mode = 'development'
if (process.env.NODE_ENV === 'production') {
    mode = 'production'
}

module.exports = {
    mode: mode,
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].[contenthash].js',
        clean: true,
    },
    devtool: 'source-map',
    devServer: {
        hot: true,
        open: true,
        static: {
            directory: path.join(__dirname, 'dist'),
            watch: true,
        },
        watchFiles: {
            paths: ['src/**/*.*']
        },
    },
    plugins: [
        new MiniCssExtractPlugin(
            {
                filename: '[name].[contenthash].css'
            }
        ),
        new HtmlWebpackPlugin({
        template: "./src/index.html",
        inject: 'body',
        minify: false
    }),
        new HtmlWebpackPlugin({
        filename: 'news.html',
        template: "./src/news.html",
        inject: 'body',
        minify: false
    }),
    new HtmlWebpackPlugin({
        filename: 'myblog.html',
        template: "./src/myblog.html",
        inject: 'body',
        minify: false
    }),
     new HtmlWebpackPlugin({
         filename: 'lessons.html',
         template: "./src/lessons.html",
         inject: 'body',
         minify: false
     }),
     new HtmlWebpackPlugin({
         filename: 'contacts.html',
         template: "./src/contacts.html",
         inject: 'body',
         minify: false
     }),
     new HtmlWebpackPlugin({
         filename: 'reviews.html',
         template: "./src/reviews.html",
         inject: 'body',
         minify: false
     }),
     new HtmlWebpackPlugin({
         filename: 'about.html',
         template: "./src/about.html",
         inject: 'body',
         minify: false
     }),
     new HtmlWebpackPlugin(
         {
             filename: 'test.html',
             template: "./src/test.html",
             inject: 'false',
             minify: false
         }
     )

    ],
    module:{
        rules: [
            {
                test: /\.html$/i,
                loader: "html-loader",
            },
            {
                test: /\.(sa|sc|c)ss$/,
                use: [
                    (mode === 'development') ? 'style-loader' : MiniCssExtractPlugin.loader,
                    "css-loader",
                    {
                        loader: "postcss-loader",
                        options: {
                            postcssOptions: {
                                plugins: [
                                    [
                                        "postcss-preset-env",
                                        {
                                            // Options
                                        },
                                    ],
                                ],
                            },
                        },
                    },
                    "sass-loader",
                ]
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
                generator: {
                    filename: 'images/[hash][ext][query]',
                },
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/i,
                type: 'asset/resource',
                generator: {
                    filename: 'fonts/[hash][ext]'
                },
            },
            {
                test: /\.m?js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            }
        ]
    }
}