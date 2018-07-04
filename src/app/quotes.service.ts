import {Injectable} from '@angular/core';
import {  Http, Response } from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class QuotesService {
  constructor(private http: Http) {}
  getQuotes(quotesAmount: number) {
    return this.http.get('http://api.icndb.com/jokes/random/' + quotesAmount)
      .map(
        (response: Response) => {
          return response.json().value;
        }
      );
  }
}
