import {ChangeDetectorRef, Component, HostBinding, Input, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {SidebarComponent} from '../sidebar/sidebar.component';
import {MediaMatcher} from '@angular/cdk/layout';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit, OnDestroy {
  mobileQuery: MediaQueryList;
  mobileQueryListener: () => void;

  @ViewChild(SidebarComponent) sidebar: SidebarComponent;

  @HostBinding('class.is-mobile') classMobil = false;

  constructor( cdr: ChangeDetectorRef, media: MediaMatcher) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this.mobileQueryListener = () => cdr.detectChanges();
    this.mobileQuery.addListener(this.mobileQueryListener);
  }

  ngOnInit(): void {
    this.classMobil = this.mobileQuery.matches;
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this.mobileQueryListener);
  }

  toggleSidebar() {
    this.sidebar.toggle();
  }

}
