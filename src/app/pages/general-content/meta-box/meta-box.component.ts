import { Component, OnInit } from '@angular/core';
import { ContentService } from '../../../core/services';

@Component({
  selector: 'app-meta-box',
  templateUrl: './meta-box.component.html',
  styleUrls: ['./meta-box.component.scss']
})
export class MetaBoxComponent implements OnInit {
  checkOptionsOne: any;
  contentTypeList: string[];
  categoryList: string[];

  constructor(
    private _contentService: ContentService
  ) {
    this.checkOptionsOne = [
      { label: 'Feature', value: 'Feature', checked: true },
      { label: 'UNITE', value: 'UNITE' },
      { label: 'Expedite', value: 'Expedite' }
    ];

    this.contentTypeList = [];
    this.categoryList = [];
  }

  ngOnInit() {
    this._contentService.getContentTypeList().subscribe(
      data => this.contentTypeList = data
    );

    this._contentService.getCategoryList().subscribe(
      data => this.categoryList = data
    );
  }
}
