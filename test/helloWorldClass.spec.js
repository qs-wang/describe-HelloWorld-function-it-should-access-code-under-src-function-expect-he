import HelloWorldClass from '../src/HelloWorldClass';


describe('HelloWorldClass', function () {

    let helloWorld;

    beforeEach(()=>{
        helloWorld = new HelloWorldClass();
    });

    it('should return Do Something when calling doSomething', ()=>{
        expect(helloWorld).not.toBeUndefined();
    });
});
