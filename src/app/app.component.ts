import {Component, OnInit} from '@angular/core';
import {HttpLoadingService} from './core/http-loading.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor(
    public loadingService: HttpLoadingService
  ) {
  }

  ngOnInit(): void {
  }

}
