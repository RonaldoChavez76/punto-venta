import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarritoVistaComponent } from './carrito-vista.component';

describe('CarritoVistaComponent', () => {
  let component: CarritoVistaComponent;
  let fixture: ComponentFixture<CarritoVistaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CarritoVistaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CarritoVistaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
