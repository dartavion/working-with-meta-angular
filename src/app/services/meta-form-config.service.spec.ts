import { TestBed, inject } from '@angular/core/testing';

import { MetaFormConfigService } from './meta-form-config.service';
import { ReactiveFormsModule } from '@angular/forms';

describe('MetaFormConfigService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        ReactiveFormsModule
      ],
      providers: [MetaFormConfigService]
    });
  });

  it('should be created', inject([MetaFormConfigService], (service: MetaFormConfigService) => {
    expect(service).toBeTruthy();
  }));
});
