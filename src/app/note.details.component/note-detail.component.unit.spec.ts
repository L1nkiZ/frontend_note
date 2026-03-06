import { ActivatedRoute, convertToParamMap, provideRouter, Router } from '@angular/router';

import { NoteDetailComponent } from '../note-detail.component';
import { TestBed, ComponentFixture } from '@angular/core/testing';
import { Component } from '@angular/core';
import { NoteService } from '../../core/services/note.service';
import { of } from 'rxjs';

@Component({
  selector: 'app-dummy-notes',
  template: '<p>Notes</p>',
  standalone: true,
})
class DummyNotesComponent {}

const settle = async () => {
    await Promise.resolve();
    await new Promise((r) => setTimeout(r, 0));
    await Promise.resolve();
  };

describe('NoteDetail', () => {
  let component: NoteDetailComponent;
  let fixture: ComponentFixture<NoteDetailComponent>;
  let router: Router;

  const noteServiceMock = {
    deleteNoteById: jest.fn<ReturnType<NoteService['deleteNoteById']>, Parameters<NoteService['deleteNoteById']>>()
  };

  beforeEach(async () => {

    const mockedNote = { id: 1, title: 'title', content: 'content' };

    await TestBed.configureTestingModule({
      imports: [NoteDetailComponent, DummyNotesComponent],
      providers: [
        provideRouter(
          [{ path: 'notes', component: DummyNotesComponent }]
        ),
        {
          provide: ActivatedRoute,
          useValue: {
            snapshot: {
              data: { note: mockedNote },
              paramMap: convertToParamMap({ id: '1' }),
            },
          },
        },
        { provide: NoteService, useValue: noteServiceMock },
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NoteDetailComponent);
    component = fixture.componentInstance;
    router = TestBed.inject(Router);
  });

    afterEach(async() => {
    jest.clearAllMocks();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
    expect(component.id).toBe('1');
    expect(component.note).toBeDefined();

  });

  it('should delete note service mock', async() => {
    //Arrange
    noteServiceMock.deleteNoteById.mockReturnValueOnce(of({}));

    // Act
    component.delete();

    expect(noteServiceMock.deleteNoteById).toHaveBeenCalledTimes(1);
    expect(noteServiceMock.deleteNoteById).toHaveBeenCalledWith('1');

    // Assert
    await settle();
    expect(router.url).toBe('/notes');
  });

});
