describe('bloomfilter', function() {
  var bloomFilter;

  beforeEach(function() {
    bloomFilter = new BloomFilter();
  });

  it('should return true for values that were added', function() {
    var str1 = 'where is my barbeque?';
    bloomFilter.add(str1);
    expect(bloomFilter.contains(str1)).to.be(true);
  });

  it('should maybe return false for values that were not added', function() {
    bloomFilter.add('lol');
    bloomFilter.add('bbq');
    bloomFilter.add('foo');
    bloomFilter.add('bar');
    bloomFilter.add('rof');
    bloomFilter.add('don');
    bloomFilter.add('fun');
    bloomFilter.add('jon');
    expect(bloomFilter.contains('ok')).to.be(false);
  });

  it('should set the same flags for the same inputs', function() {
    bloomFilter.add('lol');
    bloomFilter.add(['lol']);
    var firstArray = bloomFilter.storage;
    bloomFilter.add('lol');
    bloomFilter.add(['lol']);
    var secondArray = bloomFilter.storage;
    expect(_.isEqual(firstArray, secondArray)).to.be(true);
  });
});
