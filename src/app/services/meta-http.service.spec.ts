/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { MetaHttpService } from './meta-http.service';

describe('MetaHttpService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MetaHttpService]
    });
  });

  it('should ...', inject([MetaHttpService], (service: MetaHttpService) => {
    expect(service).toBeTruthy();
  }));
});
