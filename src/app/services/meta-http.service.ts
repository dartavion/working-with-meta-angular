import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';

@Injectable()
export class MetaHttpService {

  constructor(private http: HttpClient) { }

  get() {
    return this
      .http
      .get('/mock/meta.json')
      .map(data => data);
  }

  getCodeList(url: string) {
    return this.http
      .get(url)
      .map(data => data);
  }

  post(value: any) {
    console.log(value);
  }
}
