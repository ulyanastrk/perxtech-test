import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {LandingComponent} from './content/landing/landing.component';

const routes: Routes = [
  {path: '', component: LandingComponent},
  {path: 'landing', loadChildren: './content/landing-pages/landing-pages.module#LandingPagesModule'},
  {path: '**', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {
}
