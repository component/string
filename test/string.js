
var s = require('..');

describe('.capitalize(str)', function(){
  it('should capitalize the first letter', function(){
    s.capitalize('hey there').should.equal('Hey there');
  })
})

describe('.uncapitalize(str)', function(){
  it('should uncapitalize the first letter', function(){
    s.uncapitalize('Hey there').should.equal('hey there');
  })
})

describe('.capitalizeWords(str)', function(){
  it('should capitalize each word', function(){
    s.capitalizeWords('hey there').should.equal('Hey There');
  })
})

describe('.uncapitalizeWords(str)', function(){
  it('should uncapitalize each word', function(){
    s.uncapitalizeWords('Hey There').should.equal('hey there');
    s.uncapitalizeWords('HeY TherE').should.equal('heY therE');
  })
})

describe('.trim(str)', function(){
  it('should trim leading / trailing whitespace', function(){
    s.trim('  foo bar  ').should.equal('foo bar');
    s.trim('\n\n\nfoo bar\n\r\n\n').should.equal('foo bar');
  })
})

describe('.trimLeft(str)', function(){
  it('should trim leading whitespace', function(){
    s.trimLeft('  foo bar  ').should.equal('foo bar  ');
  })
})

describe('.trimRight(str)', function(){
  it('should trim trailing whitespace', function(){
    s.trimRight('  foo bar  ').should.equal('  foo bar');
  })
})

describe('.startsWith(str, val)', function(){
  it('should start with given character', function(){
    s.startsWith('foo bar', 'f').should.equal(true);
  })

  it('should start with given word', function(){
    s.startsWith('foo bar', 'foo').should.equal(true);
  })
})

describe('.endsWith(str, val)', function(){
  it('should end with given character', function(){
    s.endsWith('foo bar', 'r').should.equal(true);
  })

  it('should end with given word', function(){
    s.endsWith('fruit bar', 'bar').should.equal(true);
  })
})
