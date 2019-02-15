import { Component, OnInit, ElementRef ,ViewChild } from '@angular/core';
import { Router } from '@angular/router';

import { Issue, Post } from '../../../shared/models/index';
import { PostService, UniteService } from '../../../core/services/index';

@Component({
  selector: 'app-create-issue',
  templateUrl: './create-issue.component.html',
  styleUrls: ['./create-issue.component.scss']
})
export class CreateIssueComponent implements OnInit {
  issue: Issue;
  articles: Array<string> = [];
  coverList: string[];
  posts: Post[] = [];

  isPreview: boolean = false;
  infinite = true; 

  issuePreviews = '1234567891234'.split('').map((x, i) => {
    return {
      url: `https://picsum.photos/600/400/?${i}`,
    };
  });

  constructor(
    private _postService: PostService,
    private _uniteService: UniteService,
    public router: Router
  ) {
    this.issue = new Issue().deserialize({
      articles: [],
      cover: null,
      createUser: '',
      isRelease: true,
      publishDate: new Date(),
    });
   }

  ngOnInit(): void {
    this._uniteService.getCoverList().subscribe(
      data => this.coverList = data
    );
    this._postService.getPostsList().subscribe(
      data => this.posts = data
    );
    for (let i = 0; i < 6; i++) {
      this.articles.push('');
    }
  }

  trackByFn(index: number, value: any) {
    return index;
  }

  addPage(e?: MouseEvent): void {
    if (e) {
      e.preventDefault();
    }
    this.articles.push('');
  }

  removePage(index: number, e: MouseEvent): void {
    e.preventDefault();
    if (this.articles.length > 1) {
      this.articles.splice(index, 1);
      this.issue.articles.splice(index, 1);
    }
  }

  private prepareSave(): Issue {
    this.issue.createUser = "User";
    this.issue.isRelease = true;
    this.issue.publishDate = new Date();
    return new Issue().deserialize(this.issue);
  }

  cancel() {
    this.router.navigate(['/unite/list'], {replaceUrl: true});
  }

  showPreview() {
    this.isPreview = true;
    // if (this.isPreview) {
    //   this.issuePreviews = this.posts.map((post) => {
    //     return post.excerpt;
    //   })
    // }
  }

  backToDraft() {
    this.isPreview = false;
  }

  saveDraft() {
    const issue = this.prepareSave();
    // this._uniteService.createIssue(issue)
    // .subscribe(res => {
    //   console.log(res);
    // });
    this.router.navigate(['/unite/list'], {replaceUrl: true});
  }

  publishIssue() {
    this.router.navigate(['/unite/list'], {replaceUrl: true});
  }
}
