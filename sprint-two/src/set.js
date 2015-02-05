var Set = function(){
  var set = Object.create(setPrototype);
  set._storage = [];
  return set;
};

var setPrototype = {};

setPrototype.add = function(item){
  if (!this.contains(item)) {
    this._storage.push(item);
  }
};

setPrototype.contains = function(item){
  return this._storage.indexOf(item) !== -1;
};

setPrototype.remove = function(item){
  var index = this._storage.indexOf(item);
  console.log(index);
  if (index !== -1){
    this._storage.splice(index, 1);
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
