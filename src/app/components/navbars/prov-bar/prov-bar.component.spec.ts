import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProvBarComponent } from './prov-bar.component';

describe('ProvBarComponent', () => {
  let component: ProvBarComponent;
  let fixture: ComponentFixture<ProvBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProvBarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProvBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
