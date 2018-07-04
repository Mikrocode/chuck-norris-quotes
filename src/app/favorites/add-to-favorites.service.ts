import { EventEmitter, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Favorite } from '../shared/favorite.model';

@Injectable()
export class AddToFavoritesService {
  constructor(private router: Router){
  }
  maxFavorites = 10;
  localStorageLoaded = false;
  favoritesChanged = new EventEmitter<Favorite[]>();
  private favorites: Favorite[] = [];

  getFavorites() {
    return this.favorites.slice();
  }

  addFavorite(favorite: Favorite) {
    if (this.favorites.length === this.maxFavorites){
      this.router.navigate(['favorites'])
      alert ('You already reachead the max amount of ' + this.maxFavorites + ' favorites\nYou can delete some in the ' +
        'Favorite tab');
    }

    if (this.favorites.indexOf(favorite) < 0 && this.favorites.length < this.maxFavorites) {
      this.favorites.push(favorite);
      this.favoritesChanged.emit(this.favorites.slice());
      localStorage.setItem('favorites', JSON.stringify(this.favorites));
    }
  }

    removeFavorite (favorite: Favorite) {
      const index = this.favorites.indexOf(favorite);
      if (index > -1) {
        this.favorites.splice(index, 1);
      }

      this.favoritesChanged.emit(this.favorites.slice());
      localStorage.setItem('favorites', JSON.stringify(this.favorites));
    }

    onLocalStorageLoaded (status) {
      this.localStorageLoaded = status;
    }

  addFavorites(favorite: Favorite[]) {
    this.favorites.push(...favorite);
    this.favoritesChanged.emit(this.favorites.slice());
  }
}
