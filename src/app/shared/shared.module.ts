import {NgModule} from '@angular/core';
import {HeaderComponent} from './header/header.component';
import {RouterModule} from '@angular/router';
import {CommonModule} from '@angular/common';
import {ReverseTextDirective} from './directives/reverse-text.directive';
import {ButtonDirective} from './directives/button.directive';

@NgModule({
  declarations: [
    HeaderComponent,
    ReverseTextDirective,
    ButtonDirective
  ],
  imports: [
    RouterModule,
    CommonModule
  ],
  exports: [
    HeaderComponent,
    ReverseTextDirective,
    ButtonDirective
  ]
})

export class SharedModule {
}
