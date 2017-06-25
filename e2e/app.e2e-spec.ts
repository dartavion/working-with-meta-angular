import { WorkingWithMetaAngularPage } from './app.po';
import { by } from 'protractor';

describe('working-with-meta-angular App', () => {
  let page: WorkingWithMetaAngularPage;

  beforeEach(() => {
    page = new WorkingWithMetaAngularPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Find a Car');
  });

  it('should submit a valid form', () => {
    const firstName = page.getFirstNameField(),
      lastName = page.getLastNameNameField(),
      year = page.getYearField(),
      make = page.getMakeField(),
      model = page.getModelField(),
      submitButton = page.getSubmitButton(),
      form = page.getForm();

    expect(form.getAttribute('class')).toContain('ng-invalid');

    firstName.sendKeys('test');
    lastName.sendKeys('smith');
    year.element(by.cssContainingText('option', '2017')).click();
    make.element(by.cssContainingText('option', 'bmw')).click();
    model.element(by.cssContainingText('option', '328xi')).click();
    submitButton.click();

    expect(form.getAttribute('class')).toContain('ng-valid');
  });
});
