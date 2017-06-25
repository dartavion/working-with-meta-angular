/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { CUSTOM_ELEMENTS_SCHEMA, DebugElement, Injectable } from '@angular/core';

import { MetaInputComponent } from './meta-input.component';
import { FormBuilder, FormGroup, FormGroupName, ReactiveFormsModule } from '@angular/forms';
import { MetaHttpService } from '../../services/meta-http.service';
import { HttpModule } from '@angular/http';
import { MetaFormConverterService } from '../../services/meta-form-converter.service';
import { MetaFormConfigService } from '../../services/meta-form-config.service';

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
        MetaFormConverterService,
        MetaFormConfigService
      ],
      schemas: [
        CUSTOM_ELEMENTS_SCHEMA
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    const form = new FormBuilder();
    fixture = TestBed.createComponent(MetaInputComponent);
    component = fixture.componentInstance;
    component.metaPath = '/string/other';
    component.form = form.group({user: form.group({firstName: ''})});
    component.formGroupName = 'user';
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
