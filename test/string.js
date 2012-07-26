
var _ = require('..');

describe('.capitalize(str)', function(){
  it('should capitalize the first letter', function(){
    _.capitalize('hey').should.equal('Hey');
  })
})

describe('.uncapitalize(str)', function(){
  it('should uncapitalize the first letter', function(){
    _.uncapitalize('Hey').should.equal('hey');
  })
})