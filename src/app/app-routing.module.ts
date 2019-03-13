import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from "@angular/core";
import { UserComponent } from "./users/users.component";
import { AlbumComponent } from "./album/album.component";
import { AlbumComponent2 } from "./album/album2.component";
import { AlbumDetailComponent } from "./album-detail/album-detail.component";

const routes: Routes = [
  { path: "users", component: UserComponent },
  { path: "users/:id", component: UserComponent },
   { path: "album", component: AlbumComponent },
   { path: "album/:id", component: AlbumComponent },
   { path: "album2/:id", component: AlbumComponent2 },
   { path: "album-detail", component: AlbumDetailComponent },
   { path: "album-detail/:id", component: AlbumDetailComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export const AppRoutingModule: ModuleWithProviders = RouterModule.forRoot(routes);
