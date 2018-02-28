import { Directive,ElementRef,HostListener } from '@angular/core';

@Directive({
  selector: '[appSurvolFilm]'
})
export class SurvolFilmDirective {

  constructor(private el : ElementRef) {
    this.el.nativeElement.style.backgroundColor='white';
  }
  @HostListener('mouseenter')onMouseenter(){
    this.setBackground('grey');
  }
  @HostListener('mouseleave')onMouseleave(){
    this.setBackground('white');
  }
  setBackground(color){
    this.el.nativeElement.style.backgroundColor=color;
  }

}
