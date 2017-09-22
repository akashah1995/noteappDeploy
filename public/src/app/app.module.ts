import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CreateComponent } from './create/create.component';
import { NotelistComponent } from './notelist/notelist.component';

import { FormsModule } from '@angular/forms'; // <-- Import FormsModule
import { HttpModule } from '@angular/http'; // <-- Import HttpModule

import { NotehandlerService } from './notehandler.service';
import { NoteComponent } from './notelist/note/note.component'

@NgModule({
  declarations: [
    AppComponent,
    CreateComponent,
    NotelistComponent,
    NoteComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule
  ],
  providers: [NotehandlerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
