import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-lista-opciones',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './lista-opciones.component.html',
  styleUrl: './lista-opciones.component.sass'
})
export class ListaOpcionesComponent {
  lista_5s = [
    {
      nombre : 'resultados de evaluaciones'
    },
    {
      nombre : 'Formatos para la evaluaciones'
    },
    {
      nombre : 'Formatos para etiquetas, plantillas para diapositivas y membretes oficiales'
    },
    {
      nombre : 'Plantillas oficiales en imagenes'
    },
    {
      nombre : 'fondos de pantalla'
    },
    {
      nombre : 'Normas y reglas de las 5s'
    },
    {
      nombre : 'Actividades y dinamicas 5s'
    },
    {
      nombre : 'Padrinos de area'
    },
  ]
}
