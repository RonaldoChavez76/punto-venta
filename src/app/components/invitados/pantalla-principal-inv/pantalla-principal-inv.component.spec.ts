import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PantallaPrincipalInvComponent } from './pantalla-principal-inv.component';

describe('PantallaPrincipalInvComponent', () => {
  let component: PantallaPrincipalInvComponent;
  let fixture: ComponentFixture<PantallaPrincipalInvComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PantallaPrincipalInvComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PantallaPrincipalInvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
