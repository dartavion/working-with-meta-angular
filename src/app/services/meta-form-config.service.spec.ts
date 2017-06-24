import { TestBed, inject } from '@angular/core/testing';

import { MetaFormConfigService } from './meta-form-config.service';

describe('MetaFormConfigService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MetaFormConfigService]
    });
  });

  it('should be created', inject([MetaFormConfigService], (service: MetaFormConfigService) => {
    expect(service).toBeTruthy();
  }));
});
