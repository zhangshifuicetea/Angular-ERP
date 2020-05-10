import { Component, OnInit, Input } from '@angular/core';
import {Project, Stage} from '../../../core/data/inmemory-data/projects';
import {ProjectService} from '../../../core/data/project.service';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';
import {KanbanAddComponent} from './kanban-add/kanban-add.component';

@Component({
  selector: 'app-kanban',
  templateUrl: './kanban.component.html',
  styleUrls: ['./kanban.component.scss']
})
export class KanbanComponent implements OnInit {
  stages: Stage[] = [];

  constructor(
    private projectService: ProjectService,
  ) { }

  ngOnInit(): void {
    this.projectService.getProjects().subscribe((stages) => {
      this.stages = stages;
    });
  }

  drop(event: CdkDragDrop<Project[]>, stage: Stage) {
    const project = event.item.data;

    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex);
    }
  }

  addTask(stage: Stage, adder: KanbanAddComponent) {
    adder.show = true;
  }

  createProject(project: Project, stage: Stage) {
    this.projectService.addProject(project).subscribe((p) => {
      stage.projects = (stage.projects || []).concat(p);
    });
  }

}
