describe('b-tree', function(){
  var btree

  beforeEach(function(){
    btree = new BTree(3);
  });

  it('Should have btree with 2 values in root', function() {
    btree.add(10);
    btree.add(5);
    expect(btree.root.values).to.deep.equal([5,10]);
  });

  it('Should have btree with 3 nodes when 3 values are inserted and maxsize is 3', function() {
    btree.add(3);
    btree.add(100);
    btree.add(5);
    expect(btree.root.children.length).to.equal(2);
    expect(btree.root.values[0]).to.equal(5);
    expect(btree.root.children[0].values[0]).to.equal(3);
    expect(btree.root.children[1].values[0]).to.equal(100);
  });

  it('Should have btree with 4 nodes when 5 values are inserted', function() {
    btree.add(50);
    btree.add(100);
    btree.add(1);
    btree.add(75);
    btree.add(60);
    expect(btree.root.children.length).to.equal(3);
    expect(btree.root.values.length).to.equal(2);
  });

  it('Should have btree with 7 nodes when 7 values are inserted', function() {
    btree.add(50);
    btree.add(100);
    btree.add(1);
    btree.add(75);
    btree.add(60);
    btree.add(150);
    btree.add(200);
    expect(btree.root.children.length).to.equal(2);
    expect(btree.root.values.length).to.equal(1);
    expect(btree.traverse()).to.deep.equal([1, 50, 60, 75, 100, 150, 200]);
  });

  it('Should contain values that were inserted', function() {
    btree.add(50);
    btree.add(100);
    btree.add(1);
    btree.add(75);
    btree.add(60);
    btree.add(150);
    btree.add(200);
    expect(btree.contains(100)).to.equal(true);
    expect(btree.contains(60)).to.equal(true);
    expect(btree.contains(1)).to.equal(true);
  });

  it('Should not cotain values that were not inserted', function() {
    btree.add(50);
    btree.add(100);
    btree.add(1);
    btree.add(75);
    btree.add(60);
    btree.add(150);
    btree.add(200);
    expect(btree.contains(1040)).to.equal(false);
    expect(btree.contains(640)).to.equal(false);
    expect(btree.contains(14)).to.equal(false);
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
    btree.add(101010);
  });
});
