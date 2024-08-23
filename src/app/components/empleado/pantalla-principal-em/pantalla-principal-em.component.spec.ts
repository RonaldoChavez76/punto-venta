import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PantallaPrincipalEmComponent } from './pantalla-principal-em.component';

describe('PantallaPrincipalEmComponent', () => {
  let component: PantallaPrincipalEmComponent;
  let fixture: ComponentFixture<PantallaPrincipalEmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PantallaPrincipalEmComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PantallaPrincipalEmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
