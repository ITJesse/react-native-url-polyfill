var _URLSearchParams = require('../URLSearchParams');
describe('URL', function () {
  it('should pass Mozilla Dev Network examples', function () {
    var paramsString = 'q=URLUtils.searchParams&topic=api';
    var searchParams = new _URLSearchParams.URLSearchParams(paramsString);
    expect(searchParams.has('topic')).toBe(true);
    expect(searchParams.get('topic')).toBe('api');
    expect(searchParams.getAll('topic')).toEqual(['api']);
    expect(searchParams.get('foo')).toBe(null);
    searchParams.append('topic', 'webdev');
    expect(searchParams.toString()).toBe(
      'q=URLUtils.searchParams&topic=api&topic=webdev',
    );
    searchParams.set('topic', 'More webdev');
    expect(searchParams.toString()).toBe(
      'q=URLUtils.searchParams&topic=More+webdev',
    );
    searchParams.delete('topic');
    expect(searchParams.toString()).toBe('q=URLUtils.searchParams');
  });
});
