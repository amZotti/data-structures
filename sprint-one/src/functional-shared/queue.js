var Queue = function(){
  var currentInstance = {
    storage : {},
    rear : 0,
    front : 0,
    size : queueMethods.size,
    enqueue : queueMethods.enqueue,
    dequeue : queueMethods.dequeue
  };

  return currentInstance;
};

var queueMethods = {
  enqueue : function(value){
    this.storage[this.rear] = value;
    this.rear++;
  },

  dequeue : function(){
    if (this.size() > 0) {
      var frontValue = this.storage[this.front];
      this.front++;
      return frontValue;
    }
  },

  size : function(){
    return this.rear - this.front;
  }
};



