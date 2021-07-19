import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoaderService {

  public spinLoad = new BehaviorSubject(false);
  public progLoad = new BehaviorSubject(false);

  constructor() { }

  setLoader(data) {
    this.spinLoad.next(data);
  }
}
