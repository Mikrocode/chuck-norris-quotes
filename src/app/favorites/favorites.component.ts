import {Component, OnInit} from '@angular/core';
import {AddToFavoritesService} from './add-to-favorites.service';
import { RandomFavoriteService } from './random-favorite.service';
import {Favorite} from '../shared/favorite.model';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.css']
})

export class FavoritesComponent implements OnInit {

  constructor(private addToFavoritesService: AddToFavoritesService,
              private randomFavoriteService: RandomFavoriteService) {}

  favorites: Array<Favorite> = [];
  randomAddFavoriteTime = 5000;
  randomQuote;
  intervalRandomQuote: number;
  enabled: boolean = true;

  ngOnInit() {
    this.addToFavoritesService.favoritesChanged
      .subscribe(
        (favorites) => {
          this.favorites = favorites;
        }
      );
    this.randomFavoriteService.randomQuoteCreated
      .subscribe(
        (response) => {
          // if already an entry...
          if (this.addToFavoritesService.getFavorites().indexOf (response))  {
            this.addToFavoritesService.addFavorite(response);
          }
          else {
            // ...extract a new one
            this.onAddRandomFavorite (5);
          }
        }
      );

    this.favorites = this.addToFavoritesService.getFavorites();
    this.addToFavoritesService.favoritesChanged.emit(this.favorites.slice());
  }

  newRandomQuote() {
    this.randomQuote = this.randomFavoriteService.addRandomFavorite();
  }
  onAddRandomFavorite(time){
    this.enabled = !this.enabled;
    this.intervalRandomQuote = setInterval(() => { this.newRandomQuote(); }, time);
  }

  stopRandomAddiction(){
    this.enabled = !this.enabled;
    clearInterval(this.intervalRandomQuote);
  }

  onRemoveFavorite  (quote) {
   this.addToFavoritesService.removeFavorite(quote);
    return this.favorites;
  }
}
