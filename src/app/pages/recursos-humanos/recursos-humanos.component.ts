import { Component, OnInit } from '@angular/core';
import { CarruselSucursalesComponent } from '../../components/carrusel-sucursales/carrusel-sucursales.component';
import { CumpleañerosService } from '../../servicios/cumpleañeros.service';
import { EmpleadosService } from '../../servicios/empleados.service';
import { EmpleadosModel } from '../../models/empleados-model';
import { TablaContenidoComponent } from "../../components/tabla-contenido/tabla-contenido.component";
import { AntiguedadesComponent } from "../../components/antiguedades/antiguedades.component";

@Component({
  selector: 'app-recursos-humanos',
  standalone: true,
  imports: [
    CarruselSucursalesComponent,
    TablaContenidoComponent,
    AntiguedadesComponent
],
  templateUrl: './recursos-humanos.component.html',
  styleUrl: './recursos-humanos.component.sass'
})
export class RecursosHumanosComponent implements OnInit{

  lista_cumple : any[] = [];
  lista_empleados : EmpleadosModel[] = [];

  constructor(
    private cumpleañeros : CumpleañerosService,
    private empleados : EmpleadosService
    ){}

  ngOnInit(): void {
    this.cumpleañeros.mostrar_cumpleañeros().subscribe(data_cumpleaños => {
      return this.lista_cumple = data_cumpleaños;
    });
    this.empleados.obtener_empleados().subscribe(data_empleados => {
      return this.lista_empleados = data_empleados;
    });
  }


}
