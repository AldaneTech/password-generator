import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegenerateIconComponent } from './regenerate-icon.component';

describe('RegenerateIconComponent', () => {
  let component: RegenerateIconComponent;
  let fixture: ComponentFixture<RegenerateIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RegenerateIconComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegenerateIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
