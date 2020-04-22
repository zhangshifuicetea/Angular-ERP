import {Component, EventEmitter, HostListener, OnDestroy, OnInit, Output} from '@angular/core';
import {AuthService} from '../../core/auth.service';
import * as screenfull from 'screenfull';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy {
  @Output() toggleSidebar = new EventEmitter();
  isFullscreen = false;

  get sf(): screenfull.Screenfull {
    return screenfull as screenfull.Screenfull;
  }

  constructor(
    private authService: AuthService,
  ) { }

  ngOnInit(): void {
    if (this.sf.isEnabled) {
      this.sf.onchange(this.listenFullScreen);
    }
  }

  ngOnDestroy(): void {
    this.sf.off('change', this.listenFullScreen);
  }

  listenFullScreen = () => {
    this.isFullscreen = this.sf.isFullscreen;
  }

  toggle() {
    this.toggleSidebar.emit();
  }

  logout() {
    this.authService.logout();
  }

  fullscreen() {
    if (this.sf.isEnabled) {
      this.sf.toggle();
    }
  }

}
