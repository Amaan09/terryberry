import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { MyInfo } from '../../shared/models/my-info/my-info.model';

@Injectable({
  providedIn: 'root'
})
export class SharedDataService {

  private _myInfoChanged = new BehaviorSubject(null);

  public myInfoChanged = this._myInfoChanged.asObservable();

  changeMyInfo(data) {
    this._myInfoChanged.next(data);
  }

}
