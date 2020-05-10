import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Project, Stage} from './inmemory-data/projects';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  baseUrl = 'api/stages';  // URL to web api

  constructor(
    private http: HttpClient
  ) { }

  getProjects(): Observable<Stage[]> {
    return this.http.get<Stage[]>(this.baseUrl);
  }

  addProject(project: Project): Observable<Project> {
    return this.http.post<Project>(this.baseUrl, project);
  }
}
