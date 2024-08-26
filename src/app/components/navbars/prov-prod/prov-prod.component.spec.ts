import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProvProdComponent } from './prov-prod.component';

describe('ProvProdComponent', () => {
  let component: ProvProdComponent;
  let fixture: ComponentFixture<ProvProdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProvProdComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProvProdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
