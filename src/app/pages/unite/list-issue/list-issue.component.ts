import { Component, OnInit } from '@angular/core';

import { Issue } from '../../../shared/models/index';
import { UniteService } from '../../../core/services/index';

@Component({
  selector: 'app-list-issue',
  templateUrl: './list-issue.component.html',
  styleUrls: ['./list-issue.component.scss']
})
export class ListIssueComponent implements OnInit {
  allChecked = false;
  indeterminate = false;

  sortName = null;
  sortValue = null;
  issues: Issue[] = [];
  displayData = [];

  constructor(
    private _uniteService: UniteService,
  ) { }

  ngOnInit() {
    // this._uniteService.getIssuesList({
    //   skip: 25,
    //   limit: 10
    // })
    // .subscribe(issues => {
    //   this.issues = issues;
    //   this.displayData = [ ...this.issues ];
    // });
  }

  getFormattedDate(value) {
    var date = new Date(value);
    var year = date.getFullYear();

    var month = (1 + date.getMonth()).toString();
    month = month.length > 1 ? month : '0' + month;

    var day = date.getDate().toString();
    day = day.length > 1 ? day : '0' + day;

    return month + '/' + day + '/' + year;
  }

  currentPageDataChange($event: Array<Issue>): void {
    this.displayData = $event;
    this.refreshStatus();
  }

  refreshStatus(): void {
    const allChecked = this.displayData.filter(value => !value.disabled).every(value => value.checked === true);
    const allUnChecked = this.displayData.filter(value => !value.disabled).every(value => !value.checked);
    this.allChecked = allChecked;
    this.indeterminate = (!allChecked) && (!allUnChecked);
  }

  checkAll(value: boolean): void {
    this.displayData.forEach(data => {
      if (!data.disabled) {
        data.checked = value;
      }
    });
    this.refreshStatus();
  }

  sort(sort: { key: string, value: string }): void {
    this.sortName = sort.key;
    this.sortValue = sort.value;
    this.search();
  }

  search(): void {
    /** filter data **/
    const filterFunc = item => true;
    const data = this.issues.filter(item => filterFunc(item));
    /** sort data **/
    if (this.sortName && this.sortValue) {
      this.displayData = data.sort((a, b) => (this.sortValue === 'ascend') ? (a[ this.sortName ] > b[ this.sortName ] ? 1 : -1) : (b[ this.sortName ] > a[ this.sortName ] ? 1 : -1));
    } else {
      this.displayData = data;
    }
  }
}
