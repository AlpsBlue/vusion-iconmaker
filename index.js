var _ = require('lodash');
var path = require('path');


module.exports = function (source) {
    let resourcePath = this.resourcePath;
    let tag = this.className;
    return 'module.exports = ' + tag;
  }
