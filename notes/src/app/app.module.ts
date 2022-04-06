import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContentComponent } from './note/content/content.component';
import { NoteComponent } from './note/note.component';
import { TitleComponent } from './note/title/title.component';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { DataService } from './service/data.service';
import { NotesService } from './service/notes.service';

@NgModule({
  declarations: [
    AppComponent,
    NoteComponent,
    ContentComponent,
    TitleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(DataService),
  ],
  providers: [DataService, NotesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
