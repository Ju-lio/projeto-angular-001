import { Subject, takeUntil } from 'rxjs';
import { Component, OnInit } from '@angular/core';

import { MidiasService } from 'src/app/services/midias.service';
import { Midia } from 'src/app/models/midia.model';
import { Destaque } from 'src/app/enums/destaque.enum';

@Component({
  selector: 'app-destaques',
  templateUrl: './destaques.component.html',
  styleUrls: ['./destaques.component.css'],
})
export class DestaquesComponent implements OnInit {
  readonly DESTAQUE = Destaque.DESTAQUE;
  destaqueIndex: number = 1;
  destaque: string = this.DESTAQUE + this.destaqueIndex.toString();
  clicked: boolean = false;
  series!: Midia[];
  filmes!: Midia[];
  destaques!: Midia[];
  destroy$: Subject<unknown> = new Subject();

  constructor(private midiasService: MidiasService) {}

  changeDestaque(destaque: string) {
    this.destaque = destaque;
    this.clicked = true;
    this.slide();
  }

  ngOnInit() {
    this.getFilmes();
    this.getSeries();
    this.slide();
  }

  getFilmes() {
    this.midiasService
      .getFilmes()
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: response => {
          this.filmes = response ?? [];
          this.getDestaques();
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

  slide() {
    var num: number = parseInt(this.destaque.substring(9, 10));

    if (num == 2) num = -1;

    num += 1;

    setTimeout(() => {
      if (this.clicked) {
        this.clicked = false;
      } else {
        this.destaque = 'destaque-' + num.toString();
        this.slide();
      }
    }, 3000);
  }

  getDestaques() {
    let valor: number;
    const destaques: Midia[] = [];
    for (let i = 0; i < 3; i++) {
      valor = this.getRamdom(0, this.filmes.length - 1);
      if (
        this.filmes[valor] === destaques[i - 1] ||
        this.filmes[valor] === destaques[i - 2]
      ) {
        i--;
      } else {
        destaques.push(this.filmes[valor]);
      }
    }
    this.destaques = destaques;
  }

  getRamdom(min: number = 0, max: number) {
    return Math.floor(Math.random() * (max - min) + min);
  }
}
