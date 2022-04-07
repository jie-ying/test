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
    content: '',
  }
  notes!: Notes[];
  noteTitles!: any;

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

  addNotes(){    
    const data = {
      title: this.note.title,
      content: this.note.content
    }
    this.noteService.createNotes(data).subscribe((res) =>{
      console.log(res);
      this.getNote();
    })

    console.log(data.title)
   
  }

}
