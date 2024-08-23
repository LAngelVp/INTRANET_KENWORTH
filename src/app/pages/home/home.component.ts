import { Component } from '@angular/core';
import { CarruselSucursalesComponent } from '../../components/carrusel-sucursales/carrusel-sucursales.component';
import { BarraNavegacionComponent } from "../../shared/barra-navegacion/barra-navegacion.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CarruselSucursalesComponent,
    BarraNavegacionComponent
],
  templateUrl: './home.component.html',
  styleUrl: './home.component.sass'
})
export class HomeComponent {

}
