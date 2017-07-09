import { MyPortfolioA2Page } from './app.po';

describe('my-portfolio-a2 App', () => {
  let page: MyPortfolioA2Page;

  beforeEach(() => {
    page = new MyPortfolioA2Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
