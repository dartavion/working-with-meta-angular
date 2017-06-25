import { BrowserModule } from '@angular/platform-browser';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { MetaInputComponent } from './components/meta-input/meta-input.component';
import { AutomobilePurchaseComponent } from './containers/automobile-purchase/automobile-purchase.component';

import { MetaHttpService } from './services/meta-http.service';
import { MetaFormConverterService } from './services/meta-form-converter.service';
import { MetaFormConfigService } from './services/meta-form-config.service';

@NgModule({
  declarations: [
    AppComponent,
    MetaInputComponent,
    AutomobilePurchaseComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule
  ],
  exports: [
    AppComponent,
    MetaInputComponent,
    AutomobilePurchaseComponent
  ],
  providers: [
    MetaHttpService,
    MetaFormConverterService,
    MetaFormConfigService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
