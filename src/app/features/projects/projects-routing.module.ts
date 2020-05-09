import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {ProjectsComponent} from './projects.component';
import {KanbanComponent} from './kanban/kanban.component';

const routes: Routes = [
  {path: '', component: ProjectsComponent},
  {path: 'kanban', component: KanbanComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProjectsRoutingModule {
}
