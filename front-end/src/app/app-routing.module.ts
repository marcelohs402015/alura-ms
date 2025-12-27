import { NgModule } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, RouterModule, RouterStateSnapshot, Routes, UrlTree} from '@angular/router';
import {Observable} from "rxjs";
import {TokenService} from "./token.service";
import {GuardService} from "./guard.service";

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'compra'
  },
  {
    path: 'compra',
    loadChildren: () => import('./compra/compra.module').then(m => m.CompraModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then(m => m.LoginModule)
  },
  {
    path: 'cursos',
    loadChildren: () => import('./area-logada/area-logada.module').then(m => m.AreaLogadaModule),
    canActivate: [GuardService],
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
