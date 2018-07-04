import {Component, EventEmitter, OnInit, ViewEncapsulation} from '@angular/core';
import {LocalstorageService} from './shared/localstorage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None
})

export class AppComponent implements OnInit {
  constructor(private localstorageService: LocalstorageService) { }

  ngOnInit() {
    this.localstorageService.getLocalStorage('favorites');
  }
}
