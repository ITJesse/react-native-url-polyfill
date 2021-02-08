Object.defineProperty(exports, '__esModule', {value: true});
exports.URL = void 0;
var _whatwgUrlWithoutUnicode = require('whatwg-url-without-unicode');
var _reactNative = require('react-native');
var NativeBlobModule = _reactNative.NativeModules.NativeBlobModule;
var BLOB_URL_PREFIX = null;
if (
  NativeBlobModule &&
  typeof NativeBlobModule.getConstants().BLOB_URI_SCHEME === 'string'
) {
  var constants = NativeBlobModule.getConstants();
  BLOB_URL_PREFIX = constants.BLOB_URI_SCHEME + ':';
  if (typeof constants.BLOB_URI_HOST === 'string') {
    BLOB_URL_PREFIX += '//' + constants.BLOB_URI_HOST + '/';
  }
}
_whatwgUrlWithoutUnicode.URL.createObjectURL = function createObjectURL(blob) {
  if (BLOB_URL_PREFIX === null) {
    throw new Error('Cannot create URL for blob!');
  }
  return (
    '' +
    BLOB_URL_PREFIX +
    blob.data.blobId +
    '?offset=' +
    blob.data.offset +
    '&size=' +
    blob.size
  );
};
_whatwgUrlWithoutUnicode.URL.revokeObjectURL = function revokeObjectURL(url) {};
var URL = _whatwgUrlWithoutUnicode.URL;
exports.URL = URL;
