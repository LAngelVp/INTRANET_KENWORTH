import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PlantillasImagenesService {
  lista_imagenes = [
    {
      nombre: "imagen1",
      documento: "../../assets/Images/Plantilla Horizontal6.jpg"
    },
    {
      nombre: "imagen2",
      documento: "../../assets/Images/Plantilla Horizontal9.jpg"
    },
    {
      nombre: "imagen3",
      documento: "../../assets/Images/Plantilla Horizontal6.jpg"
    },
    {
      nombre: "imagen4",
      documento: "../../assets/Images/Plantilla Horizontal9.jpg"
    },
    {
      nombre: "imagen5",
      documento: "../../assets/Images/Plantilla Horizontal6.jpg"
    },
    {
      nombre: "imagen6",
      documento: "../../assets/Images/Plantilla Horizontal9.jpg"
    },
    {
      nombre: "imagen7",
      documento: "../../assets/Images/Plantilla Horizontal6.jpg"
    },
    {
      nombre: "imagen8",
      documento: "../../assets/Images/Plantilla Horizontal9.jpg"
    },
    {
      nombre: "imagen9",
      documento: "../../assets/Images/Plantilla Horizontal6.jpg"
    },
    {
      nombre: "imagen10",
      documento: "../../assets/Images/Plantilla Horizontal9.jpg"
    }
  ]
  constructor() { }

  mostrar_imagenes():Observable<any[]>{
    return of(this.lista_imagenes);
  }
}
