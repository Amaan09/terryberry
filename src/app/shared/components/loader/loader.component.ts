import { ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { LoaderService } from '../../../services/loader/loader.service';

@Component({
  selector: 'loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss']
})
export class LoaderComponent implements OnInit, OnDestroy {

  spinLoad: boolean;

  constructor(
    private ref: ChangeDetectorRef,
    private loaderService: LoaderService
  ) { }

  ngOnInit(): void {
    this.loaderService.spinLoad.subscribe(
      (loadingStatus) => {
        this.spinLoad = loadingStatus;
        this.ref.detectChanges();
      }
    )
  }

  ngOnDestroy(): void {
    this.loaderService.spinLoad.unsubscribe();
  }

}
