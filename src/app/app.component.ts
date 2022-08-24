import { Component, OnInit } from '@angular/core';
<<<<<<< HEAD
import { Perfil } from './models/perfil.model';
=======
import { Perfil } from './models/models.model';
>>>>>>> a512e61c8881ea58c2aeef342ea22491c0abeac9

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'project-movies-site';

  login: boolean = true;

<<<<<<< HEAD
  perfis: Perfil[] = [];
=======
  perfis?: Perfil[];
>>>>>>> a512e61c8881ea58c2aeef342ea22491c0abeac9

  ngOnInit(): void {
    this.loadPerfis();
  }

  loadPerfis() {
<<<<<<< HEAD
    this.perfis.push({
      usuario: 'Perfil 1',
      src: '../assets/perfil-01.png',
      usr: 'usr1'
    });

    this.perfis.push({
      usuario: 'Perfil 2',
      src: '../assets/perfil-02.png',
      usr: 'usr2'
    });

    this.perfis.push({
      usuario: 'Perfil 3',
      src: '../assets/perfil-03.png',
      usr: 'usr3'
=======
    this.perfis?.push({
      usuario: 'Perfil 1',
      src: '../assets/perfil-01.png',
    });

    this.perfis?.push({
      usuario: 'Perfil 2',
      src: '../assets/perfil-02.png',
    });

    this.perfis?.push({
      usuario: 'Perfil 3',
      src: '../assets/perfil-03.png',
>>>>>>> a512e61c8881ea58c2aeef342ea22491c0abeac9
    });

    this.perfis?.push({
      usuario: 'Perfil 4',
      src: '../assets/perfil-04.png',
<<<<<<< HEAD
      usr: 'usr4'
=======
>>>>>>> a512e61c8881ea58c2aeef342ea22491c0abeac9
    });

    return this.perfis;
  }
}
