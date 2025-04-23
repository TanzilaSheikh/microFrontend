import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MicrofrontendLibraryComponent } from './microfrontend-library.component';

describe('MicrofrontendLibraryComponent', () => {
  let component: MicrofrontendLibraryComponent;
  let fixture: ComponentFixture<MicrofrontendLibraryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MicrofrontendLibraryComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MicrofrontendLibraryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
