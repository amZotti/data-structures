var HashTable = function(){
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v){
  var i = getIndexBelowMaxForKey(k, this._limit);

  for (var j = 0;j < this._limit;j++) {
    var hashIndex = (i + j) % this._limit;
    var bucket = this._storage.get(hashIndex);
    if (bucket === undefined || bucket[0] === null) {
      this._storage.set(hashIndex, [k,v]);
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
  //this._storage.set(i, [null, null]);
  for (var j = 0;j < this._limit;j++) {
    var hashIndex = (i + j) % this._limit;
    var bucket = this._storage.get(hashIndex);
    if (bucket !== undefined && bucket[0] === k) {
      this._storage.set(hashIndex, [null, null]);
      break;
    }
  }
};



/*
 * Complexity: What is the time complexity of the above functions?
 */
