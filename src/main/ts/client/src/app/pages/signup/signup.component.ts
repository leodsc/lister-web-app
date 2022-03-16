import { Component, OnInit } from '@angular/core';
import { Form } from '../../interfaces/form';
import { Label } from '../../interfaces/label';
import { Button } from 'src/app/interfaces/button';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  labels: Label[] = [
    { placeholder: "Nome", type: "text", for: "name", name: "oi" },
    { placeholder: "Email", type: "email", for: "email", name: "email" },
    { placeholder: "Senha", type: "password", for: "password", name: "password" },
    { placeholder: "Confirmar Senha", type: "password", for: "confirm-password", name: "confirm-password" }
  ];
  button: Button = { text: "Cadastrar", class: "info-btn" };
  form: Form = { method: "POST", action: "/api/users/signup", labels: this.labels, button: this.button };

  constructor() { }

  ngOnInit(): void {
  }

}
