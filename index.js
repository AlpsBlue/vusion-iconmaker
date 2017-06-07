var _ = require('lodash');
var path = require('path');

module.exports = function (source) {
    // console.log(source);
    let resourcePath = this.resourcePath;
    let tag = path.basename(resourcePath, '.svg');
    return 'module.exports = ' + tag;
  }