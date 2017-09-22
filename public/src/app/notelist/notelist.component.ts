import { Component, OnInit } from '@angular/core';
import { NotehandlerService } from '../notehandler.service';
import {Note} from './note';

@Component({
  selector: 'app-notelist',
  templateUrl: './notelist.component.html',
  styleUrls: ['./notelist.component.css']
})
export class NotelistComponent implements OnInit {
  notes = [];
  constructor(private _handler:NotehandlerService ) {
    console.log("Calling the notes getter in the constructor right now!")
    this.getNotes()
   }

  ngOnInit() {
  }

  getNotes(){
    this._handler.getNotes()
    .then(notes => this.notes = notes)
    .catch(err => console.log("There is an issue with getting notes"))
  }

}
