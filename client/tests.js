// Jasmine unit tests

require('!!script-loader!es6-shim/es6-shim.min.js');
require('!!script-loader!es6-promise/dist/es6-promise.min.js');
require('!!script-loader!reflect-metadata/Reflect.js');
require('!!script-loader!zone.js/dist/zone.min.js');
require('!!script-loader!zone.js/dist/long-stack-trace-zone.min.js');

require('./articles.component.spec.js');
