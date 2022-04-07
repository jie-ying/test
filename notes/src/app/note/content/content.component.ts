import { Component, Input, OnInit } from '@angular/core';
import { Notes } from 'src/app/interface/notes.model';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {

  @Input() notelists!: Notes;

  constructor() { }

  ngOnInit(): void {
  }

}
