import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

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
  lista_sucursales = [
    {
      nombre_sucursal : 'Kenworth Matriz',
      descripcion : 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s',
      imagen : '../../assets/Images/MATRIZ-01.JPG',
      ruta : ''
    },
    {
      nombre_sucursal : 'Kenworth Orizaba',
      descripcion : 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s',
      imagen : '../../assets/Images/ORIZABA.jpg',
      ruta : ''
    },
    {
      nombre_sucursal : 'Kenworth Trebol',
      descripcion : 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s',
      imagen : '../../assets/Images/TREBOL-01.jpg',
      ruta : ''
    },
    {
      nombre_sucursal : 'Kenworth Veracruz',
      descripcion : 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s',
      imagen : '../../assets/Images/VERACRUZ.jpg',
      ruta : ''
    },
    {
      nombre_sucursal : 'Kenworth Tehuacan',
      descripcion : 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s',
      imagen : '../../assets/Images/TEHUACAN.jpg',
      ruta : ''
    },
    {
      nombre_sucursal : 'Kenworth Villahermosa',
      descripcion : 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s',
      imagen : '../../assets/Images/VILLAHERMOSA.jpg',
      ruta : ''
    },
    {
      nombre_sucursal : 'Kenworth Coatzacoalcos',
      descripcion : 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s',
      imagen : '../../assets/Images/COATZACOALCOS.png',
      ruta : ''
    },
    {
      nombre_sucursal : 'Kenworth Merida',
      descripcion : 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s',
      imagen : '../../assets/Images/MERIDA.jpg',
      ruta : ''
    },
    {
      nombre_sucursal : 'Kenworth Chiapas',
      descripcion : 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s',
      imagen : '../../assets/Images/CHIAPAS.jpg',
      ruta : ''
    },
    {
      nombre_sucursal : 'Kenworth Oaxaca',
      descripcion : 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s',
      imagen : '../../assets/Images/OAXACA.jpeg',
      ruta : ''
    },
    {
      nombre_sucursal : 'Kenworth Tuxtla',
      descripcion : 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s',
      imagen : '../../assets/Images/TREBOL-01.jpg',
      ruta : ''
    }
  ]
}
