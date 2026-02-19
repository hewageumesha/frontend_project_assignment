import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Project } from './project';

@Injectable({
  providedIn: 'root',
})
export class ProjectService {
  link = environment.BASE_HOST+"/projects/";
  constructor(private httpClient:HttpClient) { }

  getAllProjects(): Observable<Project[]> {
    return this.httpClient.get<Project[]>(this.link);
  }

  getProjectById(id: Number): Observable<Project> {
    return this.httpClient.get<Project>(this.link + id);
  }

  addProject(student: Project): Observable<Project> {
    return this.httpClient.post<Project>(this.link, student);
  }

  updateProject(id: Number, student: Project){
    return this.httpClient.put<Project>(this.link + id, student);
  }

  deleteProject(id: Number): Observable<String> {
    return this.httpClient.delete(this.link + id, {responseType: 'text'});
  }
}
