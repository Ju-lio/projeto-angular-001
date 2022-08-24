import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginComponent } from './login.component';
<<<<<<< HEAD
import { LoginContainerService } from '../../services/login.service';
=======
import { LoginContainerService } from './login.service';
>>>>>>> a512e61c8881ea58c2aeef342ea22491c0abeac9

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LoginComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
