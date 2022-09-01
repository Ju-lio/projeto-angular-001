import { Injectable } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
import { Perfil } from '../models/perfil.model';
import { of } from 'rxjs';

@Injectable({ providedIn: 'root' }) //Esta anotação faz com que o Angular gerencie os locais em que o serviço é injetado, não precisando informar nem ao componente, nem ao módulo
export class PerfisService {
  getPerfis() {
    const perfis: Perfil[] = [];

    perfis.push({
      id: 'usr1',
      nome: 'Perfil 1',
      src: '/assets/perfil-01.png',
    });

    perfis.push({
      id: 'usr2',
      nome: 'Perfil 2',
      src: '/assets/perfil-02.png',
    });

    perfis.push({
      id: 'usr3',
      nome: 'Perfil 3',
      src: '/assets/perfil-03.png',
    });

    perfis.push({
      id: 'usr4',
      nome: 'Perfil 4',
      src: '/assets/perfil-04.png',
    });

    return of(new HttpResponse<Perfil[]>({ body: perfis }));
  }
}
