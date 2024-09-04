import { Injectable } from '@angular/core';
import { ResultadosEvaluacionesModel } from '../models/resultados-evaluaciones-model';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ResultadosEvaluaciones5sService {

  lista_evaluaciones: ResultadosEvaluacionesModel[] = [
    {
      sucursal: "Sucursal 1",
      departamento: "Departamento A",
      mes_inicio: "Enero",
      mes_final: "Febrero",
      year: "2024",
      documento: "https://drive.google.com/file/d/1p_t5cYmyEYhv0l1Hk2PPeyZP_ddmLKGB/view?usp=sharing"
    },
    {
        sucursal: "Sucursal 1",
        departamento: "Departamento B",
        mes_inicio: "Marzo",
        mes_final: "Abril",
        year: "2024",
        documento: "https://drive.google.com/file/d/1p_t5cYmyEYhv0l1Hk2PPeyZP_ddmLKGB/view?usp=sharing"
    },
    {
        sucursal: "Sucursal 2",
        departamento: "Departamento C",
        mes_inicio: "Mayo",
        mes_final: "Junio",
        year: "2024",
        documento: "https://drive.google.com/file/d/1p_t5cYmyEYhv0l1Hk2PPeyZP_ddmLKGB/view?usp=sharing"
    },
    {
        sucursal: "Sucursal 2",
        departamento: "Departamento D",
        mes_inicio: "Julio",
        mes_final: "Agosto",
        year: "2024",
        documento: "https://drive.google.com/file/d/1p_t5cYmyEYhv0l1Hk2PPeyZP_ddmLKGB/view?usp=sharing"
    },
    {
        sucursal: "Sucursal 3",
        departamento: "Departamento E",
        mes_inicio: "Septiembre",
        mes_final: "Octubre",
        year: "2024",
        documento: "https://drive.google.com/file/d/1p_t5cYmyEYhv0l1Hk2PPeyZP_ddmLKGB/view?usp=sharing"
    },
    {
        sucursal: "Sucursal 3",
        departamento: "Departamento F",
        mes_inicio: "Noviembre",
        mes_final: "Diciembre",
        year: "2024",
        documento: "https://drive.google.com/file/d/1p_t5cYmyEYhv0l1Hk2PPeyZP_ddmLKGB/view?usp=sharing"
    }
  ]

  mostrarResultados():Observable<ResultadosEvaluacionesModel[]>{
    return of(this.lista_evaluaciones);
  }
}
