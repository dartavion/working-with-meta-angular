import { WorkingWithMetaAngularPage } from './app.po';

describe('working-with-meta-angular App', () => {
  let page: WorkingWithMetaAngularPage;

  beforeEach(() => {
    page = new WorkingWithMetaAngularPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
