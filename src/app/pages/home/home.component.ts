import { Component } from '@angular/core';
import { CarruselSucursalesComponent } from '../../components/carrusel-sucursales/carrusel-sucursales.component';
import { BarraNavegacionComponent } from "../../shared/barra-navegacion/barra-navegacion.component";
import { SucursalesService } from '../../servicios/sucursales.service';

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

  lista_sucursales: any[] = [];

  constructor(private sucursales: SucursalesService){}

  ngOnInit(): void {
    this.sucursales.mostrar_sucursales().subscribe(data_sucursales => {
      this.lista_sucursales = data_sucursales;
    });
  }

}
