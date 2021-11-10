import Haiku from './../src/haiku.js';

describe('haiku', () => {
  test('should return true if there are three lines', () => {
    let newHaiku = new Haiku("one two three four five, one two three four five six six, one two three four five");
    expect(newHaiku.isThreeLines()).toEqual(true);
  });
  test('should return true if theres 5 then 7 then five words', () => {
    let newHaiku = new Haiku("one two three four five, one two three four five six six, one two three four five");
    expect(newHaiku.is575()).toEqual(true);
  });
});