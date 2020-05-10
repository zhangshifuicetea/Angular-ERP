import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjectsRoutingModule } from './projects-routing.module';
import { ProjectsComponent } from './projects.component';
import { KanbanComponent } from './kanban/kanban.component';
import { SharedModule } from 'src/app/shared/shared.module';
import {FlexLayoutModule} from '@angular/flex-layout';
import {DragDropModule} from '@angular/cdk/drag-drop';
import { KanbanAddComponent } from './kanban/kanban-add/kanban-add.component';


@NgModule({
  declarations: [ProjectsComponent, KanbanComponent, KanbanAddComponent],
  imports: [
    CommonModule,
    SharedModule,
    FlexLayoutModule,
    DragDropModule,
    ProjectsRoutingModule,
  ]
})
export class ProjectsModule { }
