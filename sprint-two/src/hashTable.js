var HashTable = function(){
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
  this._currentItems = 0;
};

HashTable.prototype.insert = function(k, v){
  var i = getIndexBelowMaxForKey(k, this._limit);

  for (var j = 0;j < this._limit;j++) {
    var hashIndex = (i + j) % this._limit;
    var bucket = this._storage.get(hashIndex);
    if (bucket === undefined || bucket[0] === null) {
      this._storage.set(hashIndex, [k,v]);
      this._currentItems++;
      if ((this._currentItems / this._limit) >= 0.75) {
        this.expand()
      }
      break;
    }
  }
};

HashTable.prototype.retrieve = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);

  for (var j = 0;j < this._limit;j++) {
    var hashIndex = (i + j) % this._limit;
    var bucket = this._storage.get(hashIndex);

    if (bucket !== undefined && bucket[0] === k) {
      return bucket[1];
    }
  }

  return null;
};

HashTable.prototype.remove = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  for (var j = 0;j < this._limit;j++) {
    var hashIndex = (i + j) % this._limit;
    var bucket = this._storage.get(hashIndex);
    if (bucket !== undefined && bucket[0] === k) {
      this._storage.set(hashIndex, [null, null]);
      this._currentItems--;
      if ((this._currentItems / this._limit) <= 0.25) {
        this.collapse()
      }
      break;
    }
  }
};

HashTable.prototype.expand = function() {
  this._limit *= 2;
  this.copy();
};

HashTable.prototype.collapse = function() {
  if (this._limit === 8) {
    return;
  }
  this._limit /= 2;
  this.copy();
};

HashTable.prototype.copy = function() {
  var oldStorage = this._storage;
  this._storage = new LimitedArray(this_.limit);
  oldStorage.each(function(value, key) {
    if (value !== undefined && value[0] !== null) {
      this.insert(value[0], value[1]);
    }
  });
}

/*
 * Complexity: What is the time complexity of the above functions?
 */
