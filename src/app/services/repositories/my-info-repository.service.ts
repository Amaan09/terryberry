import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { MyInfo } from '../../shared/models/my-info/my-info.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MyInfoRepositoryService {

  private myInfoUrl: string = 'api/myInfo';
  savedInfo: Observable<MyInfo>;

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) { }

  getMyInfo(): Observable<MyInfo> {
    if (this.savedInfo)
      return this.savedInfo;

    return this.http.get<MyInfo>(this.myInfoUrl);
  }

  saveMyInfo(data: MyInfo): void {
    this.savedInfo = new Observable(subscriber => {
      subscriber.next(data);
    });
  }

}
