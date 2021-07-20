import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';

import { FlexLayoutModule } from '@angular/flex-layout';

import { HeaderComponent } from './shared/components/header/header.component';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { LoaderComponent } from './shared/components/loader/loader.component';
import { InMemoryDataService } from './services/in-memory-data/in-memory-data.service';
import { httpInterceptorProviders } from './interceptors/index';

@NgModule({
  declarations: [AppComponent, HeaderComponent, LoaderComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, {
      dataEncapsulation: false,
    }),
    ToastrModule.forRoot(),
    MatToolbarModule,
    MatProgressSpinnerModule,
    FlexLayoutModule,
  ],
  providers: [
    httpInterceptorProviders
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
