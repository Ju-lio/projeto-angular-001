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
  usr: string = '';
  inscricao: Subscription | undefined;

  perfilLogado: Perfil[] = [];

  constructor(
    private route: ActivatedRoute,
    private loginContainerService: LoginContainerService
  ) {
    this.usr = this.route.snapshot.params['usr']; //##JSC
    this.perfilLogado = this.loginContainerService.loadPerfis();
  }

  ngOnInit(): void {
    this.inscricao = this.route.params.subscribe((params: any) => {
      this.usr = params['usr'];
    });

    this.perfilLogado = this.perfilLogado.filter(perfilLogado => {
      return perfilLogado.usr === this.usr;
    });
  }

  ngOnDestroy() {
    this.inscricao?.unsubscribe();
  }
}
