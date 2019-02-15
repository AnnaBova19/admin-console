import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MainLayoutComponent } from './layouts/main-layout/main-layout.component';
import { MainMenuComponent } from './components';
import { MainSidebarComponent } from './components';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    NgZorroAntdModule,
    FontAwesomeModule
  ],
  exports: [
    MainLayoutComponent
  ],
  declarations: [MainLayoutComponent, MainMenuComponent, MainSidebarComponent]
})
export class SharedModule { }
