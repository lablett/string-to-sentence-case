const stringToSentenceCase = require('./StringToSentenceCase.js');

// Test that the first letter of a string is capitalised
describe("Capitalise first letter", () => {
test("One character input should return capitalised", () => {
    const input = 'a';
    const output = 'A';

    expect(stringToSentenceCase(input)).toMatch(output);
  });

  test("Only first letter returned capitalised for multiple character input", () => {
    const input = 'ab';
    const output = 'Ab';

    expect(stringToSentenceCase(input)).toMatch(output);
  });
});

// Test that only the first letter of the string is capitalised, the remainder should be lowercase
describe("All but first letter lowercase", () => {
  test("All lowercase input should be returned sentence case", () => {
    const input = 'the quick brown fox jumped over the lazy dog';
    const output = 'The quick brown fox jumped over the lazy dog';

    expect(stringToSentenceCase(input)).toMatch(output);
  });
  
test("Rogue capital letters in input should be returned sentence case", () => {
    const input = 'the quick brown Fox jumped over the Lazy dog';
    const output = 'The quick brown fox jumped over the lazy dog';

    expect(stringToSentenceCase(input)).toMatch(output);
  });

  test("All uppercase input should be returned sentence case", () => {
    const input = 'LOREM IPSUM DOLOR SIT AMET';
    const output = 'Lorem ipsum dolor sit amet';

    expect(stringToSentenceCase(input)).toMatch(output);
  });

});

// Test that empty, null, or undefined inputs return error, null, and undefined respectively
describe("Empty, null, or undefined inputs", () => {
    
  test("Empty string input should return error", () => { 
    const input = '';
    const output = 'error';

    expect(stringToSentenceCase(input)).toMatch(output);
  });

  test("Null input should return null", () => {
    const input = null;

    expect(stringToSentenceCase(input)).toBeNull();
  });

  test("Undefined input should return undefined", () => {
    const input = undefined;

    expect(stringToSentenceCase(input)).toBeUndefined();
  });

});

// Test that the input is a valid string
describe("Invalid inputs (not string)", () => {

  test("Date input should return error", () => {
      const input = new Date();
      const output = 'error';
  
      expect(stringToSentenceCase(input)).toMatch(output);
    });

  test("Numeric input should return error", () => {
      const input = 123;
      const output = 'error';
  
      expect(stringToSentenceCase(input)).toMatch(output);
    });

  test("Empty array input should return error", () => {
      const input = [];
      const output = 'error';
  
      expect(stringToSentenceCase(input)).toMatch(output);
    });

  test("Populated array input should return error", () => {
      const input = [1,2,3];
      const output = 'error';
  
      expect(stringToSentenceCase(input)).toMatch(output);
    });

  test("Empty object input should return error", () => {
      const input = {};
      const output = 'error';
  
      expect(stringToSentenceCase(input)).toMatch(output);
    });

  test("Populated object input should return error", () => {
      const input = {
        name: 'John',
        age: '43'
      };
      const output = 'error';
  
      expect(stringToSentenceCase(input)).toMatch(output);
    });

  test("String matches date format", () => {
      const input = '31-07-2019 12:32:01';
      const output = 'error';
  
      expect(stringToSentenceCase(input)).toMatch(output);
    });

  });