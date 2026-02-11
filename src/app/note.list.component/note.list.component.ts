import { Component, inject, signal } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';
import { Note } from '../models/note';
import { NoteComponent } from '../note.component/note.component';
import { NoteService } from '../services/note.services';

@Component({
  selector: 'app-note-list',
  standalone: true,
  imports: [NgFor, NgIf, NoteComponent],
  templateUrl: './note.list.component.html',
  styleUrl: './note.list.component.css',
})
export class NoteListComponent {
  private noteService = inject(NoteService);
  notes = signal<Note[]>([]);

  ngOnInit() {
    this.noteService.getNotes().subscribe({
      next: (notes) => this.notes.set(notes),
      error: (err) => console.error('Error fetching notes:', err)
    });
  }
}
