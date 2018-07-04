import {EventEmitter, Injectable} from '@angular/core';
import {AddToFavoritesService} from '../favorites/add-to-favorites.service';
import {Favorite} from './favorite.model';

@Injectable()
export class LocalstorageService {
  constructor(private  addToFavoritesService: AddToFavoritesService) {}
  favoritesChanged = new EventEmitter<Favorite[]>();

  favorites;
  storedFavorites;

  getLocalStorage(componentName: string) {
    switch (componentName) {
      case 'favorites':
        this.storedFavorites = localStorage.getItem('favorites');
        this.storedFavorites = JSON.parse(this.storedFavorites);

        if (this.storedFavorites.length > 0) {
          this.favorites = this.storedFavorites;
          this.addToFavoritesService.addFavorites(this.favorites);
          this.favoritesChanged.emit(this.favorites);
          this.addToFavoritesService.onLocalStorageLoaded(true);
        } else {
          this.favorites = this.addToFavoritesService.getFavorites();
          this.favoritesChanged.emit(this.favorites.slice());
        }
        break;
        case 'ten-random-quotes':
        break;
    }
  }
}
