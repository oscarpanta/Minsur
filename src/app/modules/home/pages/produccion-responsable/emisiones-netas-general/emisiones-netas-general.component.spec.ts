import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmisionesNetasGeneralComponent } from './emisiones-netas-general.component';

describe('EmisionesNetasGeneralComponent', () => {
  let component: EmisionesNetasGeneralComponent;
  let fixture: ComponentFixture<EmisionesNetasGeneralComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmisionesNetasGeneralComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmisionesNetasGeneralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
