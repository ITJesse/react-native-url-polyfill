Object.defineProperty(exports, '__esModule', {value: true});
var _exportNames = {setupURLPolyfill: true};
exports.setupURLPolyfill = setupURLPolyfill;
require('./js/ios10Fix');
var _PolyfillFunctions = require('react-native/Libraries/Utilities/PolyfillFunctions');
var _package = require('./package.json');
var _URL = require('./js/URL');
Object.keys(_URL).forEach(function (key) {
  if (key === 'default' || key === '__esModule') {
    return;
  }
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) {
    return;
  }
  if (key in exports && exports[key] === _URL[key]) {
    return;
  }
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _URL[key];
    },
  });
});
var _URLSearchParams = require('./js/URLSearchParams');
Object.keys(_URLSearchParams).forEach(function (key) {
  if (key === 'default' || key === '__esModule') {
    return;
  }
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) {
    return;
  }
  if (key in exports && exports[key] === _URLSearchParams[key]) {
    return;
  }
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _URLSearchParams[key];
    },
  });
});
function setupURLPolyfill() {
  global.REACT_NATIVE_URL_POLYFILL = _package.name + '@' + _package.version;
  (0, _PolyfillFunctions.polyfillGlobal)('URL', function () {
    return require('./js/URL').URL;
  });
  (0, _PolyfillFunctions.polyfillGlobal)('URLSearchParams', function () {
    return require('./js/URLSearchParams').URLSearchParams;
  });
}
