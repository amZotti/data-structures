var Queue = function() {
   var queueInstance = Object.create(queueMethods);
   queueInstance.rear = 0;
   queueInstance.front = 0;
   queueInstance.storage = {};
   return queueInstance;

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


