import { Component, Input } from '@angular/core';
import { AppComponent } from '../../app.component';

@Component({
  selector: 'app-destaque-dados',
  templateUrl: './destaque-dados.component.html',
  styleUrls: ['./destaque-dados.component.css'],
})
export class DestaqueDadosComponent {
  @Input() titulo: string = '';
  @Input() ano: string = '';
  @Input() duracao: string = '';
  @Input() extrelas: string = '';
  @Input() sinopse: string = '';
<<<<<<< HEAD
  @Input() destaque: string = '';

  destaqueFavoritado: boolean = false;
=======
  @Input() dstq: string = '';

  dstqFav: boolean = false;
>>>>>>> a512e61c8881ea58c2aeef342ea22491c0abeac9

  constructor(private appComponent: AppComponent) {}
}
