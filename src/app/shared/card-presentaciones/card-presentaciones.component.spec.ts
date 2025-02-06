import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardPresentacionesComponent } from './card-presentaciones.component';

describe('CardPresentacionesComponent', () => {
  let component: CardPresentacionesComponent;
  let fixture: ComponentFixture<CardPresentacionesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardPresentacionesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardPresentacionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
