import Checker from './../src/js/checker.js';

describe ('Checker', () => {

  test('should correctly create a checker object that stores a string and number of syllables for each line', () => {
    const userSubmittedHaiku = new Checker("Hello!", 5,7,5)
    expect(userSubmittedHaiku.haiku).toEqual("Hello!");
    expect(userSubmittedHaiku.firstLine).toEqual(5);
    expect(userSubmittedHaiku.secondLine).toEqual(7);
    expect(userSubmittedHaiku.thirdLine).toEqual(5);
  })
}) 