import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarruselSucursalesComponent } from './carrusel-sucursales.component';

describe('CarruselSucursalesComponent', () => {
  let component: CarruselSucursalesComponent;
  let fixture: ComponentFixture<CarruselSucursalesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CarruselSucursalesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CarruselSucursalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
