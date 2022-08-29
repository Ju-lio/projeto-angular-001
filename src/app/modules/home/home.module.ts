import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';

import { HeaderComponent } from 'src/app/components/header/header.component';
import { DestaquesComponent } from 'src/app/components/destaques/destaques.component';
import { DestaqueDadosComponent } from 'src/app/components/destaque-dados/destaque-dados.component';
import { FilmeComponent } from 'src/app/components/filme/filme.component';
import { FilmesContainerComponent } from 'src/app/components/filmes-container/filmes-container.component';
import { FooterComponent } from 'src/app/components/footer/footer.component';

@NgModule({
  //HomeComponent deve ser importado em declarations do HomeModule
  declarations: [
    HomeComponent,
    HeaderComponent,
    DestaquesComponent,
    DestaqueDadosComponent,
    FilmeComponent,
    FilmesContainerComponent,
    FooterComponent,
  ],
  imports: [CommonModule, HomeRoutingModule],
})
export class HomeModule {}
