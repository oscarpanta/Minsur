import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PiscoComponent } from './pisco.component';

describe('PiscoComponent', () => {
  let component: PiscoComponent;
  let fixture: ComponentFixture<PiscoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PiscoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PiscoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
