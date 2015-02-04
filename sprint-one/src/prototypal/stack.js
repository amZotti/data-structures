var Stack = function() {
  var currentObject = Object.create(stackMethods);
  currentObject.index = 0;
  currentObject.storage = {};
  return currentObject;
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


