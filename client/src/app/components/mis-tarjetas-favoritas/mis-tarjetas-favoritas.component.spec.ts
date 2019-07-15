import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MisTarjetasFavoritasComponent } from './mis-tarjetas-favoritas.component';

describe('MisTarjetasFavoritasComponent', () => {
  let component: MisTarjetasFavoritasComponent;
  let fixture: ComponentFixture<MisTarjetasFavoritasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MisTarjetasFavoritasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MisTarjetasFavoritasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
