import { Component, OnInit } from '@angular/core';
import { JsonPlaceholderService, Photo } from '../../servicios/json-placeholder.service';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { DepartamentosSGCModels } from '../../models/departamentos-sgcmodels';

@Component({
  selector: 'app-departamentos',
  standalone: true,
  imports: [
    CommonModule,
    HttpClientModule
  ],
  templateUrl: './departamentos.component.html',
  styleUrl: './departamentos.component.sass'
})
export class DepartamentosComponent{

  constructor() { }
  
  departamentos: DepartamentosSGCModels[] = [
    {
      "id": "1",
      "nombre": "Unidades Nuevas",
      "abreviatura": "UN",
      "descripcion": "Descripción general del departamento",
      "detalles": {
        "organigrama": "URL_o_descripción_del_organigrama",
        "descripcion_puesto": {
          "nombre_descripcion_puesto_1": {
            "descripcion_puesto": "Descripción del puesto 1",
            "documento_descripcion_puesto": "documento_puesto_1.pdf"
          },
          "nombre_descripcion_puesto_2": {
            "descripcion_puesto": "Descripción del puesto 2",
            "documento_descripcion_puesto": "documento_puesto_2.pdf"
          }
        },
        "procedimientos": {
          "nombre_procedimiento_1": {
            "descripcion_procedimiento": "Descripción del procedimiento 1",
            "documento_procedimiento": "documento_procedimiento_1.pdf"
          },
          "nombre_procedimiento_2": {
            "descripcion_procedimiento": "Descripción del procedimiento 2",
            "documento_procedimiento": "documento_procedimiento_2.pdf"
          }
        },
        "politicas": {
          "nombre_politica_1": {
            "descripcion_politicas": "Descripción de la política 1",
            "documento_politicas": "documento_politica_1.pdf"
          },
          "nombre_politica_2": {
            "descripcion_politicas": "Descripción de la política 2",
            "documento_politicas": "documento_politica_2.pdf"
          }
        },
        "guias": {
          "nombre_guia_1": {
            "descripcion_guias": "Descripción de la guía 1",
            "documento_guias": "documento_guia_1.pdf"
          },
          "nombre_guia_2": {
            "descripcion_guias": "Descripción de la guía 2",
            "documento_guias": "documento_guia_2.pdf"
          }
        },
        "formatos": {
          "nombre_formato_1": {
            "descripcion_formatos": "Descripción del formato 1",
            "documento_formatos": "documento_formato_1.pdf"
          }
        },
        "anexos": {
          "nombre_anexo_1": {
            "descripcion_anexos": "Descripción del anexo 1",
            "documento_anexos": "documento_anexo_1.pdf"
          }
        },
        "diagramas": {
          "nombre_diagrama_1": {
            "descripcion_diagramas": "Descripción del diagrama 1",
            "documento_diagramas": "documento_diagrama_1.pdf"
          }
        }
      }
    }
  ]


  selectedItem: any; // Variable para almacenar el item seleccionado

  // Método para seleccionar el item y abrir el modal
  openModal(item: any) {
    this.selectedItem = item;
  }
  getObjectKeys(obj: any): string[] {
    return Object.keys(obj);
  }
  isObject(value: any): boolean {
    return value && typeof value === 'object' && !Array.isArray(value);
  }
}
