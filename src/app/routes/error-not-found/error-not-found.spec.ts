import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ErrorNotFound } from './error-not-found';

describe('ErrorNotFound', () => {
  let component: ErrorNotFound;
  let fixture: ComponentFixture<ErrorNotFound>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ErrorNotFound]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ErrorNotFound);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
