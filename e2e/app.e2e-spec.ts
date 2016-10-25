import { CliGeneratedPage } from './app.po';

describe('cli-generated App', function() {
  let page: CliGeneratedPage;

  beforeEach(() => {
    page = new CliGeneratedPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
