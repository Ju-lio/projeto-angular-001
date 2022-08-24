import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
<<<<<<< HEAD
import { Perfil } from 'src/app/models/perfil.model';
import { LoginContainerService } from '../../services/login.service';
=======
import { LoginContainerService } from '../login/login.service';
>>>>>>> a512e61c8881ea58c2aeef342ea22491c0abeac9

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
<<<<<<< HEAD
})

export class HomeComponent implements OnInit, OnDestroy {
  usr: string = '';
  inscricao: Subscription | undefined;

  perfilLogado: Perfil[] = [];
=======
  providers: [LoginContainerService],
})
export class HomeComponent implements OnInit, OnDestroy {
  usr: string = '';
  nomPerfil: any;
  srcPerfil: any;
  inscricao: Subscription | undefined;

  perfis = [] as {
    usuario: string;
    src: string;
    usr: string;
  }[];

  perfil!: {
    //@@JSC
    usuario: string;
    src: string;
    usr: string;
  };
>>>>>>> a512e61c8881ea58c2aeef342ea22491c0abeac9

  constructor(
    private route: ActivatedRoute,
    private loginContainerService: LoginContainerService
  ) {
    this.usr = this.route.snapshot.params['usr']; //##JSC
<<<<<<< HEAD
    this.perfilLogado = this.loginContainerService.loadPerfis();
=======
    this.perfis = this.loginContainerService.loadPerfis();
>>>>>>> a512e61c8881ea58c2aeef342ea22491c0abeac9
  }

  ngOnInit(): void {
    this.inscricao = this.route.params.subscribe((params: any) => {
      this.usr = params['usr'];
    });

<<<<<<< HEAD
    this.perfilLogado = this.perfilLogado.filter(perfilLogado => {
      return perfilLogado.usr === this.usr;
    });
=======
    this.perfil = this.perfis.filter(p => p.usr === this.usr)[0];

    this.nomPerfil = this.perfil.usuario; //##JSC
    this.srcPerfil = this.perfil.src; //##JSC
>>>>>>> a512e61c8881ea58c2aeef342ea22491c0abeac9
  }

  ngOnDestroy() {
    this.inscricao?.unsubscribe();
  }
}
