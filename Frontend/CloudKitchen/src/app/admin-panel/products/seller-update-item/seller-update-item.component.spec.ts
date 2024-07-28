import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SellerUpdateItemComponent } from './seller-update-item.component';

describe('SellerUpdateItemComponent', () => {
  let component: SellerUpdateItemComponent;
  let fixture: ComponentFixture<SellerUpdateItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SellerUpdateItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SellerUpdateItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
