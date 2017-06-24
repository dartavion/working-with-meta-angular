import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MetaHttpService } from '../../services/meta-http.service';
import { MetaFormConverterService } from '../../services/meta-form-converter.service';
import { MetaFormConfigService } from '../../services/meta-form-config.service';

@Component({
  selector: 'automobile-purchase',
  templateUrl: './automobile-purchase.component.html',
  styleUrls: ['./automobile-purchase.component.scss']
})
export class AutomobilePurchaseComponent implements OnInit {
  form: FormGroup;
  meta: any;
  payload: any;
  constructor(
    private metaFormConverterService: MetaFormConverterService,
    private metaHttpService: MetaHttpService,
    private metaFormConfigService: MetaFormConfigService,
    private fb: FormBuilder) {
  }

  ngOnInit() {
    this.form = this.fb.group(this.metaFormConfigService.getConfig());
    this.form
      .statusChanges
      .subscribe((data: any) => {
        console.log('form: ', data);
    });
  }

  onSubmit() {
    const payload = this.metaFormConverterService
      .prepareForPost(this.form.value);
    this.payload = payload;
    this.metaHttpService.post(payload);
  }
}


