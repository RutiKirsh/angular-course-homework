import { Component, signal } from '@angular/core';
// import { MyDetails } from './my-details/my-details';
import { CommonModule } from '@angular/common';
// import { Student } from './student/student';
// import { Person } from './person/person';
import { FormsModule } from '@angular/forms';
// import { Lesson5 } from './lesson5/lesson5';
// import { pipes } from './pipes/pipes';
import { ListNumbers } from './list-numbers/list-numbers';
import { User } from './user/user';
import { Details } from './details/details';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule, /*MyDetails, Student Person, Lesson5, ...pipes,ListNumbers,*/  User, Details],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  flag: boolean = false;
  protected readonly title = signal('lesson1');

}
