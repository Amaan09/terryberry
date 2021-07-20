import { Component, OnInit, Input } from '@angular/core';
import { MyInfoDetails } from '../../../../shared/models/my-info-details/my-info-details.model';
import { MyInfo } from '../../../../shared/models/my-info/my-info.model';

@Component({
  selector: 'app-view-info',
  templateUrl: './view-info.component.html',
  styleUrls: ['./view-info.component.scss'],
})
export class ViewInfoComponent implements OnInit {
  @Input() myInfo: MyInfo;
  @Input() displayedItems: MyInfoDetails[];

  constructor(
  ) {}

  ngOnInit(): void { }

}
