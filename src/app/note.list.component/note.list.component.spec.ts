import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';

import { NoteListComponent } from './note.list.component';
import { NoteService } from '../services/note.services';

describe('NoteListComponent', () => {
  let component: NoteListComponent;
  let fixture: ComponentFixture<NoteListComponent>;

  beforeEach(async () => {
    // Provide a minimal mock NoteService so ngOnInit subscription won't fail
    const mockNoteService = {
      getNotes: () => of([]),
    };

    await TestBed.configureTestingModule({
      imports: [NoteListComponent],
      providers: [{ provide: NoteService, useValue: mockNoteService }]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NoteListComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
