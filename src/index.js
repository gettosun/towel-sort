"use strict";

module.exports = function towelSort (matrix) {
  if (typeof matrix == 'undefined') {
    return [];
  }

  return matrix.map((item, index) => (index % 2 == 0) ? item : item.reverse()).flat();
};