import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class MetaHttpService {

  constructor(private http: Http) { }

  get() {
    return this
      .http
      .get('/mock/meta.json')
      .map(data => data.json());
  }

  getCodeList(url: string) {
    return this.http
      .get(url)
      .map(data => data.json());
  }

  post(value: any) {
    console.log(value);
  }
}
