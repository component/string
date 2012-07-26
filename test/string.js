
var _ = require('..');

describe('.capitalize(str)', function(){
  it('should capitalize the first letter', function(){
    _.capitalize('hey').should.equal('Hey');
  })
})