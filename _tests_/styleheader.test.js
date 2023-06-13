import { JSDOM } from 'jsdom';

describe('Header Styles Test', () => {
  let dom;
  let header;

  beforeEach(() => {
    dom = new JSDOM('./style.css'
    );

    const { document } = dom.window;
    header = document.querySelector('header');
  });

  it('should have the correct styles applied', () => {
    const computedStyles = dom.getComputedStyle(header);

    Object.keys(expectedStyles).forEach((property) => {
      expect(computedStyles[property]).toBe(expectedStyles[property]);
    });
  });
});
