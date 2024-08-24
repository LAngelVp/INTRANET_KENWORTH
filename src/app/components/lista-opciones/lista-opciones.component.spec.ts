import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaOpcionesComponent } from './lista-opciones.component';

describe('ListaOpcionesComponent', () => {
  let component: ListaOpcionesComponent;
  let fixture: ComponentFixture<ListaOpcionesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListaOpcionesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListaOpcionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
