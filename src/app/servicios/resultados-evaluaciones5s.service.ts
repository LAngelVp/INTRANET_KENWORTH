import { Injectable } from '@angular/core';
import { ResultadosEvaluacionesModel } from '../models/resultados-evaluaciones-model';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ResultadosEvaluaciones5sService {

  lista_evaluaciones: ResultadosEvaluacionesModel[] = [
    {
      sucursal: "Matriz",
      departamento: "Refacciones",
      padrino5s: 'Hector',
      mes_inicio: "Mayo",
      mes_final: "Junio",
      year: "2024",
      documento: "https://drive.google.com/file/d/1p_t5cYmyEYhv0l1Hk2PPeyZP_ddmLKGB/view?usp=sharing"
    },
    {
        sucursal: "Matriz",
        departamento: "Almacen",
        padrino5s: 'Laura',
        mes_inicio: "Mayo",
        mes_final: "Junio",
        year: "2024",
        documento: "https://drive.google.com/file/d/1p_t5cYmyEYhv0l1Hk2PPeyZP_ddmLKGB/view?usp=sharing"
    },
    {
        sucursal: "Veracruz",
        departamento: "Almacén",
        padrino5s: 'Laura',
        mes_inicio: "Mayo",
        mes_final: "Junio",
        year: "2024",
        documento: "https://drive.google.com/file/d/1p_t5cYmyEYhv0l1Hk2PPeyZP_ddmLKGB/view?usp=sharing"
    },
    {
        sucursal: "Veracruz",
        departamento: "Almacén",
        padrino5s: 'Laura',
        mes_inicio: "Mayo",
        mes_final: "Junio",
        year: "2024",
        documento: "https://drive.google.com/file/d/1p_t5cYmyEYhv0l1Hk2PPeyZP_ddmLKGB/view?usp=sharing"
    },
    {
        sucursal: "Treból",
        departamento: "Unidades seminuevas e infraestructura",
        padrino5s: 'Karime',
        mes_inicio: "Mayo",
        mes_final: "Junio",
        year: "2024",
        documento: "https://drive.google.com/file/d/1p_t5cYmyEYhv0l1Hk2PPeyZP_ddmLKGB/view?usp=sharing"
    },
    {
        sucursal: "Orizaba",
        departamento: "Almacén",
        padrino5s: 'Laura',
        mes_inicio: "Mayo",
        mes_final: "Junio",
        year: "2024",
        documento: "https://drive.google.com/file/d/1p_t5cYmyEYhv0l1Hk2PPeyZP_ddmLKGB/view?usp=sharing"
    }
  ]

  mostrarResultados():Observable<ResultadosEvaluacionesModel[]>{
    return of(this.lista_evaluaciones);
  }
}
