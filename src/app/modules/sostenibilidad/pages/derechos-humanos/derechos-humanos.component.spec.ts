import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DerechosHumanosComponent } from './derechos-humanos.component';

describe('DerechosHumanosComponent', () => {
  let component: DerechosHumanosComponent;
  let fixture: ComponentFixture<DerechosHumanosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DerechosHumanosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DerechosHumanosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
