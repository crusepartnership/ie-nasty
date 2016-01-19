(function() {
  "use strict";
  //Polyfill for no 'hasOwnProperty' method in IE < 9
  //Required for ngStorage
  if (window.hasOwnProperty === undefined) {
    window.hasOwnProperty = function(property) {
      return Object.prototype.hasOwnProperty.call(this, property);
    };
  }

  //Polyfill for native string trim function
  //Required form math.js
  if (String.prototype.trim === undefined) {
    String.prototype = function() {
      return this.replace(/^\s\s*/, '').replace(/\s\s*$/, '');
    };
  }


})();