/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { MetaFormConverterService } from './meta-form-converter.service';

describe('MetaFormConverterService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MetaFormConverterService]
    });
  });

  it('should ...', inject([MetaFormConverterService], (service: MetaFormConverterService) => {
    expect(service).toBeTruthy();
  }));
});
