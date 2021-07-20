import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutMeRoutingModule } from './about-me-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';

import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatIconModule } from '@angular/material/icon';

import { MyInfoComponent } from './components/my-info/my-info.component';
import { ViewInfoComponent } from './components/widgets/view-info/view-info.component';
import { EditInfoComponent } from './components/widgets/edit-info/edit-info.component';

@NgModule({
  declarations: [MyInfoComponent, ViewInfoComponent, EditInfoComponent],
  imports: [
    CommonModule,
    AboutMeRoutingModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    MatCardModule,
    MatButtonModule,
    MatInputModule,
    MatButtonToggleModule,
    MatIconModule
  ],
  exports: [],
})
export class AboutMeModule {}
