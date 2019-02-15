import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainLayoutComponent } from './shared/layouts/main-layout/main-layout.component';

const routes: Routes = [
  {
    path: '',
    component: MainLayoutComponent,
  //  canActivate: [AuthGuard],
    children: [
      {
        path: 'general-content',
        loadChildren: './pages/general-content/general-content.module#GeneralContentModule'
      },
      {
        path: 'unite',
        loadChildren: './pages/unite/unite.module#UniteModule'
      }
    ]
  },

  // Handle all other routes
  {path: '**',  redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
