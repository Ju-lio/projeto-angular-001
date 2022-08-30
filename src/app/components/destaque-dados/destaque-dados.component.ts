import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-destaque-dados',
  templateUrl: './destaque-dados.component.html',
  styleUrls: ['./destaque-dados.component.css'],
})
export class DestaqueDadosComponent {
  @Input() titulo: string = '';
  @Input() ano: string = '';
  @Input() duracao: string = '';
  @Input() sinopse: string = '';

  destaqueFavoritado: boolean = false;

  constructor() {}
}
