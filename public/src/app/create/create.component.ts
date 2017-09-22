import { Component, OnInit, Output} from '@angular/core';
import { Note } from '../notelist/note';
import { NotehandlerService } from './../notehandler.service'

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  note = new Note();

  constructor(private _handler: NotehandlerService) { }

  ngOnInit() {
  }

  create(){
    this._handler.create(this.note)
    .then(notes => this.note = new Note())
    .catch(err => console.log("There is an issue with creating notes"))

  }

}
