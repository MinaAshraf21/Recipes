import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategorymealsComponent } from './categorymeals.component';

describe('CategorymealsComponent', () => {
  let component: CategorymealsComponent;
  let fixture: ComponentFixture<CategorymealsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CategorymealsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CategorymealsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
