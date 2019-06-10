import {NgModule} from '@angular/core';
import {HeaderComponent} from './header/header.component';
import { ButtonComponent } from './button/button.component';
import {RouterModule} from '@angular/router';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    HeaderComponent,
    ButtonComponent
  ],
  imports: [
    RouterModule,
    BrowserModule,
    BrowserAnimationsModule
  ],
  exports: [
    HeaderComponent,
    ButtonComponent
  ]
})

export class SharedModule {
}
