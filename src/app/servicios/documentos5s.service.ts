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
      documento: "informe_mensual.pdf"
    },
    {
        sucursal: "Sucursal 1",
        departamento: "Departamento B",
        mes: "Agosto",
        year: "2024",
        nombre_formato: "Formato de Acta de Reunión",
        documento: "acta_reunion.pdf"
    },
    {
        sucursal: "Sucursal 2",
        departamento: "Departamento C",
        mes: "Julio",
        year: "2024",
        nombre_formato: "Formato de Evaluación de Desempeño",
        documento: "evaluacion_desempeno.pdf"
    },
    {
        sucursal: "Sucursal 2",
        departamento: "Departamento D",
        mes: "Julio",
        year: "2024",
        nombre_formato: "Formato de Solicitud de Vacaciones",
        documento: "solicitud_vacaciones.pdf"
    },
    {
        sucursal: "Sucursal 3",
        departamento: "Departamento E",
        mes: "Junio",
        year: "2024",
        nombre_formato: "Formato de Plan de Proyecto",
        documento: "plan_proyecto.pdf"
    },
    {
        sucursal: "Sucursal 3",
        departamento: "Departamento F",
        mes: "Junio",
        year: "2024",
        nombre_formato: "Formato de Plantillas para Diapositivas",
        documento: "plantillas_diapositivas.pdf"
    }
  ];
  getdocumentos():Observable<FormatosDocumentos5sModel[]>{
    return of(this.documentos_5s);
  }
}
