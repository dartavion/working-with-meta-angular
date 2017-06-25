/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CUSTOM_ELEMENTS_SCHEMA, DebugElement, Injectable } from '@angular/core';

import { MetaInputComponent } from './meta-input.component';
import { FormBuilder, FormGroup, FormGroupName, ReactiveFormsModule } from '@angular/forms';
import { MetaHttpService } from '../../services/meta-http.service';
import { HttpModule } from '@angular/http';
import { MetaFormConverterService } from '../../services/meta-form-converter.service';
import { MetaFormConfigService } from '../../services/meta-form-config.service';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of'

describe('MetaInputComponent', () => {
  let component: MetaInputComponent;
  let fixture: ComponentFixture<MetaInputComponent>;
  let mockMetaHttpService: MockMetaHttpService;
  let mockMetaFormConverterService: MockMetaFormConverterService;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        ReactiveFormsModule,
        HttpModule
      ],
      declarations: [ MetaInputComponent ],
      providers: [
        FormBuilder,
        {provide: MetaHttpService, useClass: MockMetaHttpService},
        {provide: MetaFormConverterService, useClass: MockMetaFormConverterService},
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
    mockMetaHttpService = TestBed.get(MetaHttpService);
    mockMetaFormConverterService = TestBed.get(MetaFormConverterService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('subscribes to meta http service onInit', () => {
    const testData = {
      key: 234,
      label: 'longName',
      required: false,
      disabled: false,
      controlType: 'textInput'
    };

    spyOn(mockMetaHttpService, 'get').and.returnValue(Observable.of(testData));
    spyOn(mockMetaFormConverterService, 'getMetaInput');
    spyOn(component, 'assignFormGroup').and.returnValue(testData);

    component.ngOnInit();

    expect(mockMetaHttpService.get).toHaveBeenCalled();
    expect(mockMetaFormConverterService.getMetaInput).toHaveBeenCalled();
    expect(component.assignFormGroup).toHaveBeenCalled();
  });

  it('unsubscribes to the meta http service onDestroy', () => {
    spyOn(component.metaHttpServiceSubscription, 'unsubscribe');
    component.ngOnDestroy();
    expect(component.metaHttpServiceSubscription.unsubscribe).toHaveBeenCalled();
  });

  xit('assigns meta field to a form group', () => {
    // TODO
  });
});

export class MockMetaHttpService {
  get() {
    return Observable.of([1, 1, 1, 1]).map(data => data);
  }
}
export class MockMetaFormConverterService {
  getMetaInput() {
    return {}
  }
}
