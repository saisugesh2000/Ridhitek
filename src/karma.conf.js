Module.exports = function(config){
config.set({
... 
...
 plugins: [
   require('karma-jasmine'),
   require('karma-chrome-launcher'),
   require('karma-jasmine-html-reporter'),
   require('karma-coverage-istanbul-reporter'),
   require('@angular/cli/plugins/karma'),
   require('karma-jasmine-diff-reporter'),
   require('karma-structured-json-reporter'),
   require('karma-sonarqube-reporter'), // This one
 ],
 browsers: ['Chrome'],
…
...
}
