import { GotPage } from './app.po';

describe('got App', () => {
  let page: GotPage;

  beforeEach(() => {
    page = new GotPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
