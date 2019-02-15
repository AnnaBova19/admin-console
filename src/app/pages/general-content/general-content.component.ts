import { Component, OnInit } from '@angular/core';
import { en_US, zh_CN, NzI18nService } from 'ng-zorro-antd';

@Component({
  selector: 'app-general-content',
  templateUrl: './general-content.component.html',
  styleUrls: ['./general-content.component.scss']
})
export class GeneralContentComponent implements OnInit {
  postDate: string;

  constructor(private i18n: NzI18nService) { }

  ngOnInit() {
    this.i18n.setLocale(en_US);
  }

}
