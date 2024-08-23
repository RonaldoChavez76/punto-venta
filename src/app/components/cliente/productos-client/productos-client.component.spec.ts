import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductosClientComponent } from './productos-client.component';

describe('ProductosClientComponent', () => {
  let component: ProductosClientComponent;
  let fixture: ComponentFixture<ProductosClientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProductosClientComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProductosClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
