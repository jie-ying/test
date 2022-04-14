import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Todo } from '../user.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  url = "https://jsonplaceholder.typicode.com";
  private todo= "todos";

  constructor(private http: HttpClient) { }

  getUser(){
    return this.http.get([this.url, this.todo].join('/')) as Observable <Todo>;
  }

}
