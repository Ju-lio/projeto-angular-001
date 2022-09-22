import { Component, OnInit } from '@angular/core';

import { Subject, takeUntil } from 'rxjs';
import { Midia } from 'src/app/models/midia.model';
import { MidiasService } from 'src/app/services/midias.service';
import { PerfisService } from 'src/app/services/perfis.service';
import { ActivatedRoute } from '@angular/router';
import { Perfil } from 'src/app/models/perfil.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  perfilLogado!: Perfil;

  midias!: Midia[];

  destroy$: Subject<unknown> = new Subject();

  constructor(
    private activatedRoute: ActivatedRoute,
    private perfisService: PerfisService,
    private midiasService: MidiasService
  ) {}

  ngOnInit(): void {
    this.getPerfis();
    this.getMidias();
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

  getMidias() {
    this.midiasService
      .getMidias()
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: response => {
          this.midias = response ?? [];
          console.log(response);
        },
      });
  }

  getMidiasTipo(tipo: string) {
    return this.midias?.filter(midia => midia.tipo === tipo);
  }

  setPerfilLogado(perfis: Perfil[]) {
    const idPerfil = this.activatedRoute.snapshot.params['id'];
    this.perfilLogado =
      perfis.find(perfil => perfil.id === idPerfil) ?? ({} as Perfil);
  }
}
