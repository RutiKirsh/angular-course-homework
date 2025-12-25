import { IPerson } from "./IPerson";

export class YoungStudent implements IPerson{
  id: number;
  name: string;
  age: number;
  grade: number;
  hight: number;
  sayHello: () => string;
  getSummary:() => string;

  constructor(id: number, name: string, age: number, grade: number, hight: number){
    this.id = id;
    this.name = name;
    this.age = age;
    this.grade = grade;
    this.hight = hight;
    this.sayHello = () => `Hello, my name is ${this.name} and I am ${this.age} years old.`;
    this.getSummary = () => `Hi, I'm ${this.name}, I'm ${this.age} years old and my grade is ${this.grade}.`;
  }
}