import { JSDOM } from 'jsdom';

describe('Logo image test', () => {
  let dom;
  let anchor;

  beforeEach(() => {
    dom = new JSDOM('./index.html');

    const { document } = dom.window;
    anchor = document.querySelector('#logo');
  });

  test('should have the image source', () => {
    const expectedSrc = '/Images/logoTechDuo.png';
    const expectedAlt = '#logo';

    expect(image.src).toContain(expectedSrc);
    expect(image.alt).toBe(expectedAlt);
  });
});