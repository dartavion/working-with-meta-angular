import { MetaBase } from './meta-base';

export class SelectInput extends MetaBase<string> {
  controlType = 'selectInput';
  options: {key: string, value: string}[] = [];

  constructor(options: {} = {}) {
    super(options);
    this.options = options['options'] || [];
  }
}
