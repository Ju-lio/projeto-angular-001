import { Component, OnInit } from '@angular/core';
<<<<<<< HEAD
import { LoginContainerService } from '../../services/login.service';
import { Perfil } from '../../models/perfil.model';
=======
import { LoginContainerService } from './login.service';
import { Perfil } from '../../models/models.model';
>>>>>>> a512e61c8881ea58c2aeef342ea22491c0abeac9

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
<<<<<<< HEAD
=======
  providers: [LoginContainerService],
>>>>>>> a512e61c8881ea58c2aeef342ea22491c0abeac9
})
export class LoginComponent implements OnInit {
  perfis!: Perfil[];

  constructor(private loginContainerService: LoginContainerService) {}

  ngOnInit(): void {
    this.perfis = this.loginContainerService.loadPerfis();
  }
}
