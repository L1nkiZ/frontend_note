import { Component, OnInit, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Note } from './models/note';
import { NoteComponent } from './note/note.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NoteComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit {
  protected readonly title = signal('note');

  myNote!: Note;

  ngOnInit() {
    this.myNote = new Note(1, 'Note 1', 'This is the content of note 1');
  }
}
