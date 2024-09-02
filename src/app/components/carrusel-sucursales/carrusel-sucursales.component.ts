import { CommonModule } from '@angular/common';
import { Component, Input, input, OnInit } from '@angular/core';

@Component({
  selector: 'app-carrusel-sucursales',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './carrusel-sucursales.component.html',
  styleUrl: './carrusel-sucursales.component.sass'
})
export class CarruselSucursalesComponent {
  @Input() lista : any[] = [];

}
