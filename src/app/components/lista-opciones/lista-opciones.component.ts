import { CommonModule, TitleCasePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormatosDocumentos5sModel } from '../../models/formatos-documentos5s-model';
import { Observable, of } from 'rxjs';
import { Documentos5sService } from '../../servicios/documentos5s.service';
import { PlantillasFormatosModel } from '../../models/plantillas-formatos-model';
import { PlantillasEtiquetasService } from '../../servicios/plantillas-etiquetas.service';
import { ResultadosEvaluacionesModel } from '../../models/resultados-evaluaciones-model';
import { ResultadosEvaluaciones5sService } from '../../servicios/resultados-evaluaciones5s.service';
import { PlantillasImagenesService } from '../../servicios/plantillas-imagenes.service';

@Component({
  selector: 'app-lista-opciones',
  standalone: true,
  imports: [
    CommonModule,
    TitleCasePipe
  ],
  templateUrl: './lista-opciones.component.html',
  styleUrl: './lista-opciones.component.sass'
})
export class ListaOpcionesComponent implements OnInit {

  documentos: FormatosDocumentos5sModel[] = [];
  plantillas: PlantillasFormatosModel[] = [];
  resultados_evaluaciones5s : ResultadosEvaluacionesModel[] = [];
  plantillas_imagenes : any[] = [];
  selectedItem: any; // Variable para almacenar el item seleccionado

  constructor(
    private documentos5s: Documentos5sService, 
    private plantillas5s : PlantillasEtiquetasService,
    private resultadosEvaluaciones5s : ResultadosEvaluaciones5sService,
    private plantillasImagenes : PlantillasImagenesService
  ){}

  ngOnInit(): void {
    this.documentos5s.getdocumentos().subscribe(data =>  {
      this.documentos = data;
    });
    this.plantillas5s.mostrarPlantillas().subscribe(data_plantillas => {
      this.plantillas = data_plantillas;
    });
    this.resultadosEvaluaciones5s.mostrarResultados().subscribe(dataResultados5s => {
      this.resultados_evaluaciones5s = dataResultados5s;
    });
    this.plantillasImagenes.mostrar_imagenes().subscribe(resultadoPlantillasImagenes => {
      this.plantillas_imagenes = resultadoPlantillasImagenes;
    });
  }
  
  lista_5s = [
    {
      id : 1,
      nombre : 'resultados de evaluaciones',
      detalles: { 
        detalle1: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta sequi, eveniet atque officia dolor non, minima ipsum molestiae repellendus velit laboriosam soluta aliquam molestias deleniti accusamus, blanditiis nemo mollitia. Aliquid, fugiat delectus nihil perferendis rerum quasi exercitationem cumque ea, veniam at maxime officiis minus, deserunt nostrum. Repellendus atque eveniet, hic iure molestiae alias fuga architecto, sed voluptatum quisquam enim, aspernatur minima eaque possimus fugit nesciunt similique voluptatem sapiente illum excepturi optio? Tenetur, similique itaque velit excepturi at deserunt eligendi iste fugiat soluta, tempora dolores repudiandae impedit eius dignissimos est ab quasi nobis consequuntur fuga eaque iure dicta! Magni debitis eaque facere ratione consectetur temporibus iusto esse sapiente architecto, quidem distinctio cumque rem aut soluta iure, nisi pariatur ipsam earum nihil placeat quod incidunt enim blanditiis! Maxime tenetur consequuntur dolore ullam neque impedit deleniti cumque corrupti tempore, natus laudantium voluptates! Velit iure veritatis necessitatibus? Ut illo, blanditiis aspernatur, harum maxime magnam modi nostrum quibusdam consequuntur corporis error, veritatis corrupti mollitia tempore cupiditate! Fuga, repudiandae alias! Inventore error voluptatem culpa maxime harum. Tempore, voluptatum quod! Laudantium aliquam culpa doloribus iusto inventore nemo? Quidem inventore magnam consectetur quam? Eaque, non numquam dolore animi corrupti cum id culpa excepturi veniam cumque et eius molestias.Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta sequi, eveniet atque officia dolor non, minima ipsum molestiae repellendus velit laboriosam soluta aliquam molestias deleniti accusamus, blanditiis nemo mollitia. Aliquid, fugiat delectus nihil perferendis rerum quasi exercitationem cumque ea, veniam at maxime officiis minus, deserunt nostrum. Repellendus atque eveniet, hic iure molestiae alias fuga architecto, sed voluptatum quisquam enim, aspernatur minima eaque possimus fugit nesciunt similique voluptatem sapiente illum excepturi optio? Tenetur, similique itaque velit excepturi at deserunt eligendi iste fugiat soluta, tempora dolores repudiandae impedit eius dignissimos est ab quasi nobis consequuntur fuga eaque iure dicta! Magni debitis eaque facere ratione consectetur temporibus iusto esse sapiente architecto, quidem distinctio cumque rem aut soluta iure, nisi pariatur ipsam earum nihil placeat quod incidunt enim blanditiis! Maxime tenetur consequuntur dolore ullam neque impedit deleniti cumque corrupti tempore, natus laudantium voluptates! Velit iure veritatis necessitatibus? Ut illo, blanditiis aspernatur, harum maxime magnam modi nostrum quibusdam consequuntur corporis error, veritatis corrupti mollitia tempore cupiditate! Fuga, repudiandae alias! Inventore error voluptatem culpa maxime harum. Tempore, voluptatum quod! Laudantium aliquam culpa doloribus iusto inventore nemo? Quidem inventore magnam consectetur quam? Eaque, non numquam dolore animi corrupti cum id culpa excepturi veniam cumque et eius molestias.Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta sequi, eveniet atque officia dolor non, minima ipsum molestiae repellendus velit laboriosam soluta aliquam molestias deleniti accusamus, blanditiis nemo mollitia. Aliquid, fugiat delectus nihil perferendis rerum quasi exercitationem cumque ea, veniam at maxime officiis minus, deserunt nostrum. Repellendus atque eveniet, hic iure molestiae alias fuga architecto, sed voluptatum quisquam enim, aspernatur minima eaque possimus fugit nesciunt similique voluptatem sapiente illum excepturi optio? Tenetur, similique itaque velit excepturi at deserunt eligendi iste fugiat soluta, tempora dolores repudiandae impedit eius dignissimos est ab quasi nobis consequuntur fuga eaque iure dicta! Magni debitis eaque facere ratione consectetur temporibus iusto esse sapiente architecto, quidem distinctio cumque rem aut soluta iure, nisi pariatur ipsam earum nihil placeat quod incidunt enim blanditiis! Maxime tenetur consequuntur dolore ullam neque impedit deleniti cumque corrupti tempore, natus laudantium voluptates! Velit iure veritatis necessitatibus? Ut illo, blanditiis aspernatur, harum maxime magnam modi nostrum quibusdam consequuntur corporis error, veritatis corrupti mollitia tempore cupiditate! Fuga, repudiandae alias! Inventore error voluptatem culpa maxime harum. Tempore, voluptatum quod! Laudantium aliquam culpa doloribus iusto inventore nemo? Quidem inventore magnam consectetur quam? Eaque, non numquam dolore animi corrupti cum id culpa excepturi veniam cumque et eius molestias.', 
        detalle2: 'Detalle 2' 
      }
    },
    {
      id : 2,
      nombre : 'Formatos para la evaluaciones',
      detalles: { detalle1: 'Detalle 1', detalle2: 'Detalle 2' }
    },
    {
      id : 3,
      nombre : 'Plantillas para etiquetas, diapositivas y membretes oficiales',
      detalles: { detalle1: 'Detalle 1', detalle2: 'Detalle 2' }
    },
    {
      id : 4,
      nombre : 'plantillas oficiales en imagenes',
      detalles: { detalle1: 'Detalle 1', detalle2: 'Detalle 2' }
    },
    {
      id : 5,
      nombre : 'fondos de pantalla',
      detalles: { detalle1: 'Detalle 1', detalle2: 'Detalle 2' }
    },
    // {
    //   id : 6,
    //   nombre : 'Normas y reglas de las 5s',
    //   detalles: { detalle1: 'Detalle 1', detalle2: 'Detalle 2' }
    // },
    // {
    //   id : 7,
    //   nombre : 'Actividades y dinamicas 5s',
    //   detalles: { detalle1: 'Detalle 1', detalle2: 'Detalle 2' }
    // },
    // {
    //   id : 8,
    //   nombre : 'Padrinos de area',
    //   detalles: { detalle1: 'Detalle 1', detalle2: 'Detalle 2' }
    // },
  ]



  

  // Método para seleccionar el item y abrir el modal
  openModal(item: any) {
    this.selectedItem = item;
  }
  getObjectKeys(obj: any): string[] {
    return Object.keys(obj);
  }

  


}
