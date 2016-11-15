'use strict'

const webpack = require('webpack')
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const AotPlugin = require('@ngtools/webpack').AotPlugin

module.exports = {
    entry: {
        'app': path.join(__dirname, 'src', 'app', 'main.aot.ts'),
        'vendor': ['@angular/core', '@angular/common', "@angular/platform-browser"]
    },

    resolve: {
        extensions: ['.ts', '.js']
    },

    module: {
     loaders: [
        {
            test: /\.ts$/,
            loaders: ['@ngtools/webpack']
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
        new webpack.ContextReplacementPlugin(/angular\/core\/(esm\/src|src)\/linker/, __dirname),
        new AotPlugin({
            tsConfigPath: './tsconfig-aot.json',
            entryModule: 'src/app/app.module#AppModule'
        })
    ]
}
