import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterModule } from '@angular/router';

@Component({
  selector: 'app-barra-navegacion',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    RouterLink
  ],
  templateUrl: './barra-navegacion.component.html',
  styleUrl: './barra-navegacion.component.sass'
})
export class BarraNavegacionComponent {
  logotipo : string = '../../assets/Images/KWKREI.png';
  ruta_home : string = '/'
  lista_opciones = [
    {
      nombre : '5s',
      ruta : '/metodologia5s'
    },
    {
      nombre : 'SGC',
      ruta : '/sistema-de-gestion-de-calidad'
    },
    {
      nombre : 'Recursos Humanos',
      ruta : ''
    },
    {
      nombre : 'Cursos',
      ruta : ''
    },
  ]
  menu_abierto = false;
  mostrar_menu(){
    this.menu_abierto = !this.menu_abierto;
  }
}
