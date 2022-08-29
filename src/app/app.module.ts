import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { routing } from './app.routing';
import { HomeModule } from './modules/home/home.module';
import { LoginModule } from './modules/login/login.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, routing, LoginModule, HomeModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
