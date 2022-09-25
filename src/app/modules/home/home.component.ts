import { Component, OnInit } from '@angular/core';

import { Subject, takeUntil } from 'rxjs';
import { Midia } from 'src/app/models/midia.model';
import { MidiasService } from 'src/app/services/midias.service';
import { PerfisService } from 'src/app/services/perfis.service';
import { ActivatedRoute } from '@angular/router';
import { Perfil } from 'src/app/models/perfil.model';
import { TipoMidia } from 'src/app/enums/tipoMidia.enum';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  perfilLogado!: Perfil;
  filmes!: Midia[];
  series!: Midia[];
  destroy$: Subject<unknown> = new Subject();
  readonly FILME = TipoMidia.FILME;
  readonly SERIE = TipoMidia.SERIE;

  constructor(
    private activatedRoute: ActivatedRoute,
    private perfisService: PerfisService,
    private midiasService: MidiasService
  ) {}

  ngOnInit(): void {
    this.getPerfis();
    this.getFilmes();
    this.getSeries();
  }

  getPerfis() {
    this.perfisService
      .getPerfis()
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: response => {
          const perfis = response?.body ?? [];
          this.setPerfilLogado(perfis);
        },
      });
  }

  getFilmes() {
    this.midiasService
      .getFilmes()
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: response => {
          this.filmes = response ?? [];
        },
      });
  }

  getSeries() {
    this.midiasService
      .getSeries()
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: response => {
          this.series = response ?? [];
        },
      });
  }

  getMidiasTipo(tipo: string): Midia[] {
    switch (tipo) {
      case 'filme':
        return this.filmes;
      case 'serie':
        return this.series;
      default:
        return [];
    }
  }

  setPerfilLogado(perfis: Perfil[]) {
    const idPerfil = this.activatedRoute.snapshot.params['id'];
    this.perfilLogado =
      perfis.find(perfil => perfil.id === idPerfil) ?? ({} as Perfil);
  }
}
