import { Component } from '@angular/core';
import { YoungStudent } from '../models/student';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-student',
  imports: [CommonModule],
  templateUrl: './student.html',
  styleUrl: './student.scss',
})
export class Student {
  students: YoungStudent[] = 
  [
    new YoungStudent(1,'Bat-sheva',  10, 4, 140),
    new YoungStudent(2,'Yeudit',  15, 9, 173),
    new YoungStudent(3, 'Rachel', 13, 8, 167),
    new YoungStudent(4, 'Leah', 12, 6, 150)
  ];

}
