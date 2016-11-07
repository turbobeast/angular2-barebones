'use strict'

module.exports = (config) => {
    const coverage = config.singleRun ? ['coverage'] : []

    config.set({
        frameworks: ['jasmine'],
        plugins: [
            'karma-jasmine',
            'karma-sourcemap-writer',
            'karma-sourcemap-loader',
            'karma-webpack',
            'karma-coverage',
            'karma-spec-reporter',
            'karma-chrome-launcher',
            'karma-phantomjs-launcher'
        ],
        files: [
            './src/tests.entry.ts',
            {
                pattern: '**/*.map',
                served: true,
                included: false,
                watched: true
            }
        ],
        preprocessors:{
            './src/tests.entry.ts': ['webpack', 'sourcemap'],
            './src/**/*.spec.js': ['sourcemap'] },

        webpack: require('./webpack.test.js'),
        webpackServer: { noInfo: true },
        logLevel: config.LOG_INFO,
        reporters: ['spec'],
        port: 9999,
        colors: true,
        browsers: ['Chrome', 'PhantomJS'],
        phantomJSLauncher: { exitOnResourceError: true },
        captureTimeout: 2000
    })
}