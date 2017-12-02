import { Injectable } from '@angular/core';
import { TextInput } from '../meta/text-input';
import { SelectInput } from '../meta/select-input';
import { MetaHttpService } from './meta-http.service';
declare const Buffer;

@Injectable()
export class MetaFormConverterService {

  meta: any;

  static getTextInput(data: any) {
    return new TextInput({
      key: data.codeValue || '',
      label: data.longName || '',
      required: data.required || false,
      disabled: data.readonly || false,
      controlType: 'textInput'
    });
  }

  static getSelectInput(data: any) {
    return new SelectInput({
      key: data.codeValue || '',
      label: data.longName || '',
      required: data.required || false,
      disabled: data.readonly || false,
      controlType: 'selectInput',
      options: []
    });
  }

  static convertCodeList(codeList: any) {
    return codeList.map((data: any) => {
      return {
        key: data.longName,
        value: data.codeValue
      };
    });
  }

  static isObject(item) {
    return (item && typeof item === 'object' && !Array.isArray(item) && item !== null);
  }

  constructor(private metaHttpService: MetaHttpService) { }

  getMetaDataObject(metaPath: string, meta: any) {
    this.meta = meta;
    return meta[metaPath];
  }

  getMetaInput(metaPath: string, meta: any) {
    let input;
    const data = this.getMetaDataObject(metaPath, meta);

    if (data.hasOwnProperty('codeList')) {
      input = {
        input: MetaFormConverterService.getSelectInput(data),
        codeList: this.getCodeList(data)
      };
    } else {
      input = MetaFormConverterService.getTextInput(data);
    }
    return input;
  }

  getCodeList(data: any) {
    return this.metaHttpService.getCodeList(data.codeList.url);
  }

  prepareForPost(formData: any) {
    return this.createPayload(this.flatten(formData));
  }

  createPayload(flattenedObject: any) {
    let keyArray, path;
    const convertedItems = {},
      payloadItems = [],
      payload = {};

    Object.keys(flattenedObject).forEach(key => {
      path = key.split('.');
      path.shift();
      keyArray = key.split('/');
      keyArray.shift();
      keyArray.reduce((item: any, name: any, index: number) => {
        if (keyArray.length - 1 === index && flattenedObject[key] !== null) {
          return item[name] = {
            codeValue: flattenedObject[key],
            longName: this.getMetaDataObject(path[0], this.meta).longName
          };
        }
        if (flattenedObject[key] !== null) {
          return item[name] = {};
        }
      }, convertedItems);
      payloadItems.push(Object.assign({}, convertedItems));
    });

    payloadItems.forEach((data: any) => {
      this.mergeDeep(payload, data);
    });

    return payload;
  }

  // https://gist.github.com/penguinboy/762197
  flatten(object: any, separator = '.'): any {
    const isValidObject = (value): boolean => {
      if (!value) { return false; }
      const isArray = Array.isArray(value);
      const isBuffer = Buffer.isBuffer(value);
      const isObject = Object.prototype.toString.call(value) === '[object Object]';
      const hasKeys = !!Object.keys(value).length;
      return !isArray && !isBuffer && isObject && hasKeys;
    };
    return Object.assign({}, ...function _flatten(child, path = []) {
      return [].concat(...Object.keys(child)
        .map(key => isValidObject(child[key])
          ? _flatten(child[key], path.concat([key]))
          : { [path.concat([key]).join(separator)]: child[key] }));
    }(object));
  }

  // found on the internet as well
  mergeDeep(target, source) {
    if (MetaFormConverterService.isObject(target) && MetaFormConverterService.isObject(source)) {
      for (const key in source) {
        if (MetaFormConverterService.isObject(source[key])) {
          if (!target[key]) {
            Object.assign(target, { [key]: {} });
          }
          this.mergeDeep(target[key], source[key]);
        } else {
          Object.assign(target, { [key]: source[key] });
        }
      }
    }
    return target;
  }
}
