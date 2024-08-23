import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserProfileCliComponent } from './user-profile-cli.component';

describe('UserProfileCliComponent', () => {
  let component: UserProfileCliComponent;
  let fixture: ComponentFixture<UserProfileCliComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UserProfileCliComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UserProfileCliComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
