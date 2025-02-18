import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllmealsComponent } from './allmeals.component';

describe('AllmealsComponent', () => {
  let component: AllmealsComponent;
  let fixture: ComponentFixture<AllmealsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AllmealsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllmealsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
