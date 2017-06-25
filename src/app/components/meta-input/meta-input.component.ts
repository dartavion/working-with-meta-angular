import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { FormGroup, FormGroupName, Validators } from '@angular/forms';
import { MetaFormConverterService } from '../../services/meta-form-converter.service';
import { MetaHttpService } from '../../services/meta-http.service';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'meta-input',
  templateUrl: './meta-input.component.html',
  styleUrls: ['./meta-input.component.scss']
})
export class MetaInputComponent implements OnInit, OnDestroy {
  @Input() metaPath: string;
  @Input() name: string;
  @Input() form: FormGroup;
  @Input() formGroupName: string;

  public type: string;
  public required: boolean;
  public label: string;
  public options: Array<any>;
  public metaHttpServiceSubscription: Subscription;

  constructor(
    private metaHttpService: MetaHttpService,
    private metaFormConverter: MetaFormConverterService) { }

  ngOnInit() {
    this.metaHttpServiceSubscription = this.metaHttpService
      .get()
      .subscribe(meta => {
        this.assignFormGroup(this.metaFormConverter.getMetaInput(this.metaPath, meta));
      });
  }

  ngOnDestroy() {
    this.metaHttpServiceSubscription.unsubscribe();
  }

  assignFormGroup(metaInput: any) {
    if (metaInput.hasOwnProperty('input')) {
      this.parseMeta(metaInput.input);
      this.applyFormProperties(metaInput.input);

      metaInput.codeList.subscribe((list: any) => {
        this.options = this.metaFormConverter.convertCodeList(list.listItems);
      });
    } else {
      this.applyFormProperties(metaInput);
    }
  }

  private applyFormProperties(metaInput: any) {
    const control = this.form.get(`${this.formGroupName}.${this.metaPath}`);

    this.parseMeta(metaInput);

    if (metaInput.required) {
      control.setValidators([Validators.required]);
      this.form.reset();
    }

    if (metaInput.disabled) {
      control.disable();
    }
  }

  private parseMeta(metaInput: any) {
    this.label = metaInput.label;
    this.type = metaInput.controlType;
    this.required = metaInput.required;
    if (metaInput.options) {
      this.options = metaInput.options || [];
    }
  }
}
