import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilmesContainerComponent } from './filmes-container.component';

describe('FilmesContainerComponent', () => {
  let component: FilmesContainerComponent;
  let fixture: ComponentFixture<FilmesContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FilmesContainerComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(FilmesContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
