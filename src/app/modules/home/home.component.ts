import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { Perfil } from 'src/app/models/perfil.model';
import { LoginContainerService } from 'src/app/services/login.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit, OnDestroy {
  id: string = 'usr1';

  perfilLogado: Perfil[] = [];

  perfis: Perfil[] = [];

  inscricao!: Subscription;

  constructor(
    private route: ActivatedRoute,
    private loginContainerService: LoginContainerService
  ) {
    this.id = this.route.snapshot.params['id'];
    this.perfis = this.loginContainerService.loadPerfis();
  }

  ngOnInit(): void {
    this.inscricao = this.route.params.subscribe((params: any) => {
      this.id = params['id'];
    });
    this.perfilLogado = this.perfis.filter(p => {
      return p.id === this.id;
    });
  }

  ngOnDestroy() {
    this.inscricao.unsubscribe();
  }
}
