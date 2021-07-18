import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutMeRoutingModule } from './about-me-routing.module';
import { FlexLayoutModule } from '@angular/flex-layout';

import { MyInfoComponent } from './components/my-info/my-info.component';


import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [MyInfoComponent],
  imports: [
    CommonModule,
    AboutMeRoutingModule,
    FlexLayoutModule,
    MatCardModule,
    MatButtonModule,
    MatListModule,
    MatDividerModule,
    MatIconModule
  ],
  exports: [],
})
export class AboutMeModule {}
