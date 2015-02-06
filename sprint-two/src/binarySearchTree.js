var BinarySearchTree = function(value){
  var bst = Object.create(null);
  bst.value = value;
  bst.left = null;
  bst.right = null;
  _.extend(bst, bstMethods);
  return bst;
};

var bstMethods = {};
bstMethods.contains = function(value) {
  if (this.value === value) {
    return true;
  } else if (value < this.value) {
    if (this.left !== null) {
      return this.left.contains(value);
    } else {
      return false;
    }
  } else {
    if (this.right !== null) {
      return this.right.contains(value);
    } else {
      return false;
    }
  }
};

bstMethods.depthFirstLog = function(callback) {
  callback(this.value);
  if (this.left !== null) {
    this.left.depthFirstLog(callback);
  }
  if (this.right !== null) {
    this.right.depthFirstLog(callback);
  }
};

bstMethods.insert = function(value) {
  if (value === this.value) {
    return;
  } else if (value < this.value) {
    if (this.left != null) {
      this.left.insert(value);
    } else {
      this.left = BinarySearchTree(value);
    }
  } else {
    if (this.right != null) {
      this.right.insert(value);
    } else {
      this.right = BinarySearchTree(value);
    }
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
