var addon = require('./build/Release/stdstring');
//var addon = require('./build/Release/addon');
var test = new addon.STDString('test');
test.add('!');
console.log('test\'s contents: %s', test);
