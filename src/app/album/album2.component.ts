import { Component } from '@angular/core';
import { Http } from '@angular/http';
import { map, filter, scan } from 'rxjs/operators';
import { Observable, Subject, asapScheduler, pipe, of, from, interval, merge, fromEvent, SubscriptionLike, PartialObserver } from 'rxjs';

import { HttpClient } from '@angular/common/http';
import { forkJoin } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './album.component.html'
})

export class AlbumComponent2 {

 title = 'Angularalbum';
  constructor(private http: Http) {   
	}

//httpdata;
 //  ngOnInit() {
  //    this.http.get("http://jsonplaceholder.typicode.com/albums")
   //   .pipe(map((response) => response.json()))
   //   .subscribe((data) => this.displaydata(data));     
   //}
 //  displaydata(data) {this.httpdata = data;}
//}

  httpdata;
   name;
   searchparam = 2;
  //  searchparam = get("id");
   ngOnInit() {
      this.http.get("http://jsonplaceholder.typicode.com/albums?userId="+this.searchparam)
	//  this.http.get("http://jsonplaceholder.typicode.com/albums?userId="+id)
      .pipe(map((response) => response.json()))
      .subscribe((data) => this.displaydata(data));     
   }
   displaydata(data) {this.httpdata = data;}
}