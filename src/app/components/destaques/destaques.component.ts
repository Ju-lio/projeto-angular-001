import { Subject, takeUntil } from 'rxjs';
import { Component, OnInit } from '@angular/core';

import { MidiasService } from 'src/app/services/midias.service';
import { Midia } from 'src/app/models/midia.model';

@Component({
  selector: 'app-destaques',
  templateUrl: './destaques.component.html',
  styleUrls: ['./destaques.component.css'],
})
export class DestaquesComponent implements OnInit {
  destaque: string = 'destaque-1';
  destaqueIndex: number = 1;
  clicked: boolean = false;
  midias!: Midia[];
  destaques!: number[];
  destroy$: Subject<unknown> = new Subject();

  constructor(private midiasService: MidiasService) {}

  changeDestaque(destaque: string) {
    this.destaque = destaque;
    this.clicked = true;
    this.slide();
  }

  ngOnInit() {
    this.getMidias();
    this.slide();
  }
  getMidias() {
    this.midiasService
      .getMidias()
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: response => {
          this.midias = response ?? [];
          this.getDestaques();
        },
      });
  }

  slide() {
    var num: number = parseInt(this.destaque.substring(9, 10));

    if (num == 3) num = 0;

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
    const destaques: number[] = [];
    for (let i = 0; i < 3; i++) {
      valor = this.getRamdom(0, this.midias.length - 1);
      if (valor === destaques[i - 1] || valor === destaques[i - 2]) {
        i--;
      } else {
        destaques.push(valor);
      }
    }
    this.destaques = destaques;
  }

  getRamdom(min: number = 0, max: number) {
    return Math.floor(Math.random() * (max - min) + min);
  }
}
