import { Component, Input, ViewChild, ElementRef } from '@angular/core';
import { Midia } from 'src/app/models/midia.model';

import { MidiasService } from 'src/app/services/midias.service';

@Component({
  selector: 'app-filmes-container',
  templateUrl: './filmes-container.component.html',
  styleUrls: ['./filmes-container.component.css'],
  providers: [MidiasService],
})
export class FilmesContainerComponent {
  @ViewChild('aba') abaElement!: ElementRef;
  @Input() containerTitle!: string;
  @Input() midias!: Midia[];

  constructor() {}

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
