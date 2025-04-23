import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MicroLibComponent } from './micro-lib.component';

describe('MicroLibComponent', () => {
  let component: MicroLibComponent;
  let fixture: ComponentFixture<MicroLibComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MicroLibComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MicroLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
