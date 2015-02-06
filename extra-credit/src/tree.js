var Tree = function(value){
  var newTree = {};
  newTree.value = value;
  newTree.children = [];
  _.extend(newTree, treeMethods);
  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value){
  var childNode = Tree(value);
  this.children.push(childNode);
  return childNode;
};

treeMethods.contains = function(target){
  var results = (this.value === target);
  if (!results) {
    for (var i = 0; i < this.children.length; i += 1) {
      results = results || this.children[i].contains(target);
    }
  }
  return results;
};


/*
 * Complexity: What is the time complexity of the above functions?
 */
