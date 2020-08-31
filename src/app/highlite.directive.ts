import { Directive, ElementRef} from '@angular/core';

@Directive({
  selector: '[appHighlite]'
})
export class HighliteDirective {

  constructor(private elem: ElementRef) { 
    this.elem.nativeElement.style.color= 'red';
  }

}
