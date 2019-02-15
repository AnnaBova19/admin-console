import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.scss']
})
export class MainMenuComponent implements OnInit {
  menuList: any;
  constructor() {
    this.menuList = [
      {
        link: '/home',
        label: 'Home'
      },
      {
        link: '/education',
        label: 'Education'
      },
      {
        link: '/dso-practice',
        label: 'DSO Practice'
      },
      {
        link: '/career',
        label: 'Career'
      },
      {
        link: '/sponsors',
        label: 'From Our Sponsors'
      },
      {
        link: '/development',
        label: 'Development'
      },
      {
        link: '/community',
        label: 'Community'
      }
    ]
  }

  ngOnInit() {
  }

}
