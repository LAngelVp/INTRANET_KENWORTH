import { Component, Input } from '@angular/core';
import { EmpleadosModel } from '../../models/empleados-model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tabla-contenido',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './tabla-contenido.component.html',
  styleUrl: './tabla-contenido.component.sass'
})
export class TablaContenidoComponent {

  @Input() lista_empleados:any[] =  [];

  obtener_encabezados():string[]{
    return Object.keys(this.lista_empleados[0]);
  }

}
