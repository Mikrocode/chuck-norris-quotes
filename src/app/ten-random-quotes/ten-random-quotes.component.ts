import { Component, OnInit } from '@angular/core';
import { QuotesService } from '../quotes.service';
import {AddToFavoritesService} from '../favorites/add-to-favorites.service';

@Component({
  selector: 'app-ten-random-quotes',
  templateUrl: './ten-random-quotes.component.html',
  styleUrls: ['./ten-random-quotes.component.css']
})



export class TenRandomQuotesComponent implements OnInit {

  constructor(private quoteService: QuotesService,
              private addToFavoritesService: AddToFavoritesService) {}
  quotes: object;
  favorites;

  ngOnInit() {

    this.addToFavoritesService.favoritesChanged
      .subscribe(
        (favorites) => {
          this.favorites = favorites;
        }
      );

    this.favorites = this.addToFavoritesService.getFavorites();
    this.addToFavoritesService.favoritesChanged.emit(this.favorites.slice());
  }

  loadQuotes(quotesAmount) {
    this.quotes = this.quoteService.getQuotes(quotesAmount);
  }

  onAddToFavorites (quote) {
    this.addToFavoritesService.addFavorite(quote);
  }
}
