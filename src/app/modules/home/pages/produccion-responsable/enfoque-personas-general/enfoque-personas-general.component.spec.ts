import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnfoquePersonasGeneralComponent } from './enfoque-personas-general.component';

describe('EnfoquePersonasGeneralComponent', () => {
  let component: EnfoquePersonasGeneralComponent;
  let fixture: ComponentFixture<EnfoquePersonasGeneralComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnfoquePersonasGeneralComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EnfoquePersonasGeneralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
