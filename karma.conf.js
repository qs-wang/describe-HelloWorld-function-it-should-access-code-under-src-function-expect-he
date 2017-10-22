'use strict';

module.exports = function(karma) {
  karma.set({

    basePath: '',
    frameworks: ['browserify', 'jasmine'],

    files: [
       'src/**/*.js',
       'test/**/*Spec.js'
    ],

    exclude: [
    ],

    preprocessors: {
       'src/**/*.js': ['browserify'],
       'test/**/*Spec.js': ['browserify']
    },

    browserify: {
       debug: true,
      "transform": [["babelify", { "presets": ["env"] }]]
    },

    browsers: [ 'PhantomJS' ],

    logLevel: 'LOG_DEBUG',

    singleRun: true,
    autoWatch: false
  });
};
