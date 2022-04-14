import { Component, OnInit } from '@angular/core';
import { DataService } from '../service/data.service';
import { Todo } from '../user.model';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit {

  todolist!: Todo[];

  constructor(private service: DataService) { }

  ngOnInit() {
    this.service.getUser().subscribe((data:any) =>{
      this.todolist = data;
    })
  }

}
