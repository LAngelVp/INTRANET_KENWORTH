import { Component, OnInit } from '@angular/core';
import { CarruselSucursalesComponent } from '../../components/carrusel-sucursales/carrusel-sucursales.component';
import { CumpleañerosService } from '../../servicios/cumpleañeros.service';

@Component({
  selector: 'app-recursos-humanos',
  standalone: true,
  imports: [
    CarruselSucursalesComponent
  ],
  templateUrl: './recursos-humanos.component.html',
  styleUrl: './recursos-humanos.component.sass'
})
export class RecursosHumanosComponent implements OnInit{

  lista_cumple : any[] = [];

  constructor(private cumpleañeros : CumpleañerosService){}

  ngOnInit(): void {
    this.cumpleañeros.mostrar_cumpleañeros().subscribe(data_cumpleaños => {
      return this.lista_cumple = data_cumpleaños;
    });
  }


}
