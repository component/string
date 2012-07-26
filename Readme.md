
# string

  String manipulation.

## API

   - [.capitalize(str)](#capitalizestr)
   - [.uncapitalize(str)](#uncapitalizestr)
   - [.capitalizeWords(str)](#capitalizewordsstr)
   - [.uncapitalizeWords(str)](#uncapitalizewordsstr)
   - [.trim(str)](#trimstr)
   - [.trimLeft(str)](#trimleftstr)
   - [.trimRight(str)](#trimrightstr)
<a name="" />
 
<a name="capitalizestr" />
### .capitalize(str)
should capitalize the first letter.

```js
s.capitalize('hey there').should.equal('Hey there');
```

<a name="uncapitalizestr" />
### .uncapitalize(str)
should uncapitalize the first letter.

```js
s.uncapitalize('Hey there').should.equal('hey there');
```

<a name="capitalizewordsstr" />
### .capitalizeWords(str)
should capitalize each word.

```js
s.capitalizeWords('hey there').should.equal('Hey There');
```

<a name="uncapitalizewordsstr" />
### .uncapitalizeWords(str)
should uncapitalize each word.

```js
s.uncapitalizeWords('Hey There').should.equal('hey there');
s.uncapitalizeWords('HeY TherE').should.equal('heY therE');
```

<a name="trimstr" />
### .trim(str)
should trim leading / trailing whitespace.

```js
s.trim('  foo bar  ').should.equal('foo bar');
s.trim('\n\n\nfoo bar\n\r\n\n').should.equal('foo bar');
```

<a name="trimleftstr" />
### .trimLeft(str)
should trim leading whitespace.

```js
s.trimLeft('  foo bar  ').should.equal('foo bar  ');
```

<a name="trimrightstr" />
### .trimRight(str)
should trim trailing whitespace.

```js
s.trimRight('  foo bar  ').should.equal('  foo bar');
```


## License 

(The MIT License)

Copyright (c) 2012 TJ Holowaychuk &lt;tj@vision-media.ca&gt;

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
'Software'), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.