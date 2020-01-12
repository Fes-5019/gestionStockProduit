import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProduitComponent } from './produit/produit.component';
import { DashbordComponent } from './dashbord/dashbord.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {path: 'produit',
   component: ProduitComponent},

  {path: 'dashbord',
   component: DashbordComponent},

  {path: 'home',
   component: HomeComponent},

  {path: 'login',
   component: LoginComponent},

  {path: '',
   redirectTo: '/home', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes,
  {enableTracing: true})
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }