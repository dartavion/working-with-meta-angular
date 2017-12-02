/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { MetaFormConverterService } from './meta-form-converter.service';
import { MetaHttpService } from './meta-http.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('MetaFormConverterService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
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
