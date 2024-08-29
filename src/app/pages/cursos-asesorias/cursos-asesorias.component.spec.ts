import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CursosAsesoriasComponent } from './cursos-asesorias.component';

describe('CursosAsesoriasComponent', () => {
  let component: CursosAsesoriasComponent;
  let fixture: ComponentFixture<CursosAsesoriasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CursosAsesoriasComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CursosAsesoriasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
