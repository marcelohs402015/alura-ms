import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {LoginService} from "./login.service";
import {Router} from "@angular/router";
import {HttpErrorResponse} from "@angular/common/http";
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  formLogin: FormGroup;

  constructor(private builder: FormBuilder, private service: LoginService, private router: Router, private snackbar: MatSnackBar) { }

  ngOnInit(): void {
    this.formLogin = this.builder.group({
      email: ['', [Validators.required, Validators.email]],
      senha: ['', [Validators.required]]
    });
  }

  login() {
    this.service
      .realizaLogin(this.formLogin.get('email')?.value, this.formLogin.get('senha')?.value)
      .subscribe({
        next: _ => this.router.navigate(['/cursos']),
        error: (error) => {
          if (error instanceof HttpErrorResponse && error.status === 401) {
            this.snackbar.open(
              'Usuário e/ou senha inválidos',
              'Ok',
              {
                panelClass: 'mensagem-erro',
                horizontalPosition: "center",
              }
            );

            this.formLogin.reset();
            this.formLogin.get('email')?.markAsTouched();
            this.formLogin.get('senha')?.markAsTouched();
          }
        }
      });
  }
}
