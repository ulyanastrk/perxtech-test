import {Directive, ElementRef} from '@angular/core';

@Directive({
  selector: '[appTextWatch]'
})

export class TextWatchDirective {

  constructor(private el: ElementRef) {
  }

  get text(): string {
    return this.el.nativeElement.value;
  }
}
