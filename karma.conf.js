module.exports = function (karma) {
    'use strict';
    karma.set({

        basePath: '',

        frameworks: ['jasmine'],

        files: [
            {pattern: 'app/bower_components/angular/angular.js',
        'node_modules/angular-mocks/angular-mocks.js',
        'app/bower_components/jquery/dist/jquery.js',
        'app/js/*.js',
        'test/spec/*.js'}
        ],

        reporters: ['progress'],

        port: 9998,
        colors: true,
        autoWatch: true,
        singleRun: false,

        // level of logging
        // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
        logLevel: karma.LOG_INFO,

        browsers: ['Chrome']


    });
};
