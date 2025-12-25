import { Component, signal } from '@angular/core';
// import { MyDetails } from './my-details/my-details';
import { CommonModule } from '@angular/common';
// import { Student } from './student/student';
import { Person } from './person/person';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule, /*MyDetails, Student*/ Person],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('lesson1');
}
