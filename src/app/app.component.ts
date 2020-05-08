import {Component, OnInit} from '@angular/core';
import {HttpLoadingService} from './core/http-loading.service';
import {debounceTime} from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  showLoading = false;

  constructor(
    public loadingService: HttpLoadingService
  ) {
  }

  ngOnInit(): void {
    this.loadingService.loading$.pipe(
      debounceTime(500)
    ).subscribe((show: boolean) => {
      this.showLoading = show;
    });
  }

}
