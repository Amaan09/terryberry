import { Component, OnInit } from '@angular/core';
import { MyInfoRepositoryService } from '../../../services/repositories/my-info-repository.service';

import { myInfo } from '../../../shared/models/my-info/my-info.model';

@Component({
  selector: 'my-info',
  templateUrl: './my-info.component.html',
  styleUrls: ['./my-info.component.scss']
})
export class MyInfoComponent implements OnInit {

  myInfo: myInfo = {} as myInfo;
  displayedItems: string[] = ['name', 'age', 'gender', 'hobbies'];
  constructor(private myInfoService: MyInfoRepositoryService) { }

  ngOnInit(): void {
    this.getMyInfo();
  }

  getMyInfo() {
    this.myInfoService.getMyInfo().subscribe(myInfo => {
      this.myInfo = {...myInfo};
      console.log(this.myInfo)
    })
  }

  editMyInfo() {
    console.log('edit mode on')
  }

}
