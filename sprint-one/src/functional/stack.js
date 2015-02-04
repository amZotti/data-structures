var Stack = function(){
  var currentInstance = {};
  var size = 0;
  var storage = {};

  currentInstance.push = function(value){
    storage[size++] = value;
  };

  currentInstance.pop = function(){
    if (size !== 0)
      return storage[--size];
  }

  currentInstance.size = function(){
    return size;
  };
  return currentInstance;
};
