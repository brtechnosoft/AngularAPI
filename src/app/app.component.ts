import { Component } from '@angular/core';
import { Http } from '@angular/http';
import { map, filter, scan } from 'rxjs/operators';
import { Observable, Subject, asapScheduler, pipe, of, from, interval, merge, fromEvent, SubscriptionLike, PartialObserver } from 'rxjs';

import { HttpClient } from '@angular/common/http';
import { forkJoin } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
 title = 'AngularUsers';


  constructor(private http: Http) { }

httpdata;
   ngOnInit() {
      this.http.get("http://jsonplaceholder.typicode.com/users")
      .pipe(map((response) => response.json()))
      .subscribe((data) => this.displaydata(data));     
   }
   displaydata(data) {this.httpdata = data;}
}
