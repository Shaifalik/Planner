import { Directive, Input } from '@angular/core';
import { ReactiveFormsModule, NG_VALIDATORS, Validator, ValidatorFn, FormControl } from '@angular/forms';

@Directive({
  selector: '[appUniqueValidator][ngModel]',
  providers: [{ provide: NG_VALIDATORS, useExisting: UniqueValidatorDirective, multi: true }]
})
export class UniqueValidatorDirective implements Validator {
  @Input('uniqueParam')
  public paramList: any;
  validator: ValidatorFn;

  constructor() {
    this.validator = this.validateUniqueTextFactory();
  }

  validate(control: FormControl): { [key: string]: any } {
    console.log(control);
    return this.validator(control);
  }

  validateUniqueTextFactory(): ValidatorFn {
    return (control: FormControl) => {
      if ( (this.paramList.length < 0) || (this.paramList.indexOf((control.value).toLowerCase()) == -1)) {
        return null;
      } else {
        return {
          appUniqueValidator: {
            valid: false
          }
        };
      }
    }
  }
}
