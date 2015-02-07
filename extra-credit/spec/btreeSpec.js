describe('b-tree', function(){
  var btree

  beforeEach(function(){
    btree = new BTree();
  });

  it('Should have a root node.', function() {
    expect(!!btree.root).to.not.equal(false);
  });

});
