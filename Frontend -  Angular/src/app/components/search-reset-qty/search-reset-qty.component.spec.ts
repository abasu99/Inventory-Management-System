import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchResetQtyComponent } from './search-reset-qty.component';

describe('SearchResetQtyComponent', () => {
  let component: SearchResetQtyComponent;
  let fixture: ComponentFixture<SearchResetQtyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchResetQtyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SearchResetQtyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
