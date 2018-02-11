/**
 * @license
 * find 1.0.0
 * Copyright Sylvain Longepée
 * Released under MIT license 
 */

if (!Array.prototype.find) {
  Array.prototype.find = function(predicate) {
    for (var i = 0, len = this.length; i < len; i++) {
      if (predicate(this[i])) {
        return this[i];
      }
    }
    return undefined;
  };
}