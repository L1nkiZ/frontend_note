import { Component, Input } from '@angular/core';
import { Note } from '../models/note';

@Component({
  selector: 'app-note',
  standalone: true,
  imports: [],
  templateUrl: './note.component.html',
  styleUrl: './note.component.css',
})
export class NoteComponent {
    @Input() note!: Note;
}
