import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CanalIntegridadComponent } from './canal-integridad.component';

describe('CanalIntegridadComponent', () => {
  let component: CanalIntegridadComponent;
  let fixture: ComponentFixture<CanalIntegridadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CanalIntegridadComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CanalIntegridadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
