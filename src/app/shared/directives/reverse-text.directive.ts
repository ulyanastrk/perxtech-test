import {Directive, ElementRef, Input, OnChanges, Renderer2, TemplateRef, ViewContainerRef} from '@angular/core';

@Directive({
  selector: '[appReverseText]'
})

export class ReverseTextDirective implements OnChanges{
  @Input('appReverseText') text: string;

  constructor(private el: ElementRef) {
  }

  ngOnChanges(): void {
    this.el.nativeElement.innerHTML = this.text.split("").reverse().join("");
  }
}
