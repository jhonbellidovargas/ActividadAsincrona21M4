import { Component } from '@angular/core';
import { AutenticationService } from 'src/app/services/autentication.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  isLogged = false;
  constructor(public autentication: AutenticationService) {}
  ngOnInit() {
    this.isLogged = this.autentication.isLoggedIn('');
    this.autentication.changeLoginStatus$.subscribe((logged: boolean) => {
      this.isLogged = logged;
    });
  }

  logout() {
    this.autentication.logout();
  }
}
