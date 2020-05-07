import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatButtonModule} from '@angular/material/button';
import {MatCommonModule, MatRippleModule} from '@angular/material/core';
import {MatDialogModule} from '@angular/material/dialog';
import {ReactiveFormsModule} from '@angular/forms';
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
];

@NgModule({
  declarations: [
    CascadeSelectComponent,
    CascadeSelectPartialComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ...material,
  ],
  exports: [
    ReactiveFormsModule,
    ...material,
    CascadeSelectComponent
  ]
})
export class SharedModule { }
