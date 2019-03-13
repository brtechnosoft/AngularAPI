import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { UserComponent } from "./users/users.component";
import { AlbumComponent } from "./album/album.component";
import { AlbumComponent2 } from "./album/album2.component";
import { AlbumDetailComponent } from "./album-detail/album-detail.component";

import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,UserComponent,AlbumComponent,AlbumDetailComponent,AlbumComponent2
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
	BrowserAnimationsModule,
   HttpModule, FormsModule, HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
