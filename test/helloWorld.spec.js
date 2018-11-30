import {hello} from '../src/HelloWorld'

describe('HelloWorld', function() {

  it('should access code under src', async function() {
    expect(await hello()).toEqual('Hello world');
  });

});
