import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AguaBiodiversidadComponent } from './agua-biodiversidad.component';

describe('AguaBiodiversidadComponent', () => {
  let component: AguaBiodiversidadComponent;
  let fixture: ComponentFixture<AguaBiodiversidadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AguaBiodiversidadComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AguaBiodiversidadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
