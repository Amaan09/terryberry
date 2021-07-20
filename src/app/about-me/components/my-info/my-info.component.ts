import { Component, OnDestroy, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { LoaderService } from '../../../services/loader/loader.service';
import { MyInfoRepositoryService } from '../../../services/repositories/my-info-repository.service';
import { MyInfo } from '../../../shared/models/my-info/my-info.model';
import { MyInfoDetails } from '../../../shared/models/my-info-details/my-info-details.model';
import { SharedDataService } from 'src/app/services/shared-data/shared-data.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-my-info',
  templateUrl: './my-info.component.html',
  styleUrls: ['./my-info.component.scss'],
})
export class MyInfoComponent implements OnInit, OnDestroy {
  myInfo = {} as MyInfo;
  editMode = false;
  dataLoaded = false;
  myInfoSubscription: Subscription;

  displayedItems: MyInfoDetails[] = [
    { name: 'Name', value: 'name', isArray: false },
    { name: 'Age', value: 'age', isArray: false },
    { name: 'Gender', value: 'gender', isArray: false },
    { name: 'Hobby', value: 'hobbies', isArray: true },
  ];

  constructor(
    private myInfoService: MyInfoRepositoryService,
    private loader: LoaderService,
    private toastr: ToastrService,
    private sharedDataService: SharedDataService
  ) {}

  ngOnInit(): void {
    this.getMyInfo();
    this.myInfoSubscription = this.sharedDataService.myInfoChanged.subscribe(
      (data) => {
        if (data && data.submit === true) {
          this.myInfo = data;
        }
        this.onEditInfo();
      }
    );
  }

  getMyInfo(): void {
    this.loader.setLoader(true);
    this.myInfoService.getMyInfo().subscribe(
      (result: MyInfo) => {
        this.myInfo = result;
        this.loader.setLoader(false);
        this.dataLoaded = true;
      },
      (error) => {
        this.toastr.error('Failed to Load Data ' + error?.message, 'Error');
        this.loader.setLoader(false);
      }
    );
  }

  onEditInfo(): void {
    this.editMode = !this.editMode;
  }

  ngOnDestroy() {
    this.myInfoSubscription.unsubscribe();
  }
}
