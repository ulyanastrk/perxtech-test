import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {LandingPagesComponent} from './landing-pages/landing-pages.component';
import {TablePageComponent} from './table-page/table-page.component';
import {DirectivePageComponent} from './directive-page/directive-page.component';

const routes: Routes = [
  {
    path: '', component: LandingPagesComponent, children: [
      {path: '', redirectTo: 'table', pathMatch: 'full'},
      {path: 'table', component: TablePageComponent},
      {path: 'directive', component: DirectivePageComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class LandingPagesRoutingModule {
}
