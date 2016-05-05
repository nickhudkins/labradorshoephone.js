jest.unmock('left-pad');

describe('shoe', () => {
  const leftPad = require('left-pad');
  const theLabradorsShoe = leftPad('oe', 3, 'sh');
  it('is a shoe', () => {
    const aShoe = leftPad('', 1, 'shoe');
    expect(theLabradorsShoe).toBe(aShoe);
  })
})
