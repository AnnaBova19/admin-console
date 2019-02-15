import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { EditorModule } from '@tinymce/tinymce-angular';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { SharedModule } from '../../shared/shared.module';
import { GeneralContentComponent } from './general-content.component';

import { GeneralContentRoutingModule } from './general-content.routing';
import { CreatePostComponent } from './create-post/create-post.component';
import { MetaBoxComponent } from './meta-box/meta-box.component';
import { ContentService } from '../../core/services';
import { ListPostComponent } from './list-post/list-post.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    SharedModule,
    RouterModule,
    NgZorroAntdModule,
    GeneralContentRoutingModule,
    FontAwesomeModule,
    EditorModule
  ],
  providers: [
    ContentService
  ],
  declarations: [
    GeneralContentComponent,
    CreatePostComponent,
    MetaBoxComponent,
    ListPostComponent
  ]
})
export class GeneralContentModule { }
