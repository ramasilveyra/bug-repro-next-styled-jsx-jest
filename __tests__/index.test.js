console.log('1');

describe('while using /', () => {
  let HomePage;
  beforeAll(() => {
    console.log('2');
    HomePage = require('../pages/index').default;
    console.log('3');
  });
  test('should allow access', () => {
    console.log('4');
    expect(1).toBe(1);
  });
});
