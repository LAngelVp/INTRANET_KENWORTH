import { Component } from '@angular/core';
import { ListaOpcionesComponent } from "../../components/lista-opciones/lista-opciones.component";
import { UpperCasePipe } from '@angular/common';

@Component({
  selector: 'app-metodologia5s',
  standalone: true,
  imports: [
    ListaOpcionesComponent,
    UpperCasePipe
  ],
  templateUrl: './metodologia5s.component.html',
  styleUrl: './metodologia5s.component.sass'
})
export class Metodologia5sComponent {
  titulo_opciones : string = 'Lista de opciones';
  imagen_5s : string = '../../assets/Images/img_ilustraciones/team.svg';
  titulo:string = 'Metodología de 5s';
  descripcion : string = 'Descubre la metodología 5S: una técnica eficiente para organizar tu espacio de trabajo, mejorar la productividad y reducir el desperdicio. Simplifica, estandariza y maximiza tu eficiencia con solo unos pasos fáciles de implementar.';
}
