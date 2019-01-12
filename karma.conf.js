var webpackConfig = require('./webpack.config');
module.exports = function(config) {
    config.set({
        browsers: ['Chrome'],
        singleRun: true,
        frameworks: ['mocha'],
        files: ['app/tests/**/*.test.js'],
        preprocessors: {
            'app/tests/**/*.test.js': ['webpack', 'sourcemap']
        },
        reporters: ['mocha'],
        reporters: ['progress', 'html'],
        htmlReporter: {
            outputFile: 'myTest/units.html'    
        },
        pageTitle: 'my unit test report',
        subPageTitle: 'A Simple Test report App of Mocha Test',
        useLegacyStyle: true,
        client: {
            mocha: {
                timeout: '5000'
            }
        },
        webpack: webpackConfig,
        webpackServer: {
            noInfo: true
        }
        
    })
}