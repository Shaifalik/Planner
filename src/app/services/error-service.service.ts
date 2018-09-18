import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ErrorServiceService {
  errorList: Observable<Array<string>>;

  constructor() { }

  setErrorList(errors: any) {
  this.errorList = errors;
  }

  getErrorList():Observable<Array<string>>{
    return this.errorList;
  }

}
