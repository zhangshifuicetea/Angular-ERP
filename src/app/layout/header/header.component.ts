import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {AuthService} from '../../core/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Output() toggleSidebar = new EventEmitter();

  constructor(
    private authService: AuthService,
  ) { }

  ngOnInit(): void {
  }

  toggle() {
    this.toggleSidebar.emit();
  }

  logout() {
    this.authService.logout();
  }

}
