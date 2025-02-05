import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardSostenibilidadComponent } from './card-sostenibilidad.component';

describe('CardSostenibilidadComponent', () => {
  let component: CardSostenibilidadComponent;
  let fixture: ComponentFixture<CardSostenibilidadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardSostenibilidadComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardSostenibilidadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
