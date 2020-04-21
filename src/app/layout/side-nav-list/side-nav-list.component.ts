import {Component, Input, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {PlatformLocation} from '@angular/common';

@Component({
  selector: 'app-side-nav-list',
  templateUrl: './side-nav-list.component.html',
  styleUrls: ['./side-nav-list.component.scss']
})
export class SideNavListComponent implements OnInit {
  @Input() navList: SideNavItem[] = [];
  @Input() expanded = false;

  selectedPath: string;

  constructor(
    private router: Router,
    private location: PlatformLocation,
  ) { }

  ngOnInit(): void {
    this.selectedPath = this.location.pathname;
  }

  clickItem(item: SideNavItem, event: MouseEvent) {
    if (item.link) {
      this.selectedPath = item.path;
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
