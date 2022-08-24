import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DestaqueDadosComponent } from './destaque-dados.component';

describe('DestaqueDadosComponent', () => {
  let component: DestaqueDadosComponent;
  let fixture: ComponentFixture<DestaqueDadosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DestaqueDadosComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(DestaqueDadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
