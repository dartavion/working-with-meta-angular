import { browser, by, element } from 'protractor';

export class WorkingWithMetaAngularPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('app-root h1')).getText();
  }

  getFirstNameField() {
    return element(by.name('/transforms/data/names/first'));
  }

  getLastNameNameField() {
    return element(by.name('/transforms/data/names/last'));
  }

  getYearField() {
    return element(by.name('/transforms/data/automobile/year'));
  }

  getMakeField() {
    return element(by.name('/transforms/data/automobile/make'));
  }

  getModelField() {
    return element(by.name('/transforms/data/automobile/model'));
  }

  getSubmitButton() {
    return element(by.name('submitButton'));
  }

  getForm() {
    return element(by.css('form'));
  }
}
