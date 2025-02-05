import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardProduccionResponsableComponent } from './card-produccion-responsable.component';

describe('CardProduccionResponsableComponent', () => {
  let component: CardProduccionResponsableComponent;
  let fixture: ComponentFixture<CardProduccionResponsableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardProduccionResponsableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardProduccionResponsableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
