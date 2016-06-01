// Karma configuration
var webpackConfig = require('./webpack.config.js');
var argv = require('yargs').argv;

module.exports = function(config) {
  config.set({
    basePath: '',
    frameworks: ['mocha', 'chai'],
    webpack: webpackConfig,
    webpackServer: {
        noInfo: true
    },
    plugins: [
        'karma-mocha', 
        'karma-chai', 
        'karma-webpack', 
        'karma-phantomjs-launcher', 
        'karma-spec-reporter',
        'karma-sourcemap-loader'
    ],
    files: [
      'tests.webpack.js'
    ],
    preprocessors: {
        'tests.webpack.js': ['webpack', 'sourcemap']
    },
    reporters: ['spec'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    browsers: ['PhantomJS'],
    singleRun: !argv.watch
  });
};
