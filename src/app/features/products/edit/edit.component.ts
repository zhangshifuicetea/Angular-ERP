import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {brands, categories} from '../../../core/data/inmemory-data/products';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {
  productForm: FormGroup;
  brands: {label: string, value: string}[] = brands.map(b => ({label: b, value: b}));
  categories: {label: string, value: string}[] = categories.map(c => ({label: c, value: c}));

  constructor(
    private fb: FormBuilder,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.buildForm();
  }

  buildForm() {
    this.productForm = this.fb.group({
      name: ['', [Validators.required]],
      brand: ['', [Validators.required]],
      category: ['', [Validators.required]],
      description: ['']
    });
  }

  addProduct() {
    this.router.navigate(['../']);
  }

}
