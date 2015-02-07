function BTree(maxSize) {
  this.root = new BTreeNode(maxSize);
  var tree = this;


  function BTreeNode(maxSize) {
    this.maxSize = maxSize;
    this.children = [];
    this.values = [];
    this.parent = null;
  };

  BTreeNode.prototype.add = function(value) {
    debugger;
    if (this.children.length === 0) {
      this.sortedInsert(this.values, value);
      if (this.values.length >= this.maxSize) {
        var newParent
        if (this.parent === null) {
          newParent = new BTreeNode(this.maxSize);
          tree.root = newParent;
        } else {
          newParent = this.parent;
        }

        var newSibling = new BTreeNode(this.maxSize);
        var middleElementIndex = Math.floor(this.values.length / 2);

        newParent.add(this.values[middleElementIndex]);
        if (this.parent === null) {
          newParent.children.push(newSibling, this);
        } else {
          siblingIndex = this.parent.findChildIndex(this) - 1;
          this.parent.children.splice(siblingIndex,0,newSibling);
        }

        for (var i = 0; i < middleElementIndex; i += 1) {
          newSibling.add(this.values[i]);
        }
        newSibling.parent = newParent;

        this.values = this.values.slice(middleElementIndex + 1);
        this.parent = newParent;
      }
    } else {
      var found = false;
      for (var j = 0;j < this.values.length;j++) {
        if (value < this.values[j]) {
          this.children[j].add(value);
          found = true;
          break;
        }
      }
      if (!found) {
        this.children[j].add(value);
      }
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
