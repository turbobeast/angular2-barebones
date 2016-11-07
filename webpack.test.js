'use strict'

const webpack = require('webpack')
const path = require('path')

module.exports = {
    plugins: [
        new webpack.DefinePlugin({
            __TEST__: true
        }),
        new webpack.SourceMapDevToolPlugin({ filename: null, test: /\.ts$/ }),
        new webpack.ContextReplacementPlugin(/angular\/core\/(esm\/src|src)\/linker/, __dirname)
    ],
    entry: {
        'test': path.join(__dirname, 'src', 'tests.entry.ts'),
    },
    resolve: {
        extensions: ['.ts', '.js']
    },

    devtool: 'inline-source-maps',
    module: {
        loaders: [{
                test: /\.ts$/,
                loader: 'awesome-typescript-loader'
            }]
    },

    stats: { colors: true, reasons: true }
}