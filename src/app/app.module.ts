import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { routing } from './app.routing';

import { HeaderComponent } from './components/header/header.component';
import { DestaquesComponent } from './components/destaques/destaques.component';
import { DestaqueDadosComponent } from './components/destaque-dados/destaque-dados.component';
import { FilmeComponent } from './components/filme/filme.component';
import { FilmesContainerComponent } from './components/filmes-container/filmes-container.component';
import { FooterComponent } from './components/footer/footer.component';

import { LoginComponent } from './modules/login/login.component';
import { HomeComponent } from './modules/home/home.component';

//@@JSC

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DestaquesComponent,
    DestaqueDadosComponent,
    FilmeComponent,
    FilmesContainerComponent,
    FooterComponent,
    LoginComponent,
    HomeComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, routing],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
