import {Directive, HostBinding} from '@angular/core';

@Directive({
  selector: '[appButton]'
})

export class ButtonDirective {
  @HostBinding('class.white-button') show = true;
}
