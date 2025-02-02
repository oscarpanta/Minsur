import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnfoquePersonasComponent } from './enfoque-personas.component';

describe('EnfoquePersonasComponent', () => {
  let component: EnfoquePersonasComponent;
  let fixture: ComponentFixture<EnfoquePersonasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnfoquePersonasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EnfoquePersonasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
