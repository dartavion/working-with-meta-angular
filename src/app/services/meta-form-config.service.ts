import { Injectable } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Injectable()
export class MetaFormConfigService {

  constructor(private fb: FormBuilder) { }

  getConfig() {
    return {
      user: this.fb.group({
        '/transforms/data/names/first': '',
        '/transforms/data/names/middle': '',
        '/transforms/data/names/last': ''
      }),
      ymm: this.fb.group({
        '/transforms/data/automobile/year': '',
        '/transforms/data/automobile/make': '',
        '/transforms/data/automobile/model': ''
      })
    };
  }
}
