(function() {
  "use strict";
  //Polyfill for no 'hasOwnProperty' method in IE < 9
  if (window.hasOwnProperty === undefined) {
    window.hasOwnProperty = function(property) {
      return Object.prototype.hasOwnProperty(this, property);
    };
  }
})();