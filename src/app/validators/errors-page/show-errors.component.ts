import { Component, Input } from '@angular/core';
import { AbstractControlDirective, AbstractControl } from '@angular/forms';
import { ErrorServiceService } from '../../services/error-service.service';

@Component({
  selector: 'app-show-errors',
  templateUrl: './show-errors.component.html',
  providers: [ErrorServiceService],

})

export class ShowErrorsComponent {
  errorList: Array<string>=[];

  constructor(private service: ErrorServiceService) { }

  private static readonly errorMessages = {
    'required': () => 'Please enter the value',
    'minlength': (params) => 'The min number of characters is ' + params.requiredLength,
    'maxlength': (params) => 'The max allowed number of characters is ' + params.requiredLength,
    'pattern': ()=> 'Please enter correct Pattern',
    'years': (params) => params.message,
    'appUniqueValidator': () => 'Value should be unique'
  };

  @Input()
  private control: AbstractControlDirective | AbstractControl;

  shouldShowErrors() {
    if (this.control && this.control.errors && (this.control.dirty || this.control.touched)) {
      this.listOfErrors();
      return true;
    }
    return false;
  }

  listOfErrors() {
    this.errorList = Object.keys(this.control.errors)
      .map(field => this.getMessage(field, this.control.errors[field]));
    this.service.setErrorList(this.errorList);
  }

  private getMessage(type: string, params: any) {
    return ShowErrorsComponent.errorMessages[type](params);
  }

}
