// Unit tests for the helloWorld function
describe('helloWorld', function() {
    it('should be a defined function', function() {
      expect(typeof helloWorld).toBe('function');
    });
    it('should return a string when called', function() {
      expect(typeof helloWorld()).toBe("string");
    });
    it('should return the string "Hello, World!" when executed', function() {
      expect(helloWorld()).toBe("Hello, World!");
    });
    it("should never return 'undefined' when called", function() {
      expect(helloWorld()).not.toBe(undefined);
    });
});

// ****** ****** ****** ADD BY ME ****** ****** ******
describe('sayHello', function(){
    it('should be a defined function', function(){
        expect(typeof sayHello).toBe("function");// ex1
    });
    it('should return a string when called', function() {
        expect(typeof sayHello()).toBe("string");//ex 2
    });
    it('should return the string "Hello, Jane!" when executed', function() {
        expect(sayHello("Jane")).toBe("Hello, Jane!"); //ex 3
    });
    it('should return the string "Hello, Ashley!" when executed', function() {
        expect(sayHello('Ashley')).toBe("Hello, Ashley!");//ex 4
    });
    it('should return the string "Hello, Pat!" when executed', function() {
        expect(sayHello('Pat')).toBe("Hello, Pat!");// ex5
    });
    it('should return the string "Hello, World!" when executed', function (){
        expect(sayHello(undefined)).toBe("Hello, World!");// ex 8
    });

});