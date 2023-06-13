import { JSDOM } from 'jsdom';

describe('Link Test', () => {
  let dom;
  let anchor;

  beforeEach(() => {
    dom = new JSDOM('./index.html');

    const { document } = dom.window;
    anchor = document.querySelector('#myAnchor');
  });

  test('should go to the second page', () => {
    const clickEvent = new dom.window.Event('click');
    anchor.EventTarget.dispatchEvent(clickEvent);

    const expectedURL = 'http://localhost/PagSeccHtml/pagsec.html';
    expect(dom.window.location.href).toBe(expectedURL);
  });
});
