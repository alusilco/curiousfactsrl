import { JSDOM } from 'jsdom';

describe('Table Test', () => {
  let dom;
  let table;

  beforeEach(() => {
    dom = new JSDOM('./index.html');

    const { document } = dom.window;
    table = document.querySelector('table');
  });

  it('should exist', () => {
    expect(table).toBeDefined();
  });
});
