import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AltaGerenciaComponent } from './alta-gerencia.component';

describe('AltaGerenciaComponent', () => {
  let component: AltaGerenciaComponent;
  let fixture: ComponentFixture<AltaGerenciaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AltaGerenciaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AltaGerenciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
