jest.unmock('left-pad');
describe('labrador', () => {
  const leftPad = require('left-pad');
  const ourLabrador = leftPad('abrador', 8, ' l');
  it('is a labrador', () => {
    const actualLabrador = leftPad(' labrador', 0);
    expect(ourLabrador).toBe(actualLabrador);
  })
})
