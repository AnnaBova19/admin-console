import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { GeneralContentComponent } from './general-content.component';
import { CreatePostComponent } from './create-post/create-post.component';
import { ListPostComponent } from './list-post/list-post.component';

export const routes: Routes = [
  {
    path: '',
    component: GeneralContentComponent,
    children: [
      {
        path: 'create',
        component: CreatePostComponent,
      },
      {
        path: 'list',
        component: ListPostComponent,
      }
    ]
  },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ]
})
export class GeneralContentRoutingModule {
}
