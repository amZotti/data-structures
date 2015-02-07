describe('b-tree', function(){
  var btree

  beforeEach(function(){
    btree = new BTree(3);
  });

  it('Should construct a btree correctly when values are inserted', function() {
    btree.add(5);
    btree.add(1);
    btree.add(111);
    btree.add(444);
    btree.add(44343);
    btree.add(2);
    btree.add(3);
    btree.add(6);
    btree.add(8);
    btree.add(15);
    btree.add(10);

    console.dir(btree.root);
  });

});
