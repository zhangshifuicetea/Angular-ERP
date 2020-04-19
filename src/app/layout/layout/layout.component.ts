import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {SidebarComponent} from '../sidebar/sidebar.component';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {
 @Input() isMobile = false;

  @ViewChild(SidebarComponent) sidebar: SidebarComponent;

  constructor(

  ) {

  }

  ngOnInit(): void {
  }

  toggleSidebar() {
    this.sidebar.toggle();
  }

}
