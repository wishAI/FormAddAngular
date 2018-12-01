import { FormAddPage } from './app.po';

describe('form-add App', () => {
  let page: FormAddPage;

  beforeEach(() => {
    page = new FormAddPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
