import {Component, Input, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-side-nav-list',
  templateUrl: './side-nav-list.component.html',
  styleUrls: ['./side-nav-list.component.scss']
})
export class SideNavListComponent implements OnInit {
  @Input() navList: SideNavItem[] = [];
  @Input() expanded = false;

  constructor(
    private router: Router,
  ) { }

  ngOnInit(): void {
  }

  clickItem(item: SideNavItem) {
    if (item.link) {
      this.router.navigate([item.path]);
    } else {
      if (item.children.length) {
        item.expand = !item.expand;
      }
    }
  }

}

export interface SideNavItem {
  title: string;
  path: string;
  icon?: string;
  children?: SideNavItem[];
  link?: boolean;
  expand?: boolean;
}
