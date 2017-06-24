import { MetaBase } from './meta-base';

export class TextInput extends MetaBase<string> {
  controlType = 'textInput';
  type: string;

  constructor(options: {} = {}) {
    super(options);
    this.type = options['type'] || '';
  }
}
