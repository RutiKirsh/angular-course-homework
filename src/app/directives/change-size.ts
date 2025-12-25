import { Directive, ElementRef, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appChangeSize]',
})
export class ChangeSize {
  @HostBinding('style.fontSize') size = '10px';
  @HostListener('mouseenter') onMouseEnter() {
    this.size = '60px';
  }
  @HostListener('mouseleave') onMouseLeave() {
    this.size = '10px';
  }

  constructor(private el: ElementRef) 
  { 

  }

}
