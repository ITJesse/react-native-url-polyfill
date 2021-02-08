var _reactNative = require('react-native');
var majorVersionIOS = parseInt(_reactNative.Platform.Version, 10);
if (_reactNative.Platform.OS === 'ios' && majorVersionIOS === 10) {
  if (
    Object.getOwnPropertyDescriptor(ArrayBuffer.prototype, 'byteLength') == null
  ) {
    Object.defineProperty(ArrayBuffer.prototype, 'byteLength', {
      configurable: true,
      enumerable: false,
      get: function get() {
        return null;
      },
    });
  }
}
