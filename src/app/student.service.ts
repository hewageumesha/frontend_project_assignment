import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Student } from './student';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class StudentService {
  link = environment.BASE_HOST+"/students/";
  constructor(private httpClient:HttpClient) { }

  getAllStudents(): Observable<Student[]> {
    return this.httpClient.get<Student[]>(this.link);
  }

  getStudentById(id: Number): Observable<Student> {
    return this.httpClient.get<Student>(this.link + id);
  }

  addStudent(student: Student): Observable<Student> {
    return this.httpClient.post<Student>(this.link, student);
  }

  updateStudent(id: Number, student: Student){
    return this.httpClient.put<Student>(this.link + id, student);
  }

  deleteStudent(id: Number): Observable<String> {
    return this.httpClient.delete(this.link + id, {responseType: 'text'});
  }
}
