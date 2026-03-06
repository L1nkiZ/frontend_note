import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Note } from '@/models/note';

@Component({
  selector: 'app-note',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './note.component.html',
  styleUrl: './note.component.css',
})
export class NoteComponent {
    @Input() note!: Note;
}
