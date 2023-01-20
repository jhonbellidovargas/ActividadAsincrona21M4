import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AutenticationService } from 'src/app/services/autentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  username = '';
  password = '';
  errorMessage = '';
  userNameErrorMessage = '';
  passwordErrorMessage = '';

  validCredencials = {
    username: 'AD',
    password: '123456',
  };

  constructor(
    private autentication: AutenticationService,
    private router: Router
  ) {}

  redirection = '';

  login() {
    if (this.username === this.validCredencials.username && this.password === this.validCredencials.password) {
      this.autentication.login();
      this.redirection = this.autentication.urlUsuarioIntentaAcceder;
      this.router.navigate([this.redirection]);
    } else {
      this.errorMessage = 'Usuario o contraseña incorrectos';
      if (this.username === '') {
        this.userNameErrorMessage = 'Usuario es requerido';
      }
      if (this.password === '') {
        this.passwordErrorMessage = 'Contraseña es requerida';
      }
    }
  }
}
