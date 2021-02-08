var _URL = require('../URL');
describe('URL', function () {
  it('should pass Mozilla Dev Network examples', function () {
    var a = new _URL.URL('/', 'https://developer.mozilla.org');
    expect(a.href).toBe('https://developer.mozilla.org/');
    var b = new _URL.URL('https://developer.mozilla.org');
    expect(b.href).toBe('https://developer.mozilla.org/');
    var c = new _URL.URL('en-US/docs', b);
    expect(c.href).toBe('https://developer.mozilla.org/en-US/docs');
    var d = new _URL.URL('/en-US/docs', b);
    expect(d.href).toBe('https://developer.mozilla.org/en-US/docs');
    var f = new _URL.URL('/en-US/docs', d);
    expect(f.href).toBe('https://developer.mozilla.org/en-US/docs');
    var g = new _URL.URL(
      '/en-US/docs',
      'https://developer.mozilla.org/fr-FR/toto',
    );
    expect(g.href).toBe('https://developer.mozilla.org/en-US/docs');
    var h = new _URL.URL('/en-US/docs', a);
    expect(h.href).toBe('https://developer.mozilla.org/en-US/docs');
  });
  it('should pass WHATWG spec examples', function () {
    var a = new _URL.URL('https:example.org');
    expect(a.href).toBe('https://example.org/');
    var b = new _URL.URL('https://////example.com///');
    expect(b.href).toBe('https://example.com///');
    var c = new _URL.URL('https://example.com/././foo');
    expect(c.href).toBe('https://example.com/foo');
    var d = new _URL.URL('hello:world', 'https://example.com/');
    expect(d.href).toBe('hello:world');
    var e = new _URL.URL('https:example.org', 'https://example.com/');
    expect(e.href).toBe('https://example.com/example.org');
    var f = new _URL.URL('\\example\\..\\demo/.\\', 'https://example.com/');
    expect(f.href).toBe('https://example.com/demo/');
    var g = new _URL.URL('example', 'https://example.com/demo');
    expect(g.href).toBe('https://example.com/example');
  });
  it('should support unicode', function () {
    var a = new _URL.URL('https://r3---sn-p5qlsnz6.googlevideo.com');
    expect(a.href).toBe('https://r3---sn-p5qlsnz6.googlevideo.com/');
  });
  it('should pass issue #25717 example', function () {
    var a = new _URL.URL('about', 'https://www.mozilla.org');
    expect(a.href).toBe('https://www.mozilla.org/about');
    var b = new _URL.URL('dev', 'https://google.dev');
    expect(b.href).toBe('https://google.dev/dev');
  });
  it('should pass issue #24428 example', function () {
    var url = new _URL.URL(
      'https://facebook.github.io/react-native/img/header_logo.png',
    );
    expect(url.href).toBe(
      'https://facebook.github.io/react-native/img/header_logo.png',
    );
  });
});
