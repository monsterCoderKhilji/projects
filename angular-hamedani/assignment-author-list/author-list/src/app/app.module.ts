import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AuthorListComponent } from './author-list/author-list.component';
import { AuthorService } from './author.service';

@NgModule({
  declarations: [
    AppComponent,
    AuthorListComponent
  ],
  imports: [
    BrowserModule,
  ],
  providers: [
    AuthorService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
