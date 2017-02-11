import { GITHUBSEARCHPage } from './app.po';

describe('githubsearch App', function() {
  let page: GITHUBSEARCHPage;

  beforeEach(() => {
    page = new GITHUBSEARCHPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
