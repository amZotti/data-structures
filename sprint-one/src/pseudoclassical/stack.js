var Stack = function() {
  this.index = 0;
  this.storage = {};
};

Stack.prototype.pop = function(){
  if (this.index !== 0)
    return this.storage[--this.index];
};

Stack.prototype.push = function(value){
  this.storage[this.index++] = value;
};

Stack.prototype.size = function(){
  return this.index;
}
