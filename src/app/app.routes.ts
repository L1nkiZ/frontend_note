import { Routes } from '@angular/router';
import { NoteListComponent } from './note.list.component/note.list.component';
import { NoteDetailsComponent } from './note.details.component/note.details.component';
import { NoteResolver } from './resolver/note.resolver';

export const routes: Routes = [
  { path: '', redirectTo: 'notes', pathMatch: 'full' },
  { path: 'notes', component: NoteListComponent },
  { path: 'notes/:id', component: NoteDetailsComponent, resolve: { note: NoteResolver } },
];
