import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MyNumber } from '../my-number/my-number';

@Component({
  selector: 'app-list-numbers',
  imports: [CommonModule, MyNumber],
  templateUrl: './list-numbers.html',
  styleUrl: './list-numbers.scss',
})
export class ListNumbers {
  numbers: number[] = [1, 2, 3, 4, 5];

  deleteFromList(num: number) {
    const index = this.numbers.indexOf(num);
    if (index >= 0) {
      this.numbers.splice(index, 1);
    }
  }
}
