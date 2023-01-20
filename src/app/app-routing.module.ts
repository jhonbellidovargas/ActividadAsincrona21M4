import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './principal/login/login.component';
import { VistaComponent } from './principal/vista/vista.component';
import { CanactivateGuard } from './canactivate.guard';
import { MenuComponent } from './principal/menu/menu.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'menu', component: MenuComponent, canActivate: [CanactivateGuard] },
  { path: 'vista', component: VistaComponent, canActivate: [CanactivateGuard] },
  { path: '', component: MenuComponent, canActivate: [CanactivateGuard] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
