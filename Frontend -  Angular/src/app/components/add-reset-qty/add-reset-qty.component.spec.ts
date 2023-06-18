import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddResetQtyComponent } from './add-reset-qty.component';

describe('AddResetQtyComponent', () => {
  let component: AddResetQtyComponent;
  let fixture: ComponentFixture<AddResetQtyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddResetQtyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddResetQtyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
