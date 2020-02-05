// Autor: Caique Sousa
'use strict'
const modoDev = process.env.NODE_ENV !== 'production'
const webpack = require('webpack')
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const tinyPngWebpackPlugin = require('tinypng-webpack-plugin')

module.exports = {
    mode: modoDev ? 'development' : 'production',
    entry: path.join(__dirname, 'src', 'index'),
    // another: './src/js/modernizr-custom',
    output: {
        filename: '[name].js',
        path: path.join(__dirname, 'public'),
        // publicPath: '/dist/'
    },
    devServer: {
        contentBase: "./src/index.html",
        port: 8081,
    },
    optimization: {
        splitChunks: {
            chunks:'async'
    },
        minimizer: [
            new UglifyJsPlugin({
                cache: true,
                parallel: true,
            }),
            new OptimizeCSSAssetsPlugin({})
        ]
    },
    plugins: [
        // require('postcss-loader'),
        new MiniCssExtractPlugin({
            filename: "main.css"
        }),
        new HtmlWebpackPlugin({
            template: './src/index.html',
            filename: 'index.html',
            inject: 'body'
        }),
        new HtmlWebpackPlugin({
            template: './src/pages/programacao.html',
            filename: 'programacao.html',
            inject: 'body'
        }),
        new tinyPngWebpackPlugin({
            key:"M38Y2383ZRQ5HF1wXDXwHF41KnqslLwg",
            ext: ['png', 'jpeg', 'jpg'],//img ext name
        })
    ],
    module: {
        rules: [
            {
                test: /\.m?js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env'],
                        plugins: ['@babel/plugin-proposal-object-rest-spread'],
                        cacheDirectory: true
                    }
                }
            },{
                test: /\.html$/i,
                loader: 'html-loader',
            },{
                test: /\.css$/,
                use: [
                    modoDev ? 'style-loader' : MiniCssExtractPlugin.loader,
                    // MiniCssExtractPlugin.loader,
                    // 'postcss-loader',
                    // 'style-loader', // Adiciona CSS a DOM injetando a tag <style>
                    'css-loader', // interpreta @import, url()...
                    // 'sass-loader',
                ]
            },
            // {
            //     test: /\.(png|jpe?g)$/,
            //         use: [
            //         {
            //             loader: 'tinify-loader',
            //             options: {
            //             apikey: 'M38Y2383ZRQ5HF1wXDXwHF41KnqslLwg'
            //             }
            //         }
            //     ]
            // },
            {
            test: /\.(png|svg|jpg|gif|woff|woff2|eot|ttf|otf)$/,
            use: {  
                loader: 'file-loader',  
                options: {  
                    name: '[name].[ext]',  
                    outputPath: './'  
                }  
            }  
            // use: ['file-loader'],
            // loaders: [{
            //     options: {
            //         name: './src/assets/'
            //     }
            // }]
        }]
    }
}