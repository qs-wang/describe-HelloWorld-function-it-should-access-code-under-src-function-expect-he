'use strict';

var hello = require('../src/HelloWorld').hello;
console.log(hello());

describe('HelloWorld', function() {

  it('should access code under src', function() {
    expect(hello()).toEqual('Hello world');
  });

});
