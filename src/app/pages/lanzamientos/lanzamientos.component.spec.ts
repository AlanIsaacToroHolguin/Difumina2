import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LanzamientosComponent } from './lanzamientos.component';

describe('LanzamientosComponent', () => {
  let component: LanzamientosComponent;
  let fixture: ComponentFixture<LanzamientosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LanzamientosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LanzamientosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
