import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminProdComponent } from './admin-prod.component';

describe('AdminProdComponent', () => {
  let component: AdminProdComponent;
  let fixture: ComponentFixture<AdminProdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AdminProdComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdminProdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
