import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EconomiaCircularComponent } from './economia-circular.component';

describe('EconomiaCircularComponent', () => {
  let component: EconomiaCircularComponent;
  let fixture: ComponentFixture<EconomiaCircularComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EconomiaCircularComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EconomiaCircularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
