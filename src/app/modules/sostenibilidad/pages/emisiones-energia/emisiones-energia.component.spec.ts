import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmisionesEnergiaComponent } from './emisiones-energia.component';

describe('EmisionesEnergiaComponent', () => {
  let component: EmisionesEnergiaComponent;
  let fixture: ComponentFixture<EmisionesEnergiaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmisionesEnergiaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmisionesEnergiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
