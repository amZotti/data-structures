var DoublyLinkedList = function() {
  var obj = {};
  obj.head = null;
  obj.tail = null;

  _.extend(obj, doublyLinkedListMethods);

  return obj;
};

var doublyLinkedListMethods = {
  addToHead : function(value) {
    var newNode = this.Node(value);
    if (this.head === null) {
      this.tail = newNode;
      this.head = newNode;
    } else {
      newNode.next = this.head;
      this.head.prev = newNode;
      this.head = newNode;
    }
  },
  addToTail : function(value) {
    var newNode = this.Node(value);
    if (this.tail === null) {
      this.tail = newNode;
      this.head = newNode;
    } else {
      newNode.prev = this.tail;
      this.tail.next = newNode;
      this.tail = newNode;
    }
  },
  removeTail : function() {
    if (this.tail === null) {
      return null;
    }
    var removedValue = this.tail.value;

    if (this.head === this.tail) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail.prev.next = null;
      this.tail = this.tail.prev;
    }
    return removedValue;
  },
  removeHead : function() {
    if (this.head === null) {
      return null;
    }
    var removedValue = this.head.value;
    if (this.head === this.tail) {
      this.head = null;
      this.tail = null;
    } else {
      this.head.next.prev = null;
      this.head = this.head.next;
    }
    return removedValue;
  },
  contains : function (target) {
    var trav = this.head;
    while ((trav !== null) && (trav.value !== target)) {
      trav = trav.next;
    }

    if (trav === null) {
      return false;
    }
    return true;
  },
  Node : function(value) {
    var node = {};
    node.value = value;
    node.next = null;
    node.prev = null;
    return node;
  }
};

