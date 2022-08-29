import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { Midia } from 'src/app/models/midia.model';

import { FilmesContainerService } from 'src/app/services/filmes-container.service';

@Component({
  selector: 'app-filmes-container',
  templateUrl: './filmes-container.component.html',
  styleUrls: ['./filmes-container.component.css'],
  providers: [FilmesContainerService],
})
export class FilmesContainerComponent implements OnInit {
  @ViewChild('aba') abaElement!: ElementRef;

  @Input() containerTitle: string = '';
  @Input() genre: string = '';
  scrollValue: number = 0;

  midias: Midia[] = [];

  constructor(private filmesContainerService: FilmesContainerService) {}

  ngOnInit() {
    this.midias = this.filmesContainerService.loadFilmes(this.genre);
  }

  getMidia(idx: number, prop: string) {
    switch (prop) {
      case 'titulo':
        return this.midias![idx].titulo;
      case 'src':
        return this.midias![idx].src;
      case 'ano':
        return this.midias![idx].ano;
      case 'duracao':
        return this.midias![idx].duracao;
      default:
        return '';
    }
  }

  nextClick() {
    if (
      this.abaElement.nativeElement.scrollLeft <
      this.abaElement.nativeElement.scrollWidth
    ) {
      this.abaElement.nativeElement.scrollLeft += 200;
    }
  }

  priorClick() {
    if (this.abaElement.nativeElement.scrollLeft > 0) {
      this.abaElement.nativeElement.scrollLeft -= 200;
    }
  }
}
