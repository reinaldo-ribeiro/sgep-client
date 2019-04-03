import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioExpProfComponent } from './formulario-exp-prof.component';

describe('FormularioExpProfComponent', () => {
  let component: FormularioExpProfComponent;
  let fixture: ComponentFixture<FormularioExpProfComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormularioExpProfComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormularioExpProfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
