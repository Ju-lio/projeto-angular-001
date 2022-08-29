import { Component, OnInit } from '@angular/core';
import { LoginContainerService } from 'src/app/services/login.service';
import { Perfil } from 'src/app/models/perfil.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  perfis!: Perfil[];

  constructor(private loginContainerService: LoginContainerService) {}

  ngOnInit(): void {
    this.perfis = this.loginContainerService.loadPerfis();
  }
}
