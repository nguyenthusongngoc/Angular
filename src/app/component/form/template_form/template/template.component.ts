import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.scss']
})
export class TemplateComponent implements OnInit {

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
