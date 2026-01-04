import { CommonModule } from '@angular/common';
import { Component, inject, ViewEncapsulation } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import {MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-user',
  imports: [CommonModule,FormsModule,  MatCardModule, MatButtonModule, MatInputModule],
  templateUrl: './user.html',
  styleUrl: './user.scss',
  encapsulation: ViewEncapsulation.None
})

export class User {
   private _snackBar = inject(MatSnackBar);
   name: string = '';

  durationInSeconds = 5;

  openSnackBar() {
    this._snackBar.open(this.name, 'תודה רבה!', {
      duration: this.durationInSeconds * 10000,
    });
  }

}
