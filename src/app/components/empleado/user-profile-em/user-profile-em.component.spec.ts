import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserProfileEmComponent } from './user-profile-em.component';

describe('UserProfileEmComponent', () => {
  let component: UserProfileEmComponent;
  let fixture: ComponentFixture<UserProfileEmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UserProfileEmComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UserProfileEmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
