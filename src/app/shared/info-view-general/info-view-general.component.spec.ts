import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoViewGeneralComponent } from './info-view-general.component';

describe('InfoViewGeneralComponent', () => {
  let component: InfoViewGeneralComponent;
  let fixture: ComponentFixture<InfoViewGeneralComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfoViewGeneralComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InfoViewGeneralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
