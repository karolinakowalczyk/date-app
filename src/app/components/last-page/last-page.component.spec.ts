import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LastPageComponent } from './last-page.component';

describe('LastPageComponent', () => {
  let component: LastPageComponent;
  let fixture: ComponentFixture<LastPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LastPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LastPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
