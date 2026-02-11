import { Component, signal } from '@angular/core';
import { NoteListComponent } from './note.list.component/note.list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NoteListComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('note');
}
