import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TalentoComponent } from './talento.component';

describe('TalentoComponent', () => {
  let component: TalentoComponent;
  let fixture: ComponentFixture<TalentoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TalentoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TalentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
