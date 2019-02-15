import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { UniteComponent } from './unite.component';
import { CreateIssueComponent } from './create-issue/create-issue.component';
import { ListIssueComponent } from './list-issue/list-issue.component';

export const routes: Routes = [
  {
    path: '',
    component: UniteComponent,
    children: [
      {
        path: 'create',
        component: CreateIssueComponent,
      },
      {
        path: 'list',
        component: ListIssueComponent,
      }
    ]
  },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ]
})
export class UniteRoutingModule {
}
