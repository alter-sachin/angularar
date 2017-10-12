import { BitesPage } from './app.po';

describe('bites App', () => {
  let page: BitesPage;

  beforeEach(() => {
    page = new BitesPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
