import { Validators, FormGroup, ValidationErrors } from '@angular/forms';

export function checkPass(pass: string, rePass: string):
  Validators {
  return (control: FormGroup): ValidationErrors | null => {
    if (control.controls[pass].value && control.controls[rePass].value) {
      if (control.controls[pass].value !== control.controls[rePass].value) {
        return { noMathPass: true };
      }
    }
    return null;
  };
}
