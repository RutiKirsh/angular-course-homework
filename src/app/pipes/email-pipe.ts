import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'email',
})
export class EmailPipe implements PipeTransform {


  transform(value: string): string {
    if(!value || value.includes('@')) {
      return value;
    }
    return value + '@gmail.com';
  }
}
