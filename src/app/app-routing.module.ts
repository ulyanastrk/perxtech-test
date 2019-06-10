import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {AppComponent} from './app.component';
import {LandingPagesComponent} from './landing-pages/landing-pages/landing-pages.component';
import {TablePageComponent} from './landing-pages/table-page/table-page.component';
import {DirectivePageComponent} from './landing-pages/directive-page/directive-page.component';

const routes: Routes = [
  {
    path: '', component: AppComponent, children: [
      {path: '', redirectTo: 'landing', pathMatch: 'full'},
      {path: 'landing', component: LandingPagesComponent},
      {path: 'table', component: TablePageComponent},
      {path: 'directive', component: DirectivePageComponent}
    ]
  },
  {path: '**', redirectTo: ''},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {
}
