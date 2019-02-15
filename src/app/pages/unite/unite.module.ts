import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { NgxHmCarouselModule } from 'ngx-hm-carousel';

import { SharedModule } from '../../shared/shared.module';
import { UniteComponent } from './unite.component';
import { CreateIssueComponent } from './create-issue/create-issue.component';
import { ListIssueComponent } from './list-issue/list-issue.component';

import { JwtHelperService } from '@auth0/angular-jwt';
import { UniteService } from '../../core/services/index';

import { UniteRoutingModule } from './unite.routing';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    SharedModule,
    FormsModule,
    RouterModule,
    NgZorroAntdModule,
    UniteRoutingModule,
    ReactiveFormsModule,
    NgxHmCarouselModule,
  ],
  declarations: [
    UniteComponent,
    CreateIssueComponent,
    ListIssueComponent
  ],
  providers: [
    JwtHelperService,
    UniteService
  ]
})
export class UniteModule { }