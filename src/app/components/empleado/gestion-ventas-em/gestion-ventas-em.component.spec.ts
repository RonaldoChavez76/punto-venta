import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionVentasEmComponent } from './gestion-ventas-em.component';

describe('GestionVentasEmComponent', () => {
  let component: GestionVentasEmComponent;
  let fixture: ComponentFixture<GestionVentasEmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GestionVentasEmComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GestionVentasEmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
