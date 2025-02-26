import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonDescargaComponent } from './button-descargar.component';

describe('ButtonDescargarComponent', () => {
  let component: ButtonDescargaComponent;
  let fixture: ComponentFixture<ButtonDescargaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ButtonDescargaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ButtonDescargaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
