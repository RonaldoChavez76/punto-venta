import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarritoClienteVistaComponent } from './carrito-cliente-vista.component';

describe('CarritoClienteVistaComponent', () => {
  let component: CarritoClienteVistaComponent;
  let fixture: ComponentFixture<CarritoClienteVistaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CarritoClienteVistaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CarritoClienteVistaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
