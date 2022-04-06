import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';


@Injectable({
  providedIn: 'root'
})
export class DataService implements InMemoryDbService {
  
  constructor() { }

  createDb(){
    const notes = [
      {
        title: 'Lorem ipsum',
        content: 'Voluptatem excepturi magnam nostrum dolore recusandae'
      },
      {
        title: 'qui est esse',
        content:'est rerum tempore sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla'
      }
    ];
    return {notes};
  }

}
