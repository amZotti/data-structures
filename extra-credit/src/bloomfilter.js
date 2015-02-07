function BloomFilter(){
  this.storage = [];
  this.storageSize = 18;
};

BloomFilter.prototype.add = function(key) {
  var str = JSON.stringify(key);
  var hash1 = this.hash1(str, this.storageSize);
  var hash2 = this.hash2(str, this.storageSize);
  var hash3 = this.hash3(str, this.storageSize);

  this.storage[hash1] = true;
  this.storage[hash2] = true;
  this.storage[hash3] = true;
};

BloomFilter.prototype.contains = function(key) {
  var str = JSON.stringify(key);
  var hash1 = this.hash1(str, this.storageSize);
  var hash2 = this.hash2(str, this.storageSize);
  var hash3 = this.hash3(str, this.storageSize);

  return !!(this.storage[hash1] && this.storage[hash2] && this.storage[hash3]);
};

BloomFilter.prototype.hash1 = function(str, maxSize) {
  var hash = 0;
  for (var i = 0; i < str.length; i++) {
    hash = (hash<<5) + hash + str.charCodeAt(i);
    hash = hash & hash; // Convert to 32bit integer
    hash = Math.abs(hash);
  }
  return hash % maxSize;
};

BloomFilter.prototype.hash2 = function(str, maxSize) {
  var hash = 0;
  for (var i = 0; i < str.length; i++) {
    hash = (hash<<4) + hash + str.charCodeAt(i) + 1;
    hash = hash & hash; // Convert to 32bit integer
    hash = Math.abs(hash);
  }
  return hash % maxSize;
};

BloomFilter.prototype.hash3 = function(str, maxSize) {
  var hash = 0;
  for (var i = 0; i < str.length; i++) {
    hash = (hash<<6) + hash + str.charCodeAt(i) + 3;
    hash = hash & hash; // Convert to 32bit integer
    hash = Math.abs(hash);
  }
  return hash % maxSize;
};
