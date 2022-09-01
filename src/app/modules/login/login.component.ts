import { Subject, takeUntil } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { PerfisService } from 'src/app/services/perfis.service';
import { Perfil } from 'src/app/models/perfil.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  perfis!: Perfil[];

  destroy$: Subject<unknown> = new Subject();

  constructor(private perfisService: PerfisService) {}

  ngOnInit() {
    this.getPerfis();
  }

  getPerfis() {
    this.perfisService
      .getPerfis()
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: response => {
          this.perfis = response?.body ?? [];
        },
      });
  }
}
