import { ComponentFixture, TestBed } from '@angular/core/testing';


import { AdminHomeComponent } from './admin-home.component';
import { FoodPageComponent } from '../food-page/food-page.component';


describe('HomeComponent', () => {
  let component: AdminHomeComponent;
  let fixture: ComponentFixture<AdminHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AdminHomeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
