import { Component, OnInit } from '@angular/core';
import { en_US, zh_CN, NzI18nService } from 'ng-zorro-antd';

@Component({
  selector: 'app-unite',
  templateUrl: './unite.component.html',
  styleUrls: ['./unite.component.scss']
})
export class UniteComponent implements OnInit {

  constructor(
    private i18n: NzI18nService,
  ) {}

  ngOnInit() {
    this.i18n.setLocale(en_US);
  }
}
