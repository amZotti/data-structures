var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var currentInstance = {
    index : 0,
    storage : {},
    push : stackMethods.push,
    pop : stackMethods.pop,
    size : stackMethods.size
  };
  return currentInstance;
};

var stackMethods = {
  push : function(value){
    this.storage[this.index++] = value;
  },

  pop : function(){
    if (this.index !== 0)
      return this.storage[--this.index];
  },

  size : function(){
    return this.index;
  }
};


