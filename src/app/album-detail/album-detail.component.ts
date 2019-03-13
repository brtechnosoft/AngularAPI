import { Component } from '@angular/core';
import { Http } from '@angular/http';
import { map, filter, scan } from 'rxjs/operators';
import { Observable, Subject, asapScheduler, pipe, of, from, interval, merge, fromEvent, SubscriptionLike, PartialObserver } from 'rxjs';

import { HttpClient } from '@angular/common/http';
import { forkJoin } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './album-detail.component.html'
})

export class AlbumDetailComponent {

 title = 'AngularPhotos';
  constructor(private http: Http) { }


  httpdata;
   name;
   searchparam = 1; 
   ngOnInit() {
      this.http.get("http://jsonplaceholder.typicode.com/photos?albumId="+this.searchparam)
      .pipe(map((response) => response.json()))
      .subscribe((data) => this.displaydata(data));     
   }
   displaydata(data) {this.httpdata = data;}
}
