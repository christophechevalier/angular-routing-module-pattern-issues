import { NgModule } from '@angular/core';

import { APP_BASE_HREF } from '@angular/common';

import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

import { SettingsModule } from './settings/settings.module';

import { AppRoutingModule } from './app-routing.module';
import { FrontComponent } from './front/front.component';

@NgModule({
  imports: [BrowserModule, FormsModule, SettingsModule, AppRoutingModule],
  providers: [
    { provide: APP_BASE_HREF, useValue: '' },
  ],
  declarations: [AppComponent, FrontComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
