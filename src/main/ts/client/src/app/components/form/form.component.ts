import { Component, Input, OnInit } from '@angular/core';
import { Form } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  @Input() model?: any; // Form nao funciona

  constructor() { }

  ngOnInit(): void {
  }

}
