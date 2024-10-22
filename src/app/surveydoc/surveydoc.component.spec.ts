import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SurveydocComponent } from './surveydoc.component';

describe('SurveydocComponent', () => {
  let component: SurveydocComponent;
  let fixture: ComponentFixture<SurveydocComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SurveydocComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SurveydocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
