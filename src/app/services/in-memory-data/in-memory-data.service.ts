import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { MyInfo } from '../../shared/models/my-info/my-info.model';


@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {

  constructor() { }

  createDb(): any {
    const myInfo: MyInfo = {
      id: 1,
      name: 'Mohammed Amaan',
      age: 21,
      gender: 'M',
      hobbies: ['Coding', 'Travelling', 'Reading']
    };
    return {myInfo};
  }

}
