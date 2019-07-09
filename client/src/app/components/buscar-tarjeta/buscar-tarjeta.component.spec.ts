import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuscarTarjetaComponent } from './buscar-tarjeta.component';

describe('BuscarTarjetaComponent', () => {
  let component: BuscarTarjetaComponent;
  let fixture: ComponentFixture<BuscarTarjetaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuscarTarjetaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuscarTarjetaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
