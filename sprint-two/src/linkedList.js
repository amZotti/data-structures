var LinkedList = function(){
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value){
    var node = Node();
    node.value = value;
    if (!(list.tail === null)) {
      list.tail.next = node;
    }
    if (list.head === null){
      list.head = node;
    }
    list.tail = node;
  };

  list.removeHead = function(){
    var node = list.head;

    if (!(list.head === null)) {
      list.head = list.head.next;
      return node.value;
    } else {
      list.tail = null;
    }
    return null;
  };

  list.contains = function(target){
    var trav = list.head;

    while ((trav !== null) && (trav.value !== target)) {
      trav = trav.next;
    }

    if (trav === null) {
      return false;
    }

    return true;
  };

  return list;
};

var Node = function(value){
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
