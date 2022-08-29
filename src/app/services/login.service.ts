import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' }) //Esta anotação faz com que o Angular gerencie os locais em que o serviço é injetado, não precisando informar nem ao componente, nem ao módulo
export class LoginContainerService {
  loadPerfis() {
    const perfis = [] as {
      usuario: string;
      src: string;
      usr: string;
    }[];

    perfis.push({
      usuario: 'Perfil 1',
      src: '/assets/perfil-01.png',
      usr: 'usr1',
    });

    perfis.push({
      usuario: 'Perfil 2',
      src: '/assets/perfil-02.png',
      usr: 'usr2',
    });

    perfis.push({
      usuario: 'Perfil 3',
      src: '/assets/perfil-03.png',
      usr: 'usr3',
    });

    perfis.push({
      usuario: 'Perfil 4',
      src: '/assets/perfil-04.png',
      usr: 'usr4',
    });

    return perfis;
  }
}
