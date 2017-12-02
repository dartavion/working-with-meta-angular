/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { MetaHttpService } from './meta-http.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('MetaHttpService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ],
      providers: [
        MetaHttpService
      ]
    });
  });

  it('should ...', inject([MetaHttpService], (service: MetaHttpService) => {
    expect(service).toBeTruthy();
  }));
});
