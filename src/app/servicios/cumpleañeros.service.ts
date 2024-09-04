import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CumpleañerosService {

  lista_cumpleañeros : any[] = [
    {
      id: 1,
      nombre: "Carlos García",
      fecha_de_cumpleaños: "1990-09-15",
      imagen: "https://images.pexels.com/photos/7580814/pexels-photo-7580814.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      foto: "https://www.svgrepo.com/show/190149/birthday-cake-birthday.svg"
    },
    {
      id: 2,
      nombre: "María López",
      fecha_de_cumpleaños: "1985-10-22",
      imagen: "https://images.pexels.com/photos/7580814/pexels-photo-7580814.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      foto: "https://www.svgrepo.com/show/190149/birthday-cake-birthday.svg"
    },
    {
      id: 3,
      nombre: "Luis Fernández",
      fecha_de_cumpleaños: "1992-08-05",
      imagen: "https://images.pexels.com/photos/7580814/pexels-photo-7580814.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      foto: "https://www.svgrepo.com/show/190149/birthday-cake-birthday.svg"
    }
  ];

  mostrar_cumpleañeros():Observable<any[]>{
    return of(this.lista_cumpleañeros);
  }

}
