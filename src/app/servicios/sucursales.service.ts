import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SucursalesService {

  lista_sucursales = [
    {
      nombre : 'Kenworth Matriz',
      descripcion : `K.m 9 + 700 carretera Federal Córdoba-Veracruz, s/n Col. Venta Parada C.P. 94954. Amatlán de los Reyes, Ver. Tels: (271) 717-1400 Lada Sin costo: 800 7125678`,
      imagen : '../../assets/Images/MATRIZ.jpg',
      ruta : ''
    },
    {
      nombre : 'Kenworth Orizaba',
      descripcion : `Camino Nacional, Número 48-A, Col. Los Pinos, CP. 94732, Río Blanco, Ver. Tel.: (272)727-5422.`,
      imagen : '../../assets/Images/ORIZABA.jpg',
      ruta : ''
    },
    {
      nombre : 'Kenworth Trebol',
      descripcion : `Autopista Córdoba-México s/nCol. La Luz Francisco I. MaderoC.P. 94542, Córdoba Veracruz. Tels. : (271)714-7727 y 714-5533 Lada sin costo: 8005363783`,
      imagen : '../../assets/Images/TREBOL.jpg',
      ruta : ''
    },
    {
      nombre : 'Kenworth Veracruz',
      descripcion : `Carretera Federal 180 Tramo Náutla-Veracruz Col. Ex Hacienda Santa Fe, C.P. 91808. Veracruz, Veracruz. Tels: (229) 924-7382 , 924-5501`,
      imagen : '../../assets/Images/VERACRUZ.jpg',
      ruta : ''
    },
    {
      nombre : 'Kenworth Tehuacan',
      descripcion : `Calz. Adolfo López Mateos No.4210 Col. San Lorenzo Teotipilco CP. 75855. Tehuacán, Puebla. Tels: (238)392-0140`,
      imagen : '../../assets/Images/TEHUACAN.jpg',
      ruta : ''
    },
    {
      nombre : 'Kenworth Villahermosa',
      descripcion : `Carretera Villahermosa-Cárdenas km 8. Rchia Anacleto Canabal 4ª. Sección. Col. Centro C.P. 86287 Villahermosa Tabasco. TEL. (993) 317 0060`,
      imagen : '../../assets/Images/VILLAHERMOSA.jpg',
      ruta : ''
    },
    {
      nombre : 'Kenworth Coatzacoalcos',
      descripcion : `Aquiles Serdán No. 612 Entre Constitución y Av. Universidad Veracruzana. Col. Palma Sola C.P. 96579. Coatzacoalcos, Veracruz. TEL. (921) 215 5406`,
      imagen : '../../assets/Images/COATZACOALCOS.png',
      ruta : ''
    },
    {
      nombre : 'Kenworth Merida',
      descripcion : `Calle 32 Numero 600 Col. El Roble Agricola Mérida, Yucatán. C.P. 97295 Tel: (999) 689 3552`,
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
      descripcion : `San Jacinto Amilpas No. 174 Camino a San Jacinto Col. Granjas y Huertos Brenamiel C.P. 68285. San Jancinto Amilpas, Oaxaca. TEL. (951) 549 2510`,
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
