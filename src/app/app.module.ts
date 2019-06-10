import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {LandingPagesComponent} from './landing-pages/landing-pages/landing-pages.component';
import {TablePageComponent} from './landing-pages/table-page/table-page.component';
import {DirectivePageComponent} from './landing-pages/directive-page/directive-page.component';
import {SharedModule} from '../shared/shared.module';

@NgModule({
  declarations: [
    AppComponent,
    LandingPagesComponent,
    TablePageComponent,
    DirectivePageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
