import { Component } from '@angular/core';
import { Student } from '../student';

@Component({
  selector: 'app-student-list',
  standalone: false,
  templateUrl: './student-list.html',
  styleUrl: './student-list.css',
})
export class StudentList {
  students: Student[] = [
    new Student('Alice', 1, [], 1),
    new Student('Bob', 2, [], 2),
    new Student('Charlie', 3, [], 3)
  ];
}
