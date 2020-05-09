import {ChangeDetectorRef, Component, HostBinding, Input, OnInit, ViewChild} from '@angular/core';
import {MatSidenav} from '@angular/material/sidenav';
import {SideNavItem} from '../side-nav-list/side-nav-list.component';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  sideNavList = navList;
  @Input() isMobile = false;
  navExpanded = true;

  @ViewChild('desksidebar') deskSidebar: MatSidenav;
  @ViewChild('mobilesidebar') mobileSidebar: MatSidenav;

  constructor(private cdr: ChangeDetectorRef) { }

  ngOnInit(): void {
  }

  toggle() {
    if (this.isMobile) {
      this.mobileSidebar.toggle();
    } else {
      this.navExpanded = !this.navExpanded;
      // this.cdr.detectChanges();
    }
  }

}


const navList: SideNavItem[] = [
  {
    title: '首页',
    path: '/dashboard',
    icon: 'home',
    link: true,
  },
  {
    title: '客户',
    path: '/customers',
    icon: 'group',
    link: true,
  },
  {
    title: '产品',
    path: 'products',
    icon: 'local_offer',
    expand: false,
    children: [
      {title: '产品维护', path: '/products/maintain', link: true},
      {title: '产品新增', path: '/products/edit', link: true},
    ]
  },
  {
    title: '项目',
    path: 'projects',
    icon: 'assignment',
    expand: false,
    children: [
      {title: '项目看板', path: '/projects/kanban', link: true},
    ]
  },
];
