import { JSDOM } from 'jsdom';

describe('Button Tests', () => {
  let dom;
  let favoriteButton;
  let nextButton;
  let jest;

  beforeEach(() => {
    dom = new JSDOM("index.html");
      
    const { document } = dom.window;
    favoriteButton = document.getElementById('favorite');
    nextButton = document.getElementById('next');
  });

  it('should call saveFavorites when Favorite button is clicked', () => {
    const saveFavorites = jest.fn();
    favoriteButton.onclick = saveFavorites;

    favoriteButton.click();

    expect(saveFavorites).toHaveBeenCalled();
  });

});