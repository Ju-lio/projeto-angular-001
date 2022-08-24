import { Component, OnInit } from '@angular/core';

<<<<<<< HEAD
import { FilmesContainerService } from 'src/app/services/filmes-container.service';
import { Midia } from 'src/app/models/midia.model';

=======
>>>>>>> a512e61c8881ea58c2aeef342ea22491c0abeac9
@Component({
  selector: 'app-destaques',
  templateUrl: './destaques.component.html',
  styleUrls: ['./destaques.component.css'],
})
export class DestaquesComponent implements OnInit {
<<<<<<< HEAD
  destaque: string = 'destaque-1';
  clicked: boolean = false;
  midia: Midia[] = [];

  destaques: number[] = [];

  constructor(private filmesContainerService: FilmesContainerService) {}

  changeDestaque(destaque: string) {
    this.destaque = destaque;
=======
  destaque: string = 'dstq-1';
  clicked: boolean = false;

  changeDestaque(dstq: string) {
    this.destaque = dstq;
>>>>>>> a512e61c8881ea58c2aeef342ea22491c0abeac9
    this.clicked = true;
    this.slide();
  }

<<<<<<< HEAD
  ngOnInit() {
    this.getDestaques();
    this.slide();
    this.midia = this.filmesContainerService.loadFilmes('filme')
  }

  slide() {
    var num: number = parseInt(this.destaque.substring(9, 10));
=======
  constructor() {}

  ngOnInit() {
    this.slide();
  }

  slide() {
    var num: number = parseInt(this.destaque.substring(5, 6));
>>>>>>> a512e61c8881ea58c2aeef342ea22491c0abeac9

    if (num == 3) num = 0;

    num += 1;

    setTimeout(() => {
      if (this.clicked) {
        this.clicked = false;
      } else {
<<<<<<< HEAD
        this.destaque = 'destaque-' + num.toString();
=======
        this.destaque = 'dstq-' + num.toString();
>>>>>>> a512e61c8881ea58c2aeef342ea22491c0abeac9
        this.slide();
      }
    }, 3000);
  }
<<<<<<< HEAD

  getDestaques() {
    let valor: number;
    const destaques: number[] = [];
    for (let i = 0; i < 3; i++) {
      valor = this.getRamdom(0,15);
      if((valor === destaques[i-1]) || (valor === destaques[i-2])) {
        i--
      } else {
        destaques.push(valor)
      }
    }
    this.destaques = destaques;
    console.log(this.destaques);
  }

  getRamdom(min:number = 0, max:number) {
    return Math.floor(Math.random() * (max - min) + min);
  }
=======
>>>>>>> a512e61c8881ea58c2aeef342ea22491c0abeac9
}
