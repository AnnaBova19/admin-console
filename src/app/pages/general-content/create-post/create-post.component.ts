import { Component, OnInit } from '@angular/core';
import { NzMessageService, UploadFile } from 'ng-zorro-antd';
import { ContentService } from '../../../core/services';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.scss']
})
export class CreatePostComponent implements OnInit {
  tinyMCEConfig: any = {};
  post: any = {};
  authorList: string[];
  sponsorList: string[];

  constructor(private _contentService: ContentService) {
    this.tinyMCEConfig = {
      plugins: 'link',
      menubar: '',
      skin: 'lightgray'
    };

    this.post = {
      header: [],
      postDate: '',
      postTitle: '',
      postSubTitle: '',
      postAuthor: '',
      postSponsor: '',
    };

    this.authorList = [];
    this.sponsorList = [];
  }

  ngOnInit() {
    this._contentService.getAuthorList().subscribe(
      data => this.authorList = data
    );
    
    this._contentService.getSponsorList().subscribe(
      data => this.sponsorList = data
    );
  }

}
