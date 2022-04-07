import { Component, OnInit } from '@angular/core';
import { Notes } from '../interface/notes.model';
import { NotesService } from '../service/notes.service';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.scss']
})
export class NoteComponent implements OnInit {

  note!: Notes;
  notes: Notes[] = [];
  noteTitles!: any;
  noteId!: any;

  constructor(private noteService: NotesService) { }

  ngOnInit(): void {
    this.getNote();
  }

  private getNote(){
    this.noteService.getNotes().subscribe((data) =>
      this.notes = data
    )
  }

  getInfo(titles:string){
    this.noteTitles = titles;
    this.note = this.notes.filter((notelist) => notelist.title === titles)[0];
    console.log(this.note.title);
    console.log(this.note.content);
  }

  addNotes(title: string, content: string): void{
    if(!title && !content){return};
    this.noteService.createNotes({ title, content } as Notes).subscribe((newNotes) => {
      this.notes.push(newNotes);
    })    
    alert("Do you want to save?");
    title = '';
    content = '';
  }

  deleteNotes(id: number){
    this.noteId = id;
    this.notes = this.notes.filter((notelist) => notelist.id !== id);

  }

  updateNote(): void{
    this.noteService.updateNotes(this.note).subscribe((res) => {
      console.log(res);
    });
    this.getNote();
  }

}
