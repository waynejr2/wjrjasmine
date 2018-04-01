/* global module, require */

//var module1 = new module1();
var module1 = require('./module1');

module.exports = (function() {
  'use strict';

  function module2() {
	  module1.printmsg();
  }

  module2.width = 32;
  module2.height = 48;

  module2.prototype = new Entity();
  module2.prototype.constructor = module2;

  return module2;
}());


var wjr = new module2();
