import { Injectable } from '@angular/core';
import { PlantillasFormatosModel } from '../models/plantillas-formatos-model';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PlantillasEtiquetasService {
  lista_plantillas: PlantillasFormatosModel[] = [
    {
      nombre: "Plantilla de Informe Mensual",
      sucursal: "Sucursal 1",
      descripcion: "Plantilla para la elaboración de informes mensuales de actividades.",
      tipo: "Informe",
      uso: "Reportar actividades del mes",
      documento: "https://drive.google.com/file/d/1p_t5cYmyEYhv0l1Hk2PPeyZP_ddmLKGB/view?usp=sharing"
    },
    {
        nombre: "Formato de Acta de Reunión",
        sucursal: "Sucursal 2",
        descripcion: "Formato para registrar las actas de reuniones internas.",
        tipo: "Acta",
        uso: "Documentar reuniones y decisiones",
        documento: "https://drive.google.com/file/d/1p_t5cYmyEYhv0l1Hk2PPeyZP_ddmLKGB/view?usp=sharing"
    },
    {
        nombre: "Plantilla de Evaluación de Desempeño",
        sucursal: "Sucursal 1",
        descripcion: "Plantilla para la evaluación del desempeño de empleados.",
        tipo: "Evaluación",
        uso: "Evaluar desempeño laboral",
        documento: "https://drive.google.com/file/d/1p_t5cYmyEYhv0l1Hk2PPeyZP_ddmLKGB/view?usp=sharing"
    },
    {
        nombre: "Formato de Solicitud de Vacaciones",
        sucursal: "Sucursal 3",
        descripcion: "Formato para solicitar días de vacaciones.",
        tipo: "Solicitud",
        uso: "Solicitar tiempo libre",
        documento: "https://drive.google.com/file/d/1p_t5cYmyEYhv0l1Hk2PPeyZP_ddmLKGB/view?usp=sharing"
    },
    {
        nombre: "Plantilla de Plan de Proyecto",
        sucursal: "Sucursal 2",
        descripcion: "Plantilla para planificar proyectos, con secciones para objetivos, cronograma y recursos.",
        tipo: "Planificación",
        uso: "Planificar y gestionar proyectos",
        documento: "https://drive.google.com/file/d/1p_t5cYmyEYhv0l1Hk2PPeyZP_ddmLKGB/view?usp=sharing"
    }
  ];

  mostrarPlantillas():Observable<PlantillasFormatosModel[]>{
    return of(this.lista_plantillas);
  }
}
