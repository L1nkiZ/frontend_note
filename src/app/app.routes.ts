import { Routes } from '@angular/router';
import { NoteListComponent } from './note.list.component/note.list.component';

export const routes: Routes = [
  { path: '', redirectTo: 'notes', pathMatch: 'full' },
  { path: 'notes', component: NoteListComponent }
];
