//var Entity = require('./Entity');

module.exports = (function() {
  'use strict';

  function module1() {
  }

  module1.prototype.msg = config.MSG || "msgmsgmsg";
  module1.prototype.good_msg = config.GOOD_MSG || "good";

  module1.prototype.printmsg = function() {
	  console.log(this.msg);
  };
  
  return module1;
}());
