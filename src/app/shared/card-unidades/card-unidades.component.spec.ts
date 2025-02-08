import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardUnidadesComponent } from './card-unidades.component';

describe('CardUnidadesComponent', () => {
  let component: CardUnidadesComponent;
  let fixture: ComponentFixture<CardUnidadesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardUnidadesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardUnidadesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
