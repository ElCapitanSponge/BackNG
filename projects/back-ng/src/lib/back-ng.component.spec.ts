import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BackNGComponent } from './back-ng.component';

describe('BackNGComponent', () => {
  let component: BackNGComponent;
  let fixture: ComponentFixture<BackNGComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BackNGComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BackNGComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
