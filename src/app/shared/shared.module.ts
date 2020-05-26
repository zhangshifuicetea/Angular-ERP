import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatButtonModule} from '@angular/material/button';
import {MatCommonModule, MatRippleModule} from '@angular/material/core';
import {MatDialogModule} from '@angular/material/dialog';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatListModule} from '@angular/material/list';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatMenuModule} from '@angular/material/menu';
import {MatDividerModule} from '@angular/material/divider';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import { CascadeSelectComponent } from './components/cascade-select/cascade-select.component';
import { CascadeSelectPartialComponent } from './components/cascade-select/cascade-select-partial/cascade-select-partial.component';
import {MatSelectModule} from '@angular/material/select';
import {MatChipsModule} from '@angular/material/chips';
import {MatTableModule} from '@angular/material/table';
import {MatTabsModule} from '@angular/material/tabs';
import {MatBottomSheetModule} from '@angular/material/bottom-sheet';
import {MatPaginatorModule} from '@angular/material/paginator';
import {CdkTableModule} from '@angular/cdk/table';
import {MatSortModule} from '@angular/material/sort';
import { CarouselComponent } from './components/carousel/carousel.component';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { Carousel2Component } from './components/carousel2/carousel2.component';

const material = [
  MatCommonModule,
  MatButtonModule,
  MatSidenavModule,
  MatDialogModule,
  MatIconModule,
  MatToolbarModule,
  MatListModule,
  MatRippleModule,
  MatTooltipModule,
  MatMenuModule,
  MatDividerModule,
  MatCardModule,
  MatFormFieldModule,
  MatInputModule,
  MatCheckboxModule,
  MatGridListModule,
  MatProgressBarModule,
  MatSelectModule,
  MatChipsModule,
  MatTableModule,
  CdkTableModule,
  MatTabsModule,
  MatBottomSheetModule,
  MatPaginatorModule,
  MatSortModule,
  MatButtonToggleModule,
  MatProgressSpinnerModule,
];

@NgModule({
  declarations: [
    CascadeSelectComponent,
    CascadeSelectPartialComponent,
    CarouselComponent,
    Carousel2Component
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ...material,
  ],
  exports: [
    FormsModule,
    ReactiveFormsModule,
    ...material,
    CascadeSelectComponent,
    CarouselComponent,
    Carousel2Component,
  ]
})
export class SharedModule { }
