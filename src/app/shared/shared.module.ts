import {NgModule} from '@angular/core';
import {HeaderComponent} from './header/header.component';
import { ButtonComponent } from './button/button.component';
import {RouterModule} from '@angular/router';
import {CommonModule} from '@angular/common';
import {TextWatchDirective} from './directives/text-watch.directive';

@NgModule({
  declarations: [
    HeaderComponent,
    ButtonComponent,
    TextWatchDirective
  ],
  imports: [
    RouterModule,
    CommonModule
  ],
  exports: [
    HeaderComponent,
    ButtonComponent,
    TextWatchDirective
  ]
})

export class SharedModule {
}
