import { Component, OnInit } from '@angular/core';
import {AddToFavoritesService} from '../favorites/add-to-favorites.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent implements OnInit {

  constructor(private addToFavorite: AddToFavoritesService) { }
  favorites;
  favoritesAmount = 0;
  ngOnInit() {

    this.addToFavorite.favoritesChanged
      .subscribe(
        (favorites) => {
          this.favorites = favorites;
          this.favoritesAmount = this.favorites.length;
        }
      );
    }
}
