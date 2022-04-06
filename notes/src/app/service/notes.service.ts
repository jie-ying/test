import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, retry, throwError } from 'rxjs';
import { Notes } from '../interface/notes.model';

@Injectable({
    providedIn: 'root'
})
export class NotesService {

    private basedUrl = 'api/notes/';

    constructor(private http: HttpClient) { }

    getNotes(){
        return this.http.get<Notes[]>(this.basedUrl).pipe(
            retry(2),
            catchError((error: HttpErrorResponse) => {
                console.error(error);
                return throwError(error);
            })
        )
    }

}
