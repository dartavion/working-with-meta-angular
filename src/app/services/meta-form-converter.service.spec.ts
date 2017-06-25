/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { MetaFormConverterService } from './meta-form-converter.service';
import { MetaHttpService } from './meta-http.service';
import { HttpModule } from '@angular/http';

describe('MetaFormConverterService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpModule
      ],
      providers: [
        MetaFormConverterService,
        MetaHttpService
      ]
    });
  });

  it('should ...', inject([MetaFormConverterService], (service: MetaFormConverterService) => {
    expect(service).toBeTruthy();
  }));
});
