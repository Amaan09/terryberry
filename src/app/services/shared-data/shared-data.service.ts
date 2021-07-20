import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { MyInfo } from '../../shared/models/my-info/my-info.model';

@Injectable({
  providedIn: 'root'
})
export class SharedDataService {

  private _myInfoChanged = new Subject<{data: MyInfo, submit: boolean}>();

  public myInfoChanged = this._myInfoChanged.asObservable();

  changeMyInfo(data: {data: MyInfo, submit: boolean}) {
    this._myInfoChanged.next(data);
  }

}
