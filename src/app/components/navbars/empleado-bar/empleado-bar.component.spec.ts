import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpleadoBarComponent } from './empleado-bar.component';

describe('EmpleadoBarComponent', () => {
  let component: EmpleadoBarComponent;
  let fixture: ComponentFixture<EmpleadoBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EmpleadoBarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EmpleadoBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
