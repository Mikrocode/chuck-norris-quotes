import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { TenRandomQuotesComponent } from './ten-random-quotes/ten-random-quotes.component';
import { FavoritesComponent } from './favorites/favorites.component';
import {AppRoutingModule} from './app-routing.module';
import { HeaderComponent } from './header/header.component';
import {AddToFavoritesService} from './favorites/add-to-favorites.service';
import {LocalstorageService} from './shared/localstorage.service';
import {RandomFavoriteService} from './favorites/random-favorite.service';
import {QuotesService} from './quotes.service';


@NgModule({
  declarations: [
    AppComponent,
    TenRandomQuotesComponent,
    FavoritesComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [ QuotesService, AddToFavoritesService, LocalstorageService, RandomFavoriteService],
  bootstrap: [AppComponent]
})
export class AppModule { }
