import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Metodologia5sComponent } from './metodologia5s.component';

describe('Metodologia5sComponent', () => {
  let component: Metodologia5sComponent;
  let fixture: ComponentFixture<Metodologia5sComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Metodologia5sComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Metodologia5sComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
