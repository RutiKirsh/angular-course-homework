import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { pipes } from '../pipes/pipes';

@Component({
  selector: 'app-lesson5',
  imports: [CommonModule, FormsModule, ...pipes],
  templateUrl: './lesson5.html',
  styleUrl: './lesson5.scss',
})
export class Lesson5 {
  number: number = 15.456789
  numerator: number = 0;
  denominator: number = 0;
  email: string = '';
}
