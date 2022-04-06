import { Component, Input, OnInit } from '@angular/core';
import { Notes } from 'src/app/interface/notes.model';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.scss']
})
export class TitleComponent implements OnInit {

  @Input() notelists!: Notes;

  constructor() { }

  ngOnInit(): void {
  }

}
