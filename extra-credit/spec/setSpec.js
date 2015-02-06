describe('set', function() {
  var set;

  beforeEach(function() {
    set = Set();
  });

  it('should have methods named "add", "contains", and "remove"', function() {
    expect(set.add).to.be.a("function");
    expect(set.contains).to.be.a("function");
    expect(set.remove).to.be.a("function");
  });

  it('should add values to a set', function(){
    set.add("Susan Sarandon");
    set.add("Danny Glover");
    expect(set.contains('Danny Glover')).to.equal(true);
    expect(set.contains('Susan Sarandon')).to.equal(true);
  });

  it('should remove values from a set', function(){
    set.add("Mel Gibson");
    set.remove("Mel Gibson");
    expect(set.contains("Mel Gibson")).to.equal(false);
  });

  it('should add array and object values to a set', function(){
    set.add([1, 2]);
    set.add({'a' : 1, 'b' : 2});
    expect(set.contains([1, 2])).to.equal(true);
    expect(set.contains({'a' : 1, 'b' : 2})).to.equal(true);
  });

  it('should not add duplicates of arrays and objects', function(){
    set.add([1, 2]);
    set.add([1, 2]);
    set.add({'a' : 1, 'b' : 2});
    set.add({'a' : 1, 'b' : 2});
    expect(set._storage.length).to.equal(2);
  });

  it('should remove array and object values from a set', function(){
    set.add([1, 2]);
    set.add({'a' : 1, 'b' : 2});
    set.remove([1, 2]);
    set.remove({'a' : 1, 'b' : 2});
    expect(set.contains([1, 2])).to.equal(false);
    expect(set.contains({'a' : 1, 'b' : 2})).to.equal(false);
    expect(set._storage.length).to.equal(0);
  });

});
