import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-my-number',
  imports: [CommonModule],
  templateUrl: './my-number.html',
  styleUrl: './my-number.scss',
})
export class MyNumber {
  @Input() num!: number;
  @Input() length!: number;
  massage: string = 'לא ניתן למחוק את המספר האחרון';
  @Output() deleteNumber = new EventEmitter<number>();


  onDelClicked() {
    this.deleteNumber.emit(this.num);
  }
}