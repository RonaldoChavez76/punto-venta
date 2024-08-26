import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientProdComponent } from './client-prod.component';

describe('ClientProdComponent', () => {
  let component: ClientProdComponent;
  let fixture: ComponentFixture<ClientProdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ClientProdComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ClientProdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
