import { Routes } from '@angular/router';
import { AllmealsComponent } from './allmeals/allmeals.component';
import path from 'path';
import { CategorymealsComponent } from './categorymeals/categorymeals.component';
import { NotfoundComponent } from './notfound/notfound.component';

export const routes: Routes = [
  {
    path: '',
    component: AllmealsComponent,
    children: [
      { path: '', redirectTo: 'category/all', pathMatch: 'full' },
      { path: 'category/:categoryName', component: CategorymealsComponent },
    ],
    title: 'Recipes',
  },
  { path: '**', component: NotfoundComponent, title: 'Page Not Found' },
];
