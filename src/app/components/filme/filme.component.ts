import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-filme',
  templateUrl: './filme.component.html',
  styleUrls: ['./filme.component.css'],
})
export class FilmeComponent {
  @Input() filmeTitulo: string = '';
  @Input() filmeSrc: string = '';
  @Input() filmeAno: string = '';
  @Input() filmeDuracao: string = '';

  constructor() {}
}
