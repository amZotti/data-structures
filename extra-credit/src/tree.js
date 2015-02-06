var Tree = function(value){
  var newTree = {};
  newTree.value = value;
  newTree.parent = null;
  newTree.children = [];
  _.extend(newTree, treeMethods);
  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value){
  var childNode = Tree(value);
  this.children.push(childNode);
  childNode.parent = this;
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

treeMethods.removeFromParent = function () {
  if (this.parent === null) {
    return;
  }

  var parent = this.parent;
  var indexOfChild = parent.children.indexOf(this);
  parent.children.splice(indexOfChild, 1);
  this.parent = null;
};


/*
 * Complexity: What is the time complexity of the above functions?
 */
