/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserModule, By } from '@angular/platform-browser';
import { CUSTOM_ELEMENTS_SCHEMA, DebugElement } from '@angular/core';

import { AutomobilePurchaseComponent } from './automobile-purchase.component';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MetaFormConverterService } from '../../services/meta-form-converter.service';
import { MetaHttpService } from '../../services/meta-http.service';
import { MetaInputComponent } from '../../components/meta-input/meta-input.component';
import { HttpModule } from '@angular/http';
import { MetaFormConfigService } from '../../services/meta-form-config.service';

describe('AutomobilePurchaseComponent', () => {
  let component: AutomobilePurchaseComponent;
  let fixture: ComponentFixture<AutomobilePurchaseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        HttpModule
      ],
      providers: [
        FormBuilder,
        MetaHttpService,
        MetaFormConverterService,
        MetaFormConfigService
      ],
      declarations: [
        AutomobilePurchaseComponent,
        MetaInputComponent
      ],
      schemas: [
        CUSTOM_ELEMENTS_SCHEMA
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AutomobilePurchaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
