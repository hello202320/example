import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasequestionComponent } from './basequestion.component';

describe('BasequestionComponent', () => {
  let component: BasequestionComponent;
  let fixture: ComponentFixture<BasequestionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BasequestionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BasequestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
