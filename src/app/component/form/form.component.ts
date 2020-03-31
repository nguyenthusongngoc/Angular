import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  name: string;
  mail: string;
  pass: string;
  rePass: string;
  street: string;
  city: string;
  country: string;

  constructor() { }

  ngOnInit(): void {
  }
  submit(form: NgForm) {
    console.log(form.value)
  }
}
