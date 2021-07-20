import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { SharedDataService } from 'src/app/services/shared-data/shared-data.service';
import { MyInfoDetails } from '../../../../shared/models/my-info-details/my-info-details.model';
import { MyInfo } from '../../../../shared/models/my-info/my-info.model';

@Component({
  selector: 'app-view-info',
  templateUrl: './view-info.component.html',
  styleUrls: ['./view-info.component.scss'],
})
export class ViewInfoComponent implements OnInit, OnDestroy {
  @Input() myInfo: MyInfo;
  @Input() displayedItems: MyInfoDetails[];

  infoChangedSubscription: Subscription;

  constructor(
    private sharedDataService: SharedDataService
  ) {}

  ngOnInit(): void {
    this.infoChangedSubscription = this.sharedDataService.myInfoChanged.subscribe(data => {
      if (data)
        this.myInfo = data;
    })
  }

  ngOnDestroy(): void {
    this.infoChangedSubscription.unsubscribe();
  }

}
