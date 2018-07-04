import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {TenRandomQuotesComponent} from './ten-random-quotes/ten-random-quotes.component';
import {FavoritesComponent} from './favorites/favorites.component';

const appRoutes: Routes = [
  { path: '', redirectTo: 'ten-random-quotes', pathMatch: 'full' },
  { path: 'ten-random-quotes', component: TenRandomQuotesComponent},
  { path: 'favorites', component: FavoritesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  constructor () {};
}
