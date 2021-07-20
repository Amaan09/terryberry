import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutMeRoutingModule } from './about-me-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';


import { MyInfoComponent } from './components/my-info/my-info.component';

import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';

@NgModule({
  declarations: [
    MyInfoComponent
  ],
  imports: [
    CommonModule,
    AboutMeRoutingModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    MatCardModule,
    MatButtonModule,
    MatInputModule
  ],
  exports: [],
})
export class AboutMeModule {}
