import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PantpriComponent } from './pantpri.component';

describe('PantpriComponent', () => {
  let component: PantpriComponent;
  let fixture: ComponentFixture<PantpriComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PantpriComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PantpriComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
