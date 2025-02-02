import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CuidadoAmbientalComponent } from './cuidado-ambiental.component';

describe('CuidadoAmbientalComponent', () => {
  let component: CuidadoAmbientalComponent;
  let fixture: ComponentFixture<CuidadoAmbientalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CuidadoAmbientalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CuidadoAmbientalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
