import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Project, Stage} from '../../../../core/data/inmemory-data/projects';

@Component({
  selector: 'app-kanban-add',
  templateUrl: './kanban-add.component.html',
  styleUrls: ['./kanban-add.component.scss']
})
export class KanbanAddComponent implements OnInit {
  @Input() stage: Stage;
  show = false;

  @Output() createProject = new EventEmitter<Project>();
  constructor() { }

  ngOnInit(): void {
  }

  hide() {
    this.show = false;
  }

  addProject(value: string, input: HTMLTextAreaElement) {
    const pro: Project = {
      id: `${Date.now()}`,
      content: value,
      author: '张师傅'
    };
    this.createProject.emit(pro);
    input.value = '';
    input.focus();
  }

}
