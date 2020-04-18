import {Component, OnInit} from '@angular/core';
import {Customer, CustomersService} from './services/customers.service';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Angular-ERP';
  customers$: Observable<Customer[]>;

  constructor(
    private customerService: CustomersService,
  ) {
  }

  ngOnInit(): void {
    this.customers$ = this.customerService.getCustomers();
  }

  fetchCustomers() {
    this.customerService.getCustomers().subscribe((customers) => {
      console.log(customers);
    });
  }

  addCustomer(name: string): void {
    name = name.trim();
    if (!name) {
      return;
    }

    // The server will generate the id for this new hero
    const newCustomer: Customer = { name };
    this.customerService
      .addCustomer(newCustomer)
      .subscribe(c => console.log(c));
  }
}
