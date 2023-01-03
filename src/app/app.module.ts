import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { QRCodeModule } from 'angularx-qrcode';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, RouterModule, QRCodeModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
