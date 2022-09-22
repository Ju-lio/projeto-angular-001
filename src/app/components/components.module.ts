import { PageNotFoundComponent } from 'src/app/components/page-not-found/page-not-found.component';
import { FooterComponent } from 'src/app/components/footer/footer.component';
import { FilmesContainerComponent } from 'src/app/components/filmes-container/filmes-container.component';
import { FilmeComponent } from 'src/app/components/filme/filme.component';
import { DestaqueDadosComponent } from 'src/app/components/destaque-dados/destaque-dados.component';
import { DestaquesComponent } from 'src/app/components/destaques/destaques.component';
import { HeaderComponent } from 'src/app/components/header/header.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    HeaderComponent,
    DestaquesComponent,
    DestaqueDadosComponent,
    FilmeComponent,
    FilmesContainerComponent,
    FooterComponent,
    PageNotFoundComponent,
  ],
  exports: [
    HeaderComponent,
    DestaquesComponent,
    DestaqueDadosComponent,
    FilmeComponent,
    FilmesContainerComponent,
    FooterComponent,
    PageNotFoundComponent,
  ],
  imports: [CommonModule, RouterModule, HttpClientModule],
})
export class ComponentsModule {}
