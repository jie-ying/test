import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, retry, tap, throwError } from 'rxjs';
import { Notes } from '../interface/notes.model';

@Injectable({
    providedIn: 'root'
})
export class NotesService {

    private basedUrl = 'api/notes/';

    constructor(private http: HttpClient) { }

    getNotes() {
        return this.http.get<Notes[]>(this.basedUrl).pipe(
            retry(2),
            catchError((error: HttpErrorResponse) => {
                console.error(error);
                return throwError(error);
            })
        )
    }

    createNotes(notes: Notes): Observable<Notes>{
        return this.http.post<Notes>(this.basedUrl, notes)
    }

    deleteNotes(title: string): Observable<any> {
        return this.http.delete(this.basedUrl + title);
    }

}
