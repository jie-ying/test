import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Notes } from 'src/app/interface/notes.model';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.scss']
})
export class TitleComponent implements OnInit {

  @Input() notelists!: Notes;
  @Output() noteinfoEmiter = new EventEmitter();

  constructor() { }

  ngOnInit(): void { }

  noteInfo(){
    this.noteinfoEmiter.emit(this.notelists.title)
    console.log(this.notelists)
  }

}
