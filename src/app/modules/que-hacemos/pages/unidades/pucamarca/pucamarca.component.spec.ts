import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PucamarcaComponent } from './pucamarca.component';

describe('PucamarcaComponent', () => {
  let component: PucamarcaComponent;
  let fixture: ComponentFixture<PucamarcaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PucamarcaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PucamarcaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
