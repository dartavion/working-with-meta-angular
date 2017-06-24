import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MetaInputComponent } from './components/meta-input/meta-input.component';
import { AutomobilePurchaseComponent } from './containers/automobile-purchase/automobile-purchase.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
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
  providers: [
    MetaHttpService,
    MetaFormConverterService,
    MetaFormConfigService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
