jest.unmock('left-pad');

describe('phone', () => {
  const leftPad = require('left-pad');
  const ourPhone = leftPad('one', 4, ' ph');
  it('is a phone', () => {
    const aRealPhone = leftPad('hone', 5, ' p');
    expect(ourPhone).toBe(aRealPhone);
  })
})
