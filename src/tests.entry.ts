// <reference path="typings/webpack/index.d.ts" />

require('babel-polyfill')
require('core-js/es6')
require('core-js/es7/reflect')
require('reflect-metadata')
require('ts-helpers')

// zones!!
require('zone.js/dist/zone')
require('zone.js/dist/long-stack-trace-zone')
require('zone.js/dist/async-test')
require('zone.js/dist/fake-async-test')
require('zone.js/dist/sync-test')
require('zone.js/dist/proxy')
require('zone.js/dist/jasmine-patch')

let context = (<{ context?: Function }>require).context('./', true, /\.spec\.ts/)
context.keys().forEach(context)