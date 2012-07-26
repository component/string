
var _ = require('..');

describe('.capitalize(str)', function(){
  it('should capitalize the first letter', function(){
    _.capitalize('hey there').should.equal('Hey there');
  })
})

describe('.uncapitalize(str)', function(){
  it('should uncapitalize the first letter', function(){
    _.uncapitalize('Hey there').should.equal('hey there');
  })
})

describe('.capitalizeWords(str)', function(){
  it('should capitalize each word', function(){
    _.capitalizeWords('hey there').should.equal('Hey There');
  })
})

describe('.uncapitalizeWords(str)', function(){
  it('should uncapitalize each word', function(){
    _.uncapitalizeWords('Hey There').should.equal('hey there');
    _.uncapitalizeWords('HeY TherE').should.equal('heY therE');
  })
})