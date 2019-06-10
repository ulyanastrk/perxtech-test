import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {AppComponent} from './app.component';
import {LandingComponent} from './landing-pages/landing/landing.component';
import {TablePageComponent} from './landing-pages/landing-pages/table-page/table-page.component';
import {DirectivePageComponent} from './landing-pages/landing-pages/directive-page/directive-page.component';

const routes: Routes = [
  {path: '', component: LandingComponent},
  {path: 'landing', loadChildren: './landing-pages/landing-pages/landing-pages.module#LandingPagesModule'},
//  {path: '**', redirectTo: ''},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {
}
