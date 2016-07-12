// entry file for webpack

// require('!!script!angular2/bundles/angular2-polyfills.min.js');
// require('!!script!rxjs/bundles/Rx.umd.min.js');
require('!!script!es6-shim/es6-shim.min.js');
require('!!script!es6-promise/dist/es6-promise.min.js');
require('!!script!reflect-metadata/Reflect.js');
require('!!script!zone.js/dist/zone.min.js');
require('!!script!zone.js/dist/long-stack-trace-zone.min.js');

require('bootstrap/dist/css/bootstrap.min.css');

require('./css/styles.css');

require('./main');
