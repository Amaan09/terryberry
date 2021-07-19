import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { myInfo } from '../../shared/models/my-info/my-info.model';
import { Observable, of } from 'rxjs';
import { catchError, map, subscribeOn, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MyInfoRepositoryService {

  private myInfoUrl: string = 'api/myInfo';
  savedInfo: Observable<myInfo>;

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) { }

  getMyInfo(): Observable<myInfo> {
    if (this.savedInfo) return this.savedInfo;
    return this.http.get<myInfo>(this.myInfoUrl)
      .pipe(
        catchError(this.handleError<myInfo>('getUserInfo', {} as myInfo))
      );
  }

  saveMyInfo(data: myInfo) {
    this.savedInfo = new Observable(subscriber => {
      subscriber.next(data);
    })
  }

  private handleError<T>(operation = 'operation', result?: T) {
  return (error: any): Observable<T> => {

    console.error(error);

    return of(result as T);
  };
}


}
