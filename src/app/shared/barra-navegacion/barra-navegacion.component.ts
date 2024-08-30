import { CommonModule } from '@angular/common';
import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';
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
      ruta : '/recursos-humanos'
    },
    {
      nombre : 'Cursos',
      ruta : '/cursos-y-asesorias'
    },
  ]

  @ViewChild('color_scroll') div!: ElementRef;

  @HostListener('window:scroll', ['$event'])
  scroll_window(){
    if (window.scrollY > 50) { // Ajusta el valor según tus necesidades
      this.div.nativeElement.classList.add('color_barra_scroll');
    } else {
      this.div.nativeElement.classList.remove('color_barra_scroll');
    }
  }



  menu_abierto = false;
  mostrar_menu(){
    this.menu_abierto = !this.menu_abierto;
  }
}
