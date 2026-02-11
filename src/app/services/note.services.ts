import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Note } from '../models/note';

@Injectable({
  providedIn: 'root'
})

export class NoteService {
  private http = inject(HttpClient);
  private readonly apiUrl = 'http://localhost:8080/notes/';

  public getNotes() {
    return this.http.get<Note[]>(this.apiUrl);
  }
}
