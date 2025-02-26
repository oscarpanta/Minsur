import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonReporteComponent } from './button-reporte.component';

describe('ButtonReporteComponent', () => {
  let component: ButtonReporteComponent;
  let fixture: ComponentFixture<ButtonReporteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ButtonReporteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ButtonReporteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
