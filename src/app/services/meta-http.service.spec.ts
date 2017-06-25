/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { MetaHttpService } from './meta-http.service';
import { HttpModule } from '@angular/http';

describe('MetaHttpService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpModule
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
