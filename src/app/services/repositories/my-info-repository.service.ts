import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { myInfo } from '../../shared/models/my-info/my-info.model';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MyInfoRepositoryService {

  private myInfoUrl = 'api/myInfo';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) { }

  getMyInfo(): Observable<myInfo> {
    return this.http.get<myInfo>(this.myInfoUrl)
      .pipe(
        catchError(this.handleError<myInfo>('getUserInfo', {id: null, name: null, age: null, hobbies: [], gender: null}))
      );
  }

  private handleError<T>(operation = 'operation', result?: T) {
  return (error: any): Observable<T> => {

    console.error(error);

    return of(result as T);
  };
}


}
