/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { MetaInputComponent } from './meta-input.component';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { MetaHttpService } from '../../services/meta-http.service';
import { HttpModule } from '@angular/http';
import { MetaFormConverterService } from '../../services/meta-form-converter.service';

describe('MetaInputComponent', () => {
  let component: MetaInputComponent;
  let fixture: ComponentFixture<MetaInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        ReactiveFormsModule,
        HttpModule
      ],
      declarations: [ MetaInputComponent ],
      providers: [
        FormBuilder,
        MetaHttpService,
        MetaFormConverterService
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MetaInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    // expect(component).toBeTruthy();
  });
});
