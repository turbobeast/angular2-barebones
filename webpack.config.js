'use strict'

const webpack = require('webpack')
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: {
        'app': path.join(__dirname, 'src', 'app', 'main.ts'),
        'vendor': ['@angular/core', '@angular/common', "@angular/platform-browser"]
    },

    resolve: {
        extensions: ['.ts', '.js']
    },

    module: {
     loaders: [
        {
            test: /.ts$/,
            loaders: ['awesome-typescript-loader', 'angular2-router-loader']
        }]
    },
    
    output: {
        path: path.join(__dirname, 'dist'),
        filename: '[name].[chunkhash].js'
    },

    plugins: [
        new webpack.DefinePlugin({
            __PRODUCTION__: process.env.NODE_ENV === 'production'
        }),
        new HtmlWebpackPlugin({
            template: path.join('src', 'index.html')
        }),
        new webpack.ContextReplacementPlugin(/angular\/core\/(esm\/src|src)\/linker/, __dirname)
    ]
}