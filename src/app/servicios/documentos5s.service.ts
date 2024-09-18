import { Injectable } from '@angular/core';
import { FormatosDocumentos5sModel } from '../models/formatos-documentos5s-model';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Documentos5sService {
  documentos_5s : FormatosDocumentos5sModel[] = [
    {
      sucursal: "Matriz",
      departamento: "Refacciones",
      nombre_formato: "Evaluaciones 5s",
      documento: "../../assets/documents/Matriz.G1.1Evaluación5s.xlsx"
    },
    {
      sucursal: "Matriz",
      departamento: "Refacciones",
      nombre_formato: "Calendario de tareas",
      documento: "../../assets/documents/Matriz.G1.2CalendarioDeTareas.xlsx"
    },
    {
      sucursal: "Matriz",
      departamento: "Refacciones",
      nombre_formato: "Lista de necesarios",
      documento: "../../assets/documents/Matriz.G1.3ListadeNecesarios.xlsx"
    },
    {
      sucursal: "Matriz",
      departamento: "Refacciones",
      nombre_formato: "Evaluaciones de infraestructura",
      documento: "../../assets/documents/Matriz.G1.4EvaluaciónDeInfraestructura.xlsx"
    },
    {
      sucursal: "Veracruz",
      departamento: "Almacén",
      nombre_formato: "Evaluaciones 5s",
      documento: "../../assets/documents/Veracruz.G1.1Evaluación5s.xlsx"
    },
    {
      sucursal: "Veracruz",
      departamento: "Almacén",
      nombre_formato: "Calendario de tareas",
      documento: "../../assets/documents/Veracruz.G1.2CalendarioDeTareas.xlsx"
    },
    {
      sucursal: "Veracruz",
      departamento: "Almacén",
      nombre_formato: "Lista de necesarios",
      documento: "../../assets/documents/Veracruz.G1.3ListadeNecesarios.xlsx"
    },
    {
      sucursal: "Veracruz",
      departamento: "Almacén",
      nombre_formato: "Evaluaciones de infraestructura",
      documento: "../../assets/documents/Veracruz.G1.4EvaluaciónDeInfraestructura.xlsx"
    },
  ];
  getdocumentos():Observable<FormatosDocumentos5sModel[]>{
    return of(this.documentos_5s);
  }
}
