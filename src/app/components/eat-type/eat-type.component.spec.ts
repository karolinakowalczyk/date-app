import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EatTypeComponent } from './eat-type.component';

describe('EatTypeComponent', () => {
  let component: EatTypeComponent;
  let fixture: ComponentFixture<EatTypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EatTypeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EatTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
