import { JSDOM } from 'jsdom';

describe('HTML Button Test', () => {
  let dom;
  let favoriteButton;
  
  beforeEach(() => {
    dom = new JSDOM("index.html"
);

    const { document } = dom.window;
    favoriteButton = document.getElementById('favorite');
  });

  it('should exist', () => {
    expect(favoriteButton).toBeDefined();
  });
});

describe('HTML Button Test', () => {
    let dom;
    let nextButton;
    
    beforeEach(() => {
      dom = new JSDOM("index.html"
  );
  
      const { document } = dom.window;
      nextButton = document.getElementById('Next');
    });
  
    it('should exist', () => {
      expect(nextButton).toBeDefined();
    });
  });
