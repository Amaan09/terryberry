import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoaderService {

  public spinLoad = new BehaviorSubject(false);

  constructor() { }

  setLoader(data: boolean): void {
    this.spinLoad.next(data);
  }
}
