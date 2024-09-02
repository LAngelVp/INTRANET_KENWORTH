import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SucursalesService {

  lista_sucursales = [
    {
      nombre : 'Kenworth Matriz',
      descripcion : 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s',
      imagen : '../../assets/Images/MATRIZ.jpg',
      ruta : ''
    },
    {
      nombre : 'Kenworth Orizaba',
      descripcion : 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s',
      imagen : '../../assets/Images/ORIZABA.jpg',
      ruta : ''
    },
    {
      nombre : 'Kenworth Trebol',
      descripcion : 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s',
      imagen : '../../assets/Images/TREBOL.jpg',
      ruta : ''
    },
    {
      nombre : 'Kenworth Veracruz',
      descripcion : 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s',
      imagen : '../../assets/Images/VERACRUZ.jpg',
      ruta : ''
    },
    {
      nombre : 'Kenworth Tehuacan',
      descripcion : 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s',
      imagen : '../../assets/Images/TEHUACAN.jpg',
      ruta : ''
    },
    {
      nombre : 'Kenworth Villahermosa',
      descripcion : 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s',
      imagen : '../../assets/Images/VILLAHERMOSA.jpg',
      ruta : ''
    },
    {
      nombre : 'Kenworth Coatzacoalcos',
      descripcion : 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s',
      imagen : '../../assets/Images/COATZACOALCOS.png',
      ruta : ''
    },
    {
      nombre : 'Kenworth Merida',
      descripcion : 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s',
      imagen : '../../assets/Images/MERIDA.jpg',
      ruta : ''
    },
    {
      nombre : 'Kenworth Chiapas',
      descripcion : 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s',
      imagen : '../../assets/Images/CHIAPAS.jpg',
      ruta : ''
    },
    {
      nombre : 'Kenworth Oaxaca',
      descripcion : 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s',
      imagen : '../../assets/Images/OAXACA.jpeg',
      ruta : ''
    },
    {
      nombre : 'Kenworth Tuxtla',
      descripcion : 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s',
      imagen : '../../assets/Images/TREBOL.jpg',
      ruta : ''
    }
  ]

  constructor() { }

  mostrar_sucursales():Observable<any[]>{
    return of(this.lista_sucursales);
  }
}
