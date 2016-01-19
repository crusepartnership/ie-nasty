(function() {
  "use strict";
  //Polyfill for no 'hasOwnProperty' method in IE < 9
  //Required for ngStorage
  if (window.hasOwnProperty === undefined) {
    window.hasOwnProperty = function(property) {
      return Object.prototype.hasOwnProperty.call(this, property);
    };
  }
 

})();