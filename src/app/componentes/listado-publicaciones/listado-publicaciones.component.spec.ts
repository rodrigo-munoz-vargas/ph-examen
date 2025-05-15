import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ListadoPublicacionesComponent } from './listado-publicaciones.component';

describe('ListadoPublicacionesComponent', () => {
  let component: ListadoPublicacionesComponent;
  let fixture: ComponentFixture<ListadoPublicacionesComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [ListadoPublicacionesComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ListadoPublicacionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
