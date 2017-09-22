import { Injectable } from '@angular/core';
import {Http } from '@angular/http';
import "rxjs";
import {Observable} from "rxjs";
import { Note } from './notelist/note';

@Injectable()
export class NotehandlerService {

  constructor(private _http: Http) { }

  getNotes(){
    return this._http.get("/notes").map(data => data.json()).toPromise();
  }

  create(note:Note){
    return this._http.post("/notes", note).map(data => data.json()).toPromise();
  }

}
