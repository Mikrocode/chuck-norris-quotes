import {EventEmitter, Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import {Favorite} from '../shared/favorite.model';

@Injectable()
export class RandomFavoriteService {
  constructor(private http: Http) {
  }
  randomQuoteCreated = new EventEmitter<Favorite[]>();

  response;

  addRandomFavorite() {
     return this.http.get('http://api.icndb.com/jokes/random/1' )
      .map((response: Response) => response.json())
      .subscribe(
        data => { this.response = data.value[0] },
        err => console.error(err),
        () => { this.randomQuoteCreated.emit(this.response);
        }
      );
  }
}
