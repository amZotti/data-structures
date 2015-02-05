var Queue = function() {
  this.rear = 0;
  this.front = 0;
  this.storage = {};
};

Queue.prototype.enqueue = function(value){
  this.storage[this.rear] = value;
  this.rear++;
};

Queue.prototype.dequeue = function(){
  if (this.size() > 0) {
    var frontValue = this.storage[this.front];
    this.front++;
    return frontValue;
  }
};

Queue.prototype.size = function(){
  return this.rear - this.front;
};
