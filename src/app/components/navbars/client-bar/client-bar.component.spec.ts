import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientBarComponent } from './client-bar.component';

describe('ClientBarComponent', () => {
  let component: ClientBarComponent;
  let fixture: ComponentFixture<ClientBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ClientBarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ClientBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
