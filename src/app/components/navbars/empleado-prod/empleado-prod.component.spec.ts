import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpleadoProdComponent } from './empleado-prod.component';

describe('EmpleadoProdComponent', () => {
  let component: EmpleadoProdComponent;
  let fixture: ComponentFixture<EmpleadoProdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EmpleadoProdComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EmpleadoProdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
