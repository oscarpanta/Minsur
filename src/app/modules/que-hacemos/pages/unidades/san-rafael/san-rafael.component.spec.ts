import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SanRafaelComponent } from './san-rafael.component';

describe('SanRafaelComponent', () => {
  let component: SanRafaelComponent;
  let fixture: ComponentFixture<SanRafaelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SanRafaelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SanRafaelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
