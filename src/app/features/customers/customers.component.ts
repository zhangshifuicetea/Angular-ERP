import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {merge, of} from 'rxjs';
import {catchError, startWith, switchMap} from 'rxjs/operators';
import {CustomersService} from '../../core/data/customers.service';
import {Customer} from '../../core/data/inmemory-data/customers';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.scss']
})
export class CustomersComponent implements AfterViewInit {
  displayedColumns: string[] = ['created', 'name', 'tags', 'action'];

  customers: Customer[] = [];
  resultsLength = 0;
  isLoadingResults = true;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(
    private customerService: CustomersService,
  ) {
  }

  sortPageCustomers() {
    merge(this.sort.sortChange, this.paginator.page)
      .pipe(
        startWith({}),
        switchMap(() => {
          this.isLoadingResults = true;
          return this.customerService.getCustomers();
        }),
        catchError((error) => {
          this.isLoadingResults = false;
          return of([]);
        })
      ).subscribe((customers) => {
      this.isLoadingResults = false;
      this.customers = customers;
      this.resultsLength = (customers || []).length;
    });
  }

  ngAfterViewInit() {
    this.sort.sortChange.subscribe(() => this.paginator.pageIndex = 0);

    this.sortPageCustomers();
  }

  searchCustomers(term: string) {
    this.customerService.searchCustomers(term).subscribe((c) => {
      this.customers = c;
    });
  }
}
