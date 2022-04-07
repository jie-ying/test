import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Notes } from '../interface/notes.model';


@Injectable({
  providedIn: 'root'
})
export class DataService implements InMemoryDbService {
  
  constructor() { }

  createDb(){
    const notes = [
      {
        id: 1,
        title: 'Lorem ipsum',
        content: 'Voluptatem excepturi magnam nostrum dolore recusandae'
      },
      {
        id: 2,
        title: 'qui est esse',
        content:'est rerum tempore sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla'
      }
    ];
    return {notes};
  }

  genId(notes: Notes[]): number{
    return notes.length > 0 ? Math.max(...notes.map((note) => note.id)) + 1 : 2;
  }

}
