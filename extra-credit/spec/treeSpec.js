describe('tree', function() {
  var tree;

  beforeEach(function() {
    tree = Tree();
  });

  it('should have methods named "addChild" and "contains", and a property named "value"', function() {
    expect(tree.addChild).to.be.a("function");
    expect(tree.contains).to.be.a("function");
    expect(tree.hasOwnProperty("value")).to.equal(true);
  });

  it('should add children to the tree', function() {
    tree.addChild(5);
    expect(tree.children[0].value).to.equal(5);
  });

  it('should return true for a value that the tree contains', function(){
    tree.addChild(5);
    expect(tree.contains(5)).to.equal(true);
  });

  it('should return false for a value that was not added', function(){
    tree.addChild(5);
    expect(tree.contains(6)).to.equal(false);
  });

  it('should be able to add children to a tree\'s child', function() {
    tree.addChild(5);
    tree.children[0].addChild(6);
    expect(tree.children[0].children[0].value).to.equal(6);
  });

  it('should correctly detect nested children', function(){
    tree.addChild(5);
    tree.addChild(6);
    tree.children[0].addChild(7);
    tree.children[1].addChild(8);
    expect(tree.contains(7)).to.equal(true);
    expect(tree.contains(8)).to.equal(true);
  });

  it('should contain a "parent" property and method called "removeFromParent"', function() {
    expect(tree.hasOwnProperty('parent')).to.equal(true);
    expect(tree.removeFromParent).to.be.a("function");
  });

  it('should have parent equal to null when there is no parent', function(){
    expect(tree.parent).to.equal(null);
    tree.addChild(4);
    expect(tree.parent).to.equal(null);
  });

  it('should have children point back to itself', function() {
    var child = tree.addChild(4);
    expect(child.parent).to.equal(tree);
  });

  it('should have children detatched from tree when removeFromParent is invoked', function() {
    var child = tree.addChild(4);
    child.removeFromParent();
    expect(child.parent).to.equal(null);
    expect(tree.children.length).to.equal(0);
  });
});
