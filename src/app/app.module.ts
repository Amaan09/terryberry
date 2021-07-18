import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';

import { FlexLayoutModule } from '@angular/flex-layout';

import { HeaderComponent } from './shared/components/header/header.component';

import { MatToolbarModule } from '@angular/material/toolbar';
import { LoaderComponent } from './shared/components/loader/loader.component';
import { InMemoryDataService } from './services/in-memory-data/in-memory-data.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, { dataEncapsulation: false }),
    MatToolbarModule,
    FlexLayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
