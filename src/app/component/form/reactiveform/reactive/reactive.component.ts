import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray } from '@angular/forms';

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
      fullname: [''],
      email: [''],
      password: [''],
      inputRePassword: [''],
      skills: this.fb.array([
        this.fb.control['']
      ])
    })

  }

  get skills() {
    return this.register.get('skills') as FormArray;
  }

  addSkill() {
    // this.register
    this.skills.push(this.fb.control(''));
  }

  submit() {
    console.log(this.register)
  }
}
