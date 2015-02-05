

var Graph = function(){
   this.nodes = [];
   this.edges = [];
};

Graph.prototype.addNode = function(node){
  this.nodes.push(node);
};

Graph.prototype.contains = function(node){
  return _.contains(this.nodes, node);
};

Graph.prototype.removeNode = function(node){
  var index = this.nodes.indexOf(node);
  this.nodes.splice(index, 1);
  this.edges = _.reject(this.edges, function(edgePair) {
    return edgePair[0] === node || edgePair[1] === node;
  });

};

Graph.prototype.hasEdge = function(fromNode, toNode){
  return _.some(this.edges, function(edgePair) {
    var case1 = edgePair[0] === fromNode && edgePair[1] === toNode;
    var case2 = edgePair[1] === fromNode && edgePair[0] === toNode;
    return case1 || case2;
  });
};

Graph.prototype.addEdge = function(fromNode, toNode){
  this.edges.push([fromNode, toNode]);
};

Graph.prototype.removeEdge = function(fromNode, toNode){
};

Graph.prototype.forEachNode = function(cb){
  _.each(this.nodes, function(node) {
    cb(node);
  });
};


/*
 * Complexity: What is the time complexity of the above functions?
 */



