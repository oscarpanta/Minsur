import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmisionesNetasComponent } from './emisiones-netas.component';

describe('EmisionesNetasComponent', () => {
  let component: EmisionesNetasComponent;
  let fixture: ComponentFixture<EmisionesNetasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmisionesNetasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmisionesNetasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
