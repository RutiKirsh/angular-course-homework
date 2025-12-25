import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appRadius]',
})
export class Radius {
  @HostListener('click') onClick() {
    this.el.nativeElement.style.borderRadius = '50%';

  }

  constructor(private el: ElementRef) { }

}
