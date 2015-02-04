var Queue = function(){
  var currentInstance = {};
  var storage = {};
  var rear = 0;
  var front = 0;

  currentInstance.enqueue = function(value){
    storage[rear] = value;
    rear++;
  };

  currentInstance.dequeue = function(){
    if (currentInstance.size() > 0) {
      var frontValue = storage[front];
      front++;
      return frontValue;
    }
  };

  currentInstance.size = function(){
    return rear - front;
  };

  return currentInstance;
};
