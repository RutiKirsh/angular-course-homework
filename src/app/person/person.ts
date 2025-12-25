import { Component } from '@angular/core';
import { IPerson } from '../models/IPerson';
import { CommonModule } from '@angular/common';
import { ChangeSize } from '../directives/change-size';
import { Radius } from '../directives/radius';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-person',
  standalone: true,
  imports: [CommonModule,FormsModule, ChangeSize, Radius],
  templateUrl: './person.html',
  styleUrl: './person.scss',
})
export class Person {
  persons:IPerson[] = [
    {firstName: 'Ruth', lastName: 'Cohen', age: 21, hight: 172},
    {firstName: 'David', lastName: 'Levi', age: 18, hight: 175},
    {firstName: 'Maya', lastName: 'Peretz', age: 53, hight: 160},
    {firstName: 'Ori', lastName: 'Shapiro', age: 4, hight: 80}
  ]
  DeleteIndex(index:number){
    this.persons.splice(index,1);
  }
}
