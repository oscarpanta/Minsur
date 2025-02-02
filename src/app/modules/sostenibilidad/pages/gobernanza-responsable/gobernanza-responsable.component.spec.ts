import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GobernanzaResponsableComponent } from './gobernanza-responsable.component';

describe('GobernanzaResponsableComponent', () => {
  let component: GobernanzaResponsableComponent;
  let fixture: ComponentFixture<GobernanzaResponsableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GobernanzaResponsableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GobernanzaResponsableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
