import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PantallaPrincipalClienteComponent } from './pantalla-principal-cliente.component';

describe('PantallaPrincipalClienteComponent', () => {
  let component: PantallaPrincipalClienteComponent;
  let fixture: ComponentFixture<PantallaPrincipalClienteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PantallaPrincipalClienteComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PantallaPrincipalClienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
