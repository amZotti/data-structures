function BTree(maxSize) {
  this.root = new BTreeNode(maxSize);
  var tree = this;


  function BTreeNode(maxSize) {
    this.maxSize = maxSize;
    this.children = [];
    this.values = [];
    this.parent = null;
  };

  BTreeNode.prototype.findInsertionIndex = function(value) {
    for (var j = 0;j < this.values.length;j++) {
      if (value < this.values[j]) {
        return j;
      }
    }
    return j;
  };

  BTreeNode.prototype.doesChildHaveRoom = function(insertionIndex) {
    return this.children[insertionIndex].values.length < this.children[insertionIndex].maxSize;
  };

  BTreeNode.prototype.attemptChildInsertion = function(value) {
    if (this.children.length !== 0) {
      var insertionIndex = this.findInsertionIndex(value);
      if (this.doesChildHaveRoom(insertionIndex)) {
        this.children[insertionIndex].add(value);
        return true;
      }
    }
    return false;
  };

  BTreeNode.prototype.populateSibling = function(sibling, index) {
    for (var i = 0; i < index; i += 1) {
      sibling.add(this.values[i]);
    }
  };

  BTreeNode.prototype.createParent = function(sibling, index) {
    this.parent = new BTreeNode(this.maxSize);
    this.parent.add(this.values[index]);
    this.parent.children.push(sibling);
    this.parent.children.push(this);
    tree.root = this.parent;
  };

  BTreeNode.prototype.splitNode = function() {
    var newSibling = new BTreeNode(this.maxSize);
    var middleElementIndex = Math.floor(this.values.length / 2);

    this.populateSibling(newSibling, middleElementIndex);

    if (this.parent === null) {
      this.createParent(newSibling, middleElementIndex);
    } else {
      var siblingIndex = this.findChildIndex(this) - 1;
      this.parent.add(this.values[middleElementIndex]);
      this.parent.children.splice(siblingIndex, 0, newSibling);
    }
    newSibling.parent = this.parent;
    this.values = this.values.slice(middleElementIndex + 1);

    if (this.children.length === 0) {
      return;
    }
    else {
      for (var k = 0;k <= middleElementIndex;k++) {
        newSibling.children.push(this.children[k]);
        this.children[k].parent = newSibling;
      }
      this.children = this.children.slice(middleElementIndex + 1);
    }
  };

  BTreeNode.prototype.add = function(value) {
    if (this.attemptChildInsertion(value)) {
      return;
    }

    this.sortedInsert(this.values, value);

    if (this.values.length >= this.maxSize) {
      this.splitNode();
    }
  };


  BTreeNode.prototype.sortedInsert = function(collection, value){
    if (collection.length === 0) {
        collection.push(value);
        return;
    }

    for (var i = 0; i < collection.length; i += 1) {
      if (value < collection[i]) {
        collection.splice(i, 0, value);
        return;
      }
    }

    collection.push(value);
    return;
  };

  BTreeNode.prototype.findChildIndex = function(child) {
    for (var i = 0; i < this.children.length; i += 1) {
      if (this.children[i] === child) {
        return i;
      }
    }
    return null;
  }

  BTreeNode.prototype.contains = function(value) {

  };

  BTreeNode.prototype.remove = function(value) {

  };
}

BTree.prototype.add = function(value) {
  this.root.add(value);
};

BTree.prototype.contains = function(value) {
  this.root.contains(value);
};

BTree.prototype.remove = function(value) {
  this.root.remove(value);
};
