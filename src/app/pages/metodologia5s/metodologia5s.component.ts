import { Component } from '@angular/core';
import { ListaOpcionesComponent } from "../../components/lista-opciones/lista-opciones.component";

@Component({
  selector: 'app-metodologia5s',
  standalone: true,
  imports: [
    ListaOpcionesComponent
  ],
  templateUrl: './metodologia5s.component.html',
  styleUrl: './metodologia5s.component.sass'
})
export class Metodologia5sComponent {
  titulo_opciones : string = 'Lista de opciones';
  imagen_5s : string = '../../assets/Images/imagen5s.png';
  titulo:string = 'Metodología de 5s';
  descripcion : string = 'Descubre la metodología 5S: una técnica eficiente para organizar tu espacio de trabajo, mejorar la productividad y reducir el desperdicio. Simplifica, estandariza y maximiza tu eficiencia con solo unos pasos fáciles de implementar.';
}
