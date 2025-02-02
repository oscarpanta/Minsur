import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RelevosComponent } from './relevos.component';

describe('RelevosComponent', () => {
  let component: RelevosComponent;
  let fixture: ComponentFixture<RelevosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RelevosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RelevosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
