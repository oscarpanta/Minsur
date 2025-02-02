import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EticaCumplimientoComponent } from './etica-cumplimiento.component';

describe('EticaCumplimientoComponent', () => {
  let component: EticaCumplimientoComponent;
  let fixture: ComponentFixture<EticaCumplimientoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EticaCumplimientoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EticaCumplimientoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
