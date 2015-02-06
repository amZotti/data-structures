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
  return _.some(this._storage, function(value) {
    return (_.isEqual(item, value));
  });
};

setPrototype.remove = function(item){
  var rawResult = _.map(this._storage, function(value) {
    return (_.isEqual(item, value));
  });
  var index = rawResult.indexOf(true);
  if (index !== -1){
    this._storage.splice(index, 1);
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
