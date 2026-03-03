import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpTestingController, provideHttpClientTesting } from '@angular/common/http/testing';
import { provideHttpClient } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';

import { NoteListComponent } from './note.list.component';
import { Note } from '../models/note';

describe('NoteListComponent', () => {
  let component: NoteListComponent;
  let fixture: ComponentFixture<NoteListComponent>;
  let httpMock: HttpTestingController;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NoteListComponent, RouterTestingModule],
      providers: [provideHttpClient(), provideHttpClientTesting()],
    }).compileComponents();

    fixture = TestBed.createComponent(NoteListComponent);
    component = fixture.componentInstance;
    httpMock = TestBed.inject(HttpTestingController);
    localStorage.clear();
  });

  afterEach(() => {
    httpMock.verify();
    localStorage.clear();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should get notes from service', () => {
    // Arrange
    const mockedNotes = [
      { id: 1, title: 'title1', content: 'content1' },
      { id: 2, title: 'title2', content: 'content2' },
    ] as Note[];

    // Act
    fixture.detectChanges();

    const req = httpMock.expectOne(() => true);
    expect(req.request.method).toBe('GET');
    req.flush(mockedNotes);

    // Assert
    expect(component).toBeTruthy();
    expect(component.notes().length).toBe(2);
  });
});
