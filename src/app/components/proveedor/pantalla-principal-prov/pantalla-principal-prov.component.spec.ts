import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PantallaPrincipalProvComponent } from './pantalla-principal-prov.component';

describe('PantallaPrincipalProvComponent', () => {
  let component: PantallaPrincipalProvComponent;
  let fixture: ComponentFixture<PantallaPrincipalProvComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PantallaPrincipalProvComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PantallaPrincipalProvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
