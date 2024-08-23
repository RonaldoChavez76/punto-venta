import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserProfileProvComponent } from './user-profile-prov.component';

describe('UserProfileProvComponent', () => {
  let component: UserProfileProvComponent;
  let fixture: ComponentFixture<UserProfileProvComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UserProfileProvComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UserProfileProvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
