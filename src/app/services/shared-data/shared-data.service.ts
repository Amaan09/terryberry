import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { MyInfo } from '../../shared/models/my-info/my-info.model';

@Injectable({
  providedIn: 'root',
})
export class SharedDataService {
  private myInfoChangedSubject = new Subject<MyInfo>();

  public myInfoChanged = this.myInfoChangedSubject.asObservable();

  changeMyInfo(data: MyInfo): void {
    this.myInfoChangedSubject.next(data);
  }
}
