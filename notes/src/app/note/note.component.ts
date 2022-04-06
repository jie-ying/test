import { Component, OnInit } from '@angular/core';
import { Notes } from '../interface/notes.model';
import { NotesService } from '../service/notes.service';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.scss']
})
export class NoteComponent implements OnInit {

  note = {
    title: '',
    content: ''
  }

  notes!: Notes[];

  constructor(private noteService: NotesService) { }

  ngOnInit(): void {
    this.noteService.getNotes().subscribe((data) =>
      this.notes = data
    )}

}
