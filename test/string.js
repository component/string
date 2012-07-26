
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

describe('.trim(str)', function(){
  it('should trim leading / trailing whitespace', function(){
    _.trim('  foo bar  ').should.equal('foo bar');
    _.trim('\n\n\nfoo bar\n\r\n\n').should.equal('foo bar');
  })
})

describe('.trimLeft(str)', function(){
  it('should trim leading whitespace', function(){
    _.trimLeft('  foo bar  ').should.equal('foo bar  ');
  })
})

describe('.trimRight(str)', function(){
  it('should trim trailing whitespace', function(){
    _.trimRight('  foo bar  ').should.equal('  foo bar');
  })
})