import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl, FormGroupDirective } from '@angular/forms';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {


  formGroup: FormGroup;



  SidebarActivo = true;

  precioMinimo;
  precioMaximo;
  fechadesde;
  fechahasta;
  inputGroupSelect;
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.construirFormulario();
  }

  construirFormulario() {
    this.formGroup = this.fb.group({
      preciomin: [],
      preciomax: [],
      desdefecha: [],
      hastafecha: [],
      inputGroupSelect01: []
    });
  }

  clickEnbtnSidebar() {
    this.precioMinimo = this.formGroup.value.preciomin;
    this.precioMaximo = this.formGroup.value.preciomax;
    this.fechadesde = this.formGroup.value.desdefecha;
    this.fechahasta = this.formGroup.value.hastafecha;
    this.inputGroupSelect = this.formGroup.value.inputGroupSelect01;

    console.log(this.formGroup.value);
    console.log(this.precioMinimo, this.precioMaximo, this.fechadesde , this.fechahasta , this.inputGroupSelect);

    if (this.precioMinimo != null || this.precioMaximo != null || this.fechadesde != null || this.fechahasta != null || this.inputGroupSelect != null) {
      console.log('hay algo que no es null');
    }
  }
}
