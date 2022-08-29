import { Component, OnInit } from '@angular/core';

import { FilmesContainerService } from 'src/app/services/filmes-container.service';
import { Midia } from 'src/app/models/midia.model';

@Component({
  selector: 'app-destaques',
  templateUrl: './destaques.component.html',
  styleUrls: ['./destaques.component.css'],
})
export class DestaquesComponent implements OnInit {
  destaque: string = 'destaque-1';
  clicked: boolean = false;
  midia: Midia[] = [];

  destaques: number[] = [];

  constructor(private filmesContainerService: FilmesContainerService) {}

  changeDestaque(destaque: string) {
    this.destaque = destaque;
    this.clicked = true;
    this.slide();
  }

  ngOnInit() {
    this.midia = this.filmesContainerService.loadFilmes('filme');
    this.getDestaques();
    this.slide();
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
      valor = this.getRamdom(0, this.midia.length);
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
