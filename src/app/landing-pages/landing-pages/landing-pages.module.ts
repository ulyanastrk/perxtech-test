import {NgModule} from '@angular/core';
import {TablePageComponent} from './table-page/table-page.component';
import {DirectivePageComponent} from './directive-page/directive-page.component';
import {CoreModule} from '../../core/core.module';
import {SharedModule} from '../../../shared/shared.module';
import {
  MatButtonModule,
  MatFormFieldModule,
  MatInputModule,
  MatSortModule,
  MatTableModule
} from '@angular/material';
import {LandingPagesComponent} from './landing-pages/landing-pages.component';
import {LandingPagesRoutingModule} from './landing-pages-routing.module';
import {CommonModule} from '@angular/common';

@NgModule({
  declarations: [
    TablePageComponent,
    DirectivePageComponent,
    LandingPagesComponent
  ],
  imports: [
    LandingPagesRoutingModule,
    CoreModule,
    CommonModule,
    SharedModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    MatSortModule,
    MatButtonModule
  ],
  providers: []
})

export class LandingPagesModule {
}
