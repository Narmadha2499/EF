// import { Routes } from '@angular/router';

// export const routes: Routes = [];


import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CrudComponent } from './crud/crud.component';

export const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'employee', component: CrudComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' }
];