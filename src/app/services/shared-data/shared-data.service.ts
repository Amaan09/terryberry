import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { MyInfo } from '../../shared/models/my-info/my-info.model';

@Injectable({
  providedIn: 'root',
})
export class SharedDataService {
  private myInfoChangedSubject = new Subject<{
    data: MyInfo;
    submit: boolean;
  }>();

  public myInfoChanged = this.myInfoChangedSubject.asObservable();

  changeMyInfo(data: { data: MyInfo; submit: boolean }): void {
    this.myInfoChangedSubject.next(data);
  }
}
