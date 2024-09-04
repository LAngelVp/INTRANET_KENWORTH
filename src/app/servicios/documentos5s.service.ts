import { Injectable } from '@angular/core';
import { FormatosDocumentos5sModel } from '../models/formatos-documentos5s-model';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Documentos5sService {
  documentos_5s : FormatosDocumentos5sModel[] = [
    {
      sucursal: "Sucursal 1",
      departamento: "Departamento A",
      mes: "Agosto",
      year: "2024",
      nombre_formato: "Formato de Informe Mensual",
      documento: "https://drive.google.com/file/d/1p_t5cYmyEYhv0l1Hk2PPeyZP_ddmLKGB/view?usp=sharing"
    },
    {
        sucursal: "Sucursal 1",
        departamento: "Departamento B",
        mes: "Agosto",
        year: "2024",
        nombre_formato: "Formato de Acta de Reunión",
        documento: "https://drive.google.com/file/d/1p_t5cYmyEYhv0l1Hk2PPeyZP_ddmLKGB/view?usp=sharing"
    },
    {
        sucursal: "Sucursal 2",
        departamento: "Departamento C",
        mes: "Julio",
        year: "2024",
        nombre_formato: "Formato de Evaluación de Desempeño",
        documento: "https://drive.google.com/file/d/1p_t5cYmyEYhv0l1Hk2PPeyZP_ddmLKGB/view?usp=sharing"
    },
    {
        sucursal: "Sucursal 2",
        departamento: "Departamento D",
        mes: "Julio",
        year: "2024",
        nombre_formato: "Formato de Solicitud de Vacaciones",
        documento: "https://drive.google.com/file/d/1p_t5cYmyEYhv0l1Hk2PPeyZP_ddmLKGB/view?usp=sharing"
    },
    {
        sucursal: "Sucursal 3",
        departamento: "Departamento E",
        mes: "Junio",
        year: "2024",
        nombre_formato: "Formato de Plan de Proyecto",
        documento: "https://drive.google.com/file/d/1p_t5cYmyEYhv0l1Hk2PPeyZP_ddmLKGB/view?usp=sharing"
    },
    {
        sucursal: "Sucursal 3",
        departamento: "Departamento F",
        mes: "Junio",
        year: "2024",
        nombre_formato: "Formato de Plantillas para Diapositivas",
        documento: "https://drive.google.com/file/d/1p_t5cYmyEYhv0l1Hk2PPeyZP_ddmLKGB/view?usp=sharing"
    }
  ];
  getdocumentos():Observable<FormatosDocumentos5sModel[]>{
    return of(this.documentos_5s);
  }
}
