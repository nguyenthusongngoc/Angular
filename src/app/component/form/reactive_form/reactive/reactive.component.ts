import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive',
  templateUrl: './reactive.component.html',
  styleUrls: ['./reactive.component.scss']
})
export class ReactiveComponent implements OnInit {

  register: FormGroup;

  constructor(
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.register = this.fb.group({
      fullname: ['', [Validators.required, Validators.min(1)]],
      email: ['', [Validators.required, Validators.email, Validators.min(1)]],
      password: ['', [Validators.required, Validators.min(1)]],
      confirmPass: ['', [Validators.required, Validators.min(1)]],
      skills: this.fb.array([
        this.fb.control['']
      ])
    }, { validator: this.checkPasswords })
  }

  checkPasswords(group: FormGroup) {
    let pass = group.get('password').value;
    let confirmPass = group.get('confirmPass').value;
    return pass === confirmPass ? null : { notSame: true }
  }
  
  //get data in object
  get skills() {
    return this.register.get('skills') as FormArray;
  }
  get fullname() {
    return this.register.get('fullname');
  }
  get email() {
    return this.register.get('email');
  }

  get password() {
    return this.register.get('password');
  }
  get confirmPass() {
    return this.register.get('confirmPass');
  }


  addSkill() {
    this.skills.push(this.fb.control(''));
  }

  submit() {
    console.log(this.register)
  }
}
