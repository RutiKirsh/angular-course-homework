import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-my-details',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './my-details.html',
  styleUrl: './my-details.scss',
})
export class MyDetails implements OnInit {
  ngOnInit(): void {
  }
  imagePath = 'images/girl.png';
  firstName: string = ''
  lastName: string = '';
  message: string = '';
  messageTrue: string = 'יש ג בשם המשפחה'
  messageFalse: string = 'אין ג בשם המשפחה'
  onClick() {
    if (this.lastName.includes('ג')) {
      this.message = this.messageTrue;
    } else {
      this.message = this.messageFalse;
    }
  }
}
