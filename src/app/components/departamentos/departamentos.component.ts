import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { DepartamentosSGCModels } from '../../models/departamentos-sgcmodels';
import { RemoverGuionBajoPipe } from '../../remover-guion-bajo.pipe';

@Component({
  selector: 'app-departamentos',
  standalone: true,
  imports: [
    CommonModule,
    HttpClientModule,
    RemoverGuionBajoPipe
  ],
  templateUrl: './departamentos.component.html',
  styleUrl: './departamentos.component.sass'
})
export class DepartamentosComponent{

  constructor() { }
  
  departamentos: DepartamentosSGCModels[] = [
    {
      id: "1",
      nombre: "Unidades Nuevas",
      abreviatura: "UN",
      descripcion: "Descripción general del departamento",
      detalles: {
        organigrama: "URL_o_descripción_del_organigrama",
        descripcion_de_puesto: {
          nombre_descripcion_puesto_1: {
            detalle_descripcion_puesto: "er since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
            documento_descripcion_puesto: "../../assets/909953614757-10239940959-ticket.pdf"
          },
          nombre_descripcion_puesto_2: {
            detalle_descripcion_puesto: "Descripción del puesto 2",
            documento_descripcion_puesto: "documento_puesto_2.pdf"
          }
        },
        procedimientos: {
          nombre_procedimiento_1: {
            "detalle_descripcion_procedimiento": "Descripción del procedimiento 1",
            "documento_procedimiento": "documento_procedimiento_1.pdf"
          },
          nombre_procedimiento_2: {
            detalle_descripcion_procedimiento: "Descripción del procedimiento 2",
            documento_procedimiento: "documento_procedimiento_2.pdf"
          }
        },
        politicas: {
          nombre_politica_1: {
            detalle_descripcion_politicas: "Descripción de la política 1",
            documento_politicas: "documento_politica_1.pdf"
          },
          nombre_politica_2: {
            detalle_descripcion_politicas: "Descripción de la política 2",
            documento_politicas: "documento_politica_2.pdf"
          }
        },
        guias: {
          nombre_guia_1: {
            detalle_descripcion_guias: "Descripción de la guía 1",
            documento_guias: "documento_guia_1.pdf"
          },
          nombre_guia_2: {
            detalle_descripcion_guias: "Descripción de la guía 2",
            documento_guias: "documento_guia_2.pdf"
          }
        },
        formatos: {
          nombre_formato_1: {
            detalle_descripcion_formatos: "Descripción del formato 1",
            documento_formatos: "documento_formato_1.pdf"
          }
        },
        anexos: {
          nombre_anexo_1: {
            detalle_descripcion_anexos: "Descripción del anexo 1",
            documento_anexos: "documento_anexo_1.pdf"
          }
        },
        diagramas: {
          nombre_diagrama_1: {
            detalle_descripcion_diagramas: "Descripción del diagrama 1",
            documento_diagramas: "documento_diagrama_1.pdf"
          }
        }
      }
    },
    {
      id: "2",
      nombre: "Equipo Aliado",
      abreviatura: "EA",
      descripcion: "Descripción general del departamento",
      detalles: {
        organigrama: "URL_o_descripción_del_organigrama",
        descripcion_de_puesto: {
          nombre_descripcion_puesto_1: {
            detalle_descripcion_puesto: "er since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
            documento_descripcion_puesto: "../../assets/909953614757-10239940959-ticket.pdf"
          },
          nombre_descripcion_puesto_2: {
            detalle_descripcion_puesto: "Descripción del puesto 2",
            documento_descripcion_puesto: "documento_puesto_2.pdf"
          }
        },
        procedimientos: {
          nombre_procedimiento_1: {
            "detalle_descripcion_procedimiento": "Descripción del procedimiento 1",
            "documento_procedimiento": "documento_procedimiento_1.pdf"
          },
          nombre_procedimiento_2: {
            detalle_descripcion_procedimiento: "Descripción del procedimiento 2",
            documento_procedimiento: "documento_procedimiento_2.pdf"
          }
        },
        politicas: {
          nombre_politica_1: {
            detalle_descripcion_politicas: "Descripción de la política 1",
            documento_politicas: "documento_politica_1.pdf"
          },
          nombre_politica_2: {
            detalle_descripcion_politicas: "Descripción de la política 2",
            documento_politicas: "documento_politica_2.pdf"
          }
        },
        guias: {
          nombre_guia_1: {
            detalle_descripcion_guias: "Descripción de la guía 1",
            documento_guias: "documento_guia_1.pdf"
          },
          nombre_guia_2: {
            detalle_descripcion_guias: "Descripción de la guía 2",
            documento_guias: "documento_guia_2.pdf"
          }
        },
        formatos: {
          nombre_formato_1: {
            detalle_descripcion_formatos: "Descripción del formato 1",
            documento_formatos: "documento_formato_1.pdf"
          }
        },
        anexos: {
          nombre_anexo_1: {
            detalle_descripcion_anexos: "Descripción del anexo 1",
            documento_anexos: "documento_anexo_1.pdf"
          }
        },
        diagramas: {
          nombre_diagrama_1: {
            detalle_descripcion_diagramas: "Descripción del diagrama 1",
            documento_diagramas: "documento_diagrama_1.pdf"
          }
        }
      }
    },
    {
      id: "3",
      nombre: "Unidades Seminuevas",
      abreviatura: "US",
      descripcion: "Descripción general del departamento",
      detalles: {
        organigrama: "URL_o_descripción_del_organigrama",
        descripcion_de_puesto: {
          nombre_descripcion_puesto_1: {
            detalle_descripcion_puesto: "er since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
            documento_descripcion_puesto: "../../assets/909953614757-10239940959-ticket.pdf"
          },
          nombre_descripcion_puesto_2: {
            detalle_descripcion_puesto: "Descripción del puesto 2",
            documento_descripcion_puesto: "documento_puesto_2.pdf"
          }
        },
        procedimientos: {
          nombre_procedimiento_1: {
            "detalle_descripcion_procedimiento": "Descripción del procedimiento 1",
            "documento_procedimiento": "documento_procedimiento_1.pdf"
          },
          nombre_procedimiento_2: {
            detalle_descripcion_procedimiento: "Descripción del procedimiento 2",
            documento_procedimiento: "documento_procedimiento_2.pdf"
          }
        },
        politicas: {
          nombre_politica_1: {
            detalle_descripcion_politicas: "Descripción de la política 1",
            documento_politicas: "documento_politica_1.pdf"
          },
          nombre_politica_2: {
            detalle_descripcion_politicas: "Descripción de la política 2",
            documento_politicas: "documento_politica_2.pdf"
          }
        },
        guias: {
          nombre_guia_1: {
            detalle_descripcion_guias: "Descripción de la guía 1",
            documento_guias: "documento_guia_1.pdf"
          },
          nombre_guia_2: {
            detalle_descripcion_guias: "Descripción de la guía 2",
            documento_guias: "documento_guia_2.pdf"
          }
        },
        formatos: {
          nombre_formato_1: {
            detalle_descripcion_formatos: "Descripción del formato 1",
            documento_formatos: "documento_formato_1.pdf"
          }
        },
        anexos: {
          nombre_anexo_1: {
            detalle_descripcion_anexos: "Descripción del anexo 1",
            documento_anexos: "documento_anexo_1.pdf"
          }
        },
        diagramas: {
          nombre_diagrama_1: {
            detalle_descripcion_diagramas: "Descripción del diagrama 1",
            documento_diagramas: "documento_diagrama_1.pdf"
          }
        }
      }
    },
    {
      id: "4",
      nombre: "Refacciones",
      abreviatura: "RE",
      descripcion: "Descripción general del departamento",
      detalles: {
        organigrama: "URL_o_descripción_del_organigrama",
        descripcion_de_puesto: {
          nombre_descripcion_puesto_1: {
            detalle_descripcion_puesto: "er since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
            documento_descripcion_puesto: "../../assets/909953614757-10239940959-ticket.pdf"
          },
          nombre_descripcion_puesto_2: {
            detalle_descripcion_puesto: "Descripción del puesto 2",
            documento_descripcion_puesto: "documento_puesto_2.pdf"
          }
        },
        procedimientos: {
          nombre_procedimiento_1: {
            "detalle_descripcion_procedimiento": "Descripción del procedimiento 1",
            "documento_procedimiento": "documento_procedimiento_1.pdf"
          },
          nombre_procedimiento_2: {
            detalle_descripcion_procedimiento: "Descripción del procedimiento 2",
            documento_procedimiento: "documento_procedimiento_2.pdf"
          }
        },
        politicas: {
          nombre_politica_1: {
            detalle_descripcion_politicas: "Descripción de la política 1",
            documento_politicas: "documento_politica_1.pdf"
          },
          nombre_politica_2: {
            detalle_descripcion_politicas: "Descripción de la política 2",
            documento_politicas: "documento_politica_2.pdf"
          }
        },
        guias: {
          nombre_guia_1: {
            detalle_descripcion_guias: "Descripción de la guía 1",
            documento_guias: "documento_guia_1.pdf"
          },
          nombre_guia_2: {
            detalle_descripcion_guias: "Descripción de la guía 2",
            documento_guias: "documento_guia_2.pdf"
          }
        },
        formatos: {
          nombre_formato_1: {
            detalle_descripcion_formatos: "Descripción del formato 1",
            documento_formatos: "documento_formato_1.pdf"
          }
        },
        anexos: {
          nombre_anexo_1: {
            detalle_descripcion_anexos: "Descripción del anexo 1",
            documento_anexos: "documento_anexo_1.pdf"
          }
        },
        diagramas: {
          nombre_diagrama_1: {
            detalle_descripcion_diagramas: "Descripción del diagrama 1",
            documento_diagramas: "documento_diagrama_1.pdf"
          }
        }
      }
    },
    {
      id: "5",
      nombre: "Servicio",
      abreviatura: "SE",
      descripcion: "Descripción general del departamento",
      detalles: {
        organigrama: "URL_o_descripción_del_organigrama",
        descripcion_de_puesto: {
          nombre_descripcion_puesto_1: {
            detalle_descripcion_puesto: "er since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
            documento_descripcion_puesto: "../../assets/909953614757-10239940959-ticket.pdf"
          },
          nombre_descripcion_puesto_2: {
            detalle_descripcion_puesto: "Descripción del puesto 2",
            documento_descripcion_puesto: "documento_puesto_2.pdf"
          }
        },
        procedimientos: {
          nombre_procedimiento_1: {
            "detalle_descripcion_procedimiento": "Descripción del procedimiento 1",
            "documento_procedimiento": "documento_procedimiento_1.pdf"
          },
          nombre_procedimiento_2: {
            detalle_descripcion_procedimiento: "Descripción del procedimiento 2",
            documento_procedimiento: "documento_procedimiento_2.pdf"
          }
        },
        politicas: {
          nombre_politica_1: {
            detalle_descripcion_politicas: "Descripción de la política 1",
            documento_politicas: "documento_politica_1.pdf"
          },
          nombre_politica_2: {
            detalle_descripcion_politicas: "Descripción de la política 2",
            documento_politicas: "documento_politica_2.pdf"
          }
        },
        guias: {
          nombre_guia_1: {
            detalle_descripcion_guias: "Descripción de la guía 1",
            documento_guias: "documento_guia_1.pdf"
          },
          nombre_guia_2: {
            detalle_descripcion_guias: "Descripción de la guía 2",
            documento_guias: "documento_guia_2.pdf"
          }
        },
        formatos: {
          nombre_formato_1: {
            detalle_descripcion_formatos: "Descripción del formato 1",
            documento_formatos: "documento_formato_1.pdf"
          }
        },
        anexos: {
          nombre_anexo_1: {
            detalle_descripcion_anexos: "Descripción del anexo 1",
            documento_anexos: "documento_anexo_1.pdf"
          }
        },
        diagramas: {
          nombre_diagrama_1: {
            detalle_descripcion_diagramas: "Descripción del diagrama 1",
            documento_diagramas: "documento_diagrama_1.pdf"
          }
        }
      }
    },
    {
      id: "6",
      nombre: "BodyShop",
      abreviatura: "BS",
      descripcion: "Descripción general del departamento",
      detalles: {
        organigrama: "URL_o_descripción_del_organigrama",
        descripcion_de_puesto: {
          nombre_descripcion_puesto_1: {
            detalle_descripcion_puesto: "er since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
            documento_descripcion_puesto: "../../assets/909953614757-10239940959-ticket.pdf"
          },
          nombre_descripcion_puesto_2: {
            detalle_descripcion_puesto: "Descripción del puesto 2",
            documento_descripcion_puesto: "documento_puesto_2.pdf"
          }
        },
        procedimientos: {
          nombre_procedimiento_1: {
            "detalle_descripcion_procedimiento": "Descripción del procedimiento 1",
            "documento_procedimiento": "documento_procedimiento_1.pdf"
          },
          nombre_procedimiento_2: {
            detalle_descripcion_procedimiento: "Descripción del procedimiento 2",
            documento_procedimiento: "documento_procedimiento_2.pdf"
          }
        },
        politicas: {
          nombre_politica_1: {
            detalle_descripcion_politicas: "Descripción de la política 1",
            documento_politicas: "documento_politica_1.pdf"
          },
          nombre_politica_2: {
            detalle_descripcion_politicas: "Descripción de la política 2",
            documento_politicas: "documento_politica_2.pdf"
          }
        },
        guias: {
          nombre_guia_1: {
            detalle_descripcion_guias: "Descripción de la guía 1",
            documento_guias: "documento_guia_1.pdf"
          },
          nombre_guia_2: {
            detalle_descripcion_guias: "Descripción de la guía 2",
            documento_guias: "documento_guia_2.pdf"
          }
        },
        formatos: {
          nombre_formato_1: {
            detalle_descripcion_formatos: "Descripción del formato 1",
            documento_formatos: "documento_formato_1.pdf"
          }
        },
        anexos: {
          nombre_anexo_1: {
            detalle_descripcion_anexos: "Descripción del anexo 1",
            documento_anexos: "documento_anexo_1.pdf"
          }
        },
        diagramas: {
          nombre_diagrama_1: {
            detalle_descripcion_diagramas: "Descripción del diagrama 1",
            documento_diagramas: "documento_diagrama_1.pdf"
          }
        }
      }
    },
    {
      id: "7",
      nombre: "Almacén",
      abreviatura: "ALM",
      descripcion: "Descripción general del departamento",
      detalles: {
        organigrama: "URL_o_descripción_del_organigrama",
        descripcion_de_puesto: {
          nombre_descripcion_puesto_1: {
            detalle_descripcion_puesto: "er since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
            documento_descripcion_puesto: "../../assets/909953614757-10239940959-ticket.pdf"
          },
          nombre_descripcion_puesto_2: {
            detalle_descripcion_puesto: "Descripción del puesto 2",
            documento_descripcion_puesto: "documento_puesto_2.pdf"
          }
        },
        procedimientos: {
          nombre_procedimiento_1: {
            "detalle_descripcion_procedimiento": "Descripción del procedimiento 1",
            "documento_procedimiento": "documento_procedimiento_1.pdf"
          },
          nombre_procedimiento_2: {
            detalle_descripcion_procedimiento: "Descripción del procedimiento 2",
            documento_procedimiento: "documento_procedimiento_2.pdf"
          }
        },
        politicas: {
          nombre_politica_1: {
            detalle_descripcion_politicas: "Descripción de la política 1",
            documento_politicas: "documento_politica_1.pdf"
          },
          nombre_politica_2: {
            detalle_descripcion_politicas: "Descripción de la política 2",
            documento_politicas: "documento_politica_2.pdf"
          }
        },
        guias: {
          nombre_guia_1: {
            detalle_descripcion_guias: "Descripción de la guía 1",
            documento_guias: "documento_guia_1.pdf"
          },
          nombre_guia_2: {
            detalle_descripcion_guias: "Descripción de la guía 2",
            documento_guias: "documento_guia_2.pdf"
          }
        },
        formatos: {
          nombre_formato_1: {
            detalle_descripcion_formatos: "Descripción del formato 1",
            documento_formatos: "documento_formato_1.pdf"
          }
        },
        anexos: {
          nombre_anexo_1: {
            detalle_descripcion_anexos: "Descripción del anexo 1",
            documento_anexos: "documento_anexo_1.pdf"
          }
        },
        diagramas: {
          nombre_diagrama_1: {
            detalle_descripcion_diagramas: "Descripción del diagrama 1",
            documento_diagramas: "documento_diagrama_1.pdf"
          }
        }
      }
    },
    {
      id: "8",
      nombre: "Compras",
      abreviatura: "CO",
      descripcion: "Descripción general del departamento",
      detalles: {
        organigrama: "URL_o_descripción_del_organigrama",
        descripcion_de_puesto: {
          nombre_descripcion_puesto_1: {
            detalle_descripcion_puesto: "er since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
            documento_descripcion_puesto: "../../assets/909953614757-10239940959-ticket.pdf"
          },
          nombre_descripcion_puesto_2: {
            detalle_descripcion_puesto: "Descripción del puesto 2",
            documento_descripcion_puesto: "documento_puesto_2.pdf"
          }
        },
        procedimientos: {
          nombre_procedimiento_1: {
            "detalle_descripcion_procedimiento": "Descripción del procedimiento 1",
            "documento_procedimiento": "documento_procedimiento_1.pdf"
          },
          nombre_procedimiento_2: {
            detalle_descripcion_procedimiento: "Descripción del procedimiento 2",
            documento_procedimiento: "documento_procedimiento_2.pdf"
          }
        },
        politicas: {
          nombre_politica_1: {
            detalle_descripcion_politicas: "Descripción de la política 1",
            documento_politicas: "documento_politica_1.pdf"
          },
          nombre_politica_2: {
            detalle_descripcion_politicas: "Descripción de la política 2",
            documento_politicas: "documento_politica_2.pdf"
          }
        },
        guias: {
          nombre_guia_1: {
            detalle_descripcion_guias: "Descripción de la guía 1",
            documento_guias: "documento_guia_1.pdf"
          },
          nombre_guia_2: {
            detalle_descripcion_guias: "Descripción de la guía 2",
            documento_guias: "documento_guia_2.pdf"
          }
        },
        formatos: {
          nombre_formato_1: {
            detalle_descripcion_formatos: "Descripción del formato 1",
            documento_formatos: "documento_formato_1.pdf"
          }
        },
        anexos: {
          nombre_anexo_1: {
            detalle_descripcion_anexos: "Descripción del anexo 1",
            documento_anexos: "documento_anexo_1.pdf"
          }
        },
        diagramas: {
          nombre_diagrama_1: {
            detalle_descripcion_diagramas: "Descripción del diagrama 1",
            documento_diagramas: "documento_diagrama_1.pdf"
          }
        }
      }
    },
    {
      id: "9",
      nombre: "Crédito y Cobranza",
      abreviatura: "CyC",
      descripcion: "Descripción general del departamento",
      detalles: {
        organigrama: "URL_o_descripción_del_organigrama",
        descripcion_de_puesto: {
          nombre_descripcion_puesto_1: {
            detalle_descripcion_puesto: "er since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
            documento_descripcion_puesto: "../../assets/909953614757-10239940959-ticket.pdf"
          },
          nombre_descripcion_puesto_2: {
            detalle_descripcion_puesto: "Descripción del puesto 2",
            documento_descripcion_puesto: "documento_puesto_2.pdf"
          }
        },
        procedimientos: {
          nombre_procedimiento_1: {
            "detalle_descripcion_procedimiento": "Descripción del procedimiento 1",
            "documento_procedimiento": "documento_procedimiento_1.pdf"
          },
          nombre_procedimiento_2: {
            detalle_descripcion_procedimiento: "Descripción del procedimiento 2",
            documento_procedimiento: "documento_procedimiento_2.pdf"
          }
        },
        politicas: {
          nombre_politica_1: {
            detalle_descripcion_politicas: "Descripción de la política 1",
            documento_politicas: "documento_politica_1.pdf"
          },
          nombre_politica_2: {
            detalle_descripcion_politicas: "Descripción de la política 2",
            documento_politicas: "documento_politica_2.pdf"
          }
        },
        guias: {
          nombre_guia_1: {
            detalle_descripcion_guias: "Descripción de la guía 1",
            documento_guias: "documento_guia_1.pdf"
          },
          nombre_guia_2: {
            detalle_descripcion_guias: "Descripción de la guía 2",
            documento_guias: "documento_guia_2.pdf"
          }
        },
        formatos: {
          nombre_formato_1: {
            detalle_descripcion_formatos: "Descripción del formato 1",
            documento_formatos: "documento_formato_1.pdf"
          }
        },
        anexos: {
          nombre_anexo_1: {
            detalle_descripcion_anexos: "Descripción del anexo 1",
            documento_anexos: "documento_anexo_1.pdf"
          }
        },
        diagramas: {
          nombre_diagrama_1: {
            detalle_descripcion_diagramas: "Descripción del diagrama 1",
            documento_diagramas: "documento_diagrama_1.pdf"
          }
        }
      }
    },
    {
      id: "10",
      nombre: "Contraloría",
      abreviatura: "CT",
      descripcion: "Descripción general del departamento",
      detalles: {
        organigrama: "URL_o_descripción_del_organigrama",
        descripcion_de_puesto: {
          nombre_descripcion_puesto_1: {
            detalle_descripcion_puesto: "er since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
            documento_descripcion_puesto: "../../assets/909953614757-10239940959-ticket.pdf"
          },
          nombre_descripcion_puesto_2: {
            detalle_descripcion_puesto: "Descripción del puesto 2",
            documento_descripcion_puesto: "documento_puesto_2.pdf"
          }
        },
        procedimientos: {
          nombre_procedimiento_1: {
            "detalle_descripcion_procedimiento": "Descripción del procedimiento 1",
            "documento_procedimiento": "documento_procedimiento_1.pdf"
          },
          nombre_procedimiento_2: {
            detalle_descripcion_procedimiento: "Descripción del procedimiento 2",
            documento_procedimiento: "documento_procedimiento_2.pdf"
          }
        },
        politicas: {
          nombre_politica_1: {
            detalle_descripcion_politicas: "Descripción de la política 1",
            documento_politicas: "documento_politica_1.pdf"
          },
          nombre_politica_2: {
            detalle_descripcion_politicas: "Descripción de la política 2",
            documento_politicas: "documento_politica_2.pdf"
          }
        },
        guias: {
          nombre_guia_1: {
            detalle_descripcion_guias: "Descripción de la guía 1",
            documento_guias: "documento_guia_1.pdf"
          },
          nombre_guia_2: {
            detalle_descripcion_guias: "Descripción de la guía 2",
            documento_guias: "documento_guia_2.pdf"
          }
        },
        formatos: {
          nombre_formato_1: {
            detalle_descripcion_formatos: "Descripción del formato 1",
            documento_formatos: "documento_formato_1.pdf"
          }
        },
        anexos: {
          nombre_anexo_1: {
            detalle_descripcion_anexos: "Descripción del anexo 1",
            documento_anexos: "documento_anexo_1.pdf"
          }
        },
        diagramas: {
          nombre_diagrama_1: {
            detalle_descripcion_diagramas: "Descripción del diagrama 1",
            documento_diagramas: "documento_diagrama_1.pdf"
          }
        }
      }
    },
    {
      id: "11",
      nombre: "Contabilidad",
      abreviatura: "CB",
      descripcion: "Descripción general del departamento",
      detalles: {
        organigrama: "URL_o_descripción_del_organigrama",
        descripcion_de_puesto: {
          nombre_descripcion_puesto_1: {
            detalle_descripcion_puesto: "er since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
            documento_descripcion_puesto: "../../assets/909953614757-10239940959-ticket.pdf"
          },
          nombre_descripcion_puesto_2: {
            detalle_descripcion_puesto: "Descripción del puesto 2",
            documento_descripcion_puesto: "documento_puesto_2.pdf"
          }
        },
        procedimientos: {
          nombre_procedimiento_1: {
            "detalle_descripcion_procedimiento": "Descripción del procedimiento 1",
            "documento_procedimiento": "documento_procedimiento_1.pdf"
          },
          nombre_procedimiento_2: {
            detalle_descripcion_procedimiento: "Descripción del procedimiento 2",
            documento_procedimiento: "documento_procedimiento_2.pdf"
          }
        },
        politicas: {
          nombre_politica_1: {
            detalle_descripcion_politicas: "Descripción de la política 1",
            documento_politicas: "documento_politica_1.pdf"
          },
          nombre_politica_2: {
            detalle_descripcion_politicas: "Descripción de la política 2",
            documento_politicas: "documento_politica_2.pdf"
          }
        },
        guias: {
          nombre_guia_1: {
            detalle_descripcion_guias: "Descripción de la guía 1",
            documento_guias: "documento_guia_1.pdf"
          },
          nombre_guia_2: {
            detalle_descripcion_guias: "Descripción de la guía 2",
            documento_guias: "documento_guia_2.pdf"
          }
        },
        formatos: {
          nombre_formato_1: {
            detalle_descripcion_formatos: "Descripción del formato 1",
            documento_formatos: "documento_formato_1.pdf"
          }
        },
        anexos: {
          nombre_anexo_1: {
            detalle_descripcion_anexos: "Descripción del anexo 1",
            documento_anexos: "documento_anexo_1.pdf"
          }
        },
        diagramas: {
          nombre_diagrama_1: {
            detalle_descripcion_diagramas: "Descripción del diagrama 1",
            documento_diagramas: "documento_diagrama_1.pdf"
          }
        }
      }
    },
    {
      id: "12",
      nombre: "Mercadotecnia",
      abreviatura: "MK",
      descripcion: "Descripción general del departamento",
      detalles: {
        organigrama: "URL_o_descripción_del_organigrama",
        descripcion_de_puesto: {
          nombre_descripcion_puesto_1: {
            detalle_descripcion_puesto: "er since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
            documento_descripcion_puesto: "../../assets/909953614757-10239940959-ticket.pdf"
          },
          nombre_descripcion_puesto_2: {
            detalle_descripcion_puesto: "Descripción del puesto 2",
            documento_descripcion_puesto: "documento_puesto_2.pdf"
          }
        },
        procedimientos: {
          nombre_procedimiento_1: {
            "detalle_descripcion_procedimiento": "Descripción del procedimiento 1",
            "documento_procedimiento": "documento_procedimiento_1.pdf"
          },
          nombre_procedimiento_2: {
            detalle_descripcion_procedimiento: "Descripción del procedimiento 2",
            documento_procedimiento: "documento_procedimiento_2.pdf"
          }
        },
        politicas: {
          nombre_politica_1: {
            detalle_descripcion_politicas: "Descripción de la política 1",
            documento_politicas: "documento_politica_1.pdf"
          },
          nombre_politica_2: {
            detalle_descripcion_politicas: "Descripción de la política 2",
            documento_politicas: "documento_politica_2.pdf"
          }
        },
        guias: {
          nombre_guia_1: {
            detalle_descripcion_guias: "Descripción de la guía 1",
            documento_guias: "documento_guia_1.pdf"
          },
          nombre_guia_2: {
            detalle_descripcion_guias: "Descripción de la guía 2",
            documento_guias: "documento_guia_2.pdf"
          }
        },
        formatos: {
          nombre_formato_1: {
            detalle_descripcion_formatos: "Descripción del formato 1",
            documento_formatos: "documento_formato_1.pdf"
          }
        },
        anexos: {
          nombre_anexo_1: {
            detalle_descripcion_anexos: "Descripción del anexo 1",
            documento_anexos: "documento_anexo_1.pdf"
          }
        },
        diagramas: {
          nombre_diagrama_1: {
            detalle_descripcion_diagramas: "Descripción del diagrama 1",
            documento_diagramas: "documento_diagrama_1.pdf"
          }
        }
      }
    },
    {
      id: "13",
      nombre: "Dirección general",
      abreviatura: "DG",
      descripcion: "Descripción general del departamento",
      detalles: {
        organigrama: "URL_o_descripción_del_organigrama",
        descripcion_de_puesto: {
          nombre_descripcion_puesto_1: {
            detalle_descripcion_puesto: "er since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
            documento_descripcion_puesto: "../../assets/909953614757-10239940959-ticket.pdf"
          },
          nombre_descripcion_puesto_2: {
            detalle_descripcion_puesto: "Descripción del puesto 2",
            documento_descripcion_puesto: "documento_puesto_2.pdf"
          }
        },
        procedimientos: {
          nombre_procedimiento_1: {
            "detalle_descripcion_procedimiento": "Descripción del procedimiento 1",
            "documento_procedimiento": "documento_procedimiento_1.pdf"
          },
          nombre_procedimiento_2: {
            detalle_descripcion_procedimiento: "Descripción del procedimiento 2",
            documento_procedimiento: "documento_procedimiento_2.pdf"
          }
        },
        politicas: {
          nombre_politica_1: {
            detalle_descripcion_politicas: "Descripción de la política 1",
            documento_politicas: "documento_politica_1.pdf"
          },
          nombre_politica_2: {
            detalle_descripcion_politicas: "Descripción de la política 2",
            documento_politicas: "documento_politica_2.pdf"
          }
        },
        guias: {
          nombre_guia_1: {
            detalle_descripcion_guias: "Descripción de la guía 1",
            documento_guias: "documento_guia_1.pdf"
          },
          nombre_guia_2: {
            detalle_descripcion_guias: "Descripción de la guía 2",
            documento_guias: "documento_guia_2.pdf"
          }
        },
        formatos: {
          nombre_formato_1: {
            detalle_descripcion_formatos: "Descripción del formato 1",
            documento_formatos: "documento_formato_1.pdf"
          }
        },
        anexos: {
          nombre_anexo_1: {
            detalle_descripcion_anexos: "Descripción del anexo 1",
            documento_anexos: "documento_anexo_1.pdf"
          }
        },
        diagramas: {
          nombre_diagrama_1: {
            detalle_descripcion_diagramas: "Descripción del diagrama 1",
            documento_diagramas: "documento_diagrama_1.pdf"
          }
        }
      }
    },
    {
      id: "14",
      nombre: "Recursos Humanos",
      abreviatura: "RH",
      descripcion: "Descripción general del departamento",
      detalles: {
        organigrama: "URL_o_descripción_del_organigrama",
        descripcion_de_puesto: {
          nombre_descripcion_puesto_1: {
            detalle_descripcion_puesto: "er since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
            documento_descripcion_puesto: "../../assets/909953614757-10239940959-ticket.pdf"
          },
          nombre_descripcion_puesto_2: {
            detalle_descripcion_puesto: "Descripción del puesto 2",
            documento_descripcion_puesto: "documento_puesto_2.pdf"
          }
        },
        procedimientos: {
          nombre_procedimiento_1: {
            "detalle_descripcion_procedimiento": "Descripción del procedimiento 1",
            "documento_procedimiento": "documento_procedimiento_1.pdf"
          },
          nombre_procedimiento_2: {
            detalle_descripcion_procedimiento: "Descripción del procedimiento 2",
            documento_procedimiento: "documento_procedimiento_2.pdf"
          }
        },
        politicas: {
          nombre_politica_1: {
            detalle_descripcion_politicas: "Descripción de la política 1",
            documento_politicas: "documento_politica_1.pdf"
          },
          nombre_politica_2: {
            detalle_descripcion_politicas: "Descripción de la política 2",
            documento_politicas: "documento_politica_2.pdf"
          }
        },
        guias: {
          nombre_guia_1: {
            detalle_descripcion_guias: "Descripción de la guía 1",
            documento_guias: "documento_guia_1.pdf"
          },
          nombre_guia_2: {
            detalle_descripcion_guias: "Descripción de la guía 2",
            documento_guias: "documento_guia_2.pdf"
          }
        },
        formatos: {
          nombre_formato_1: {
            detalle_descripcion_formatos: "Descripción del formato 1",
            documento_formatos: "documento_formato_1.pdf"
          }
        },
        anexos: {
          nombre_anexo_1: {
            detalle_descripcion_anexos: "Descripción del anexo 1",
            documento_anexos: "documento_anexo_1.pdf"
          }
        },
        diagramas: {
          nombre_diagrama_1: {
            detalle_descripcion_diagramas: "Descripción del diagrama 1",
            documento_diagramas: "documento_diagrama_1.pdf"
          }
        }
      }
    },
    {
      id: "15",
      nombre: "Plan piso",
      abreviatura: "PP",
      descripcion: "Descripción general del departamento",
      detalles: {
        organigrama: "URL_o_descripción_del_organigrama",
        descripcion_de_puesto: {
          nombre_descripcion_puesto_1: {
            detalle_descripcion_puesto: "er since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
            documento_descripcion_puesto: "../../assets/909953614757-10239940959-ticket.pdf"
          },
          nombre_descripcion_puesto_2: {
            detalle_descripcion_puesto: "Descripción del puesto 2",
            documento_descripcion_puesto: "documento_puesto_2.pdf"
          }
        },
        procedimientos: {
          nombre_procedimiento_1: {
            "detalle_descripcion_procedimiento": "Descripción del procedimiento 1",
            "documento_procedimiento": "documento_procedimiento_1.pdf"
          },
          nombre_procedimiento_2: {
            detalle_descripcion_procedimiento: "Descripción del procedimiento 2",
            documento_procedimiento: "documento_procedimiento_2.pdf"
          }
        },
        politicas: {
          nombre_politica_1: {
            detalle_descripcion_politicas: "Descripción de la política 1",
            documento_politicas: "documento_politica_1.pdf"
          },
          nombre_politica_2: {
            detalle_descripcion_politicas: "Descripción de la política 2",
            documento_politicas: "documento_politica_2.pdf"
          }
        },
        guias: {
          nombre_guia_1: {
            detalle_descripcion_guias: "Descripción de la guía 1",
            documento_guias: "documento_guia_1.pdf"
          },
          nombre_guia_2: {
            detalle_descripcion_guias: "Descripción de la guía 2",
            documento_guias: "documento_guia_2.pdf"
          }
        },
        formatos: {
          nombre_formato_1: {
            detalle_descripcion_formatos: "Descripción del formato 1",
            documento_formatos: "documento_formato_1.pdf"
          }
        },
        anexos: {
          nombre_anexo_1: {
            detalle_descripcion_anexos: "Descripción del anexo 1",
            documento_anexos: "documento_anexo_1.pdf"
          }
        },
        diagramas: {
          nombre_diagrama_1: {
            detalle_descripcion_diagramas: "Descripción del diagrama 1",
            documento_diagramas: "documento_diagrama_1.pdf"
          }
        }
      }
    },
    {
      id: "16",
      nombre: "Tecnologías de la Información",
      abreviatura: "TI",
      descripcion: "Descripción general del departamento",
      detalles: {
        organigrama: "URL_o_descripción_del_organigrama",
        descripcion_de_puesto: {
          nombre_descripcion_puesto_1: {
            detalle_descripcion_puesto: "er since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
            documento_descripcion_puesto: "../../assets/909953614757-10239940959-ticket.pdf"
          },
          nombre_descripcion_puesto_2: {
            detalle_descripcion_puesto: "Descripción del puesto 2",
            documento_descripcion_puesto: "documento_puesto_2.pdf"
          }
        },
        procedimientos: {
          nombre_procedimiento_1: {
            "detalle_descripcion_procedimiento": "Descripción del procedimiento 1",
            "documento_procedimiento": "documento_procedimiento_1.pdf"
          },
          nombre_procedimiento_2: {
            detalle_descripcion_procedimiento: "Descripción del procedimiento 2",
            documento_procedimiento: "documento_procedimiento_2.pdf"
          }
        },
        politicas: {
          nombre_politica_1: {
            detalle_descripcion_politicas: "Descripción de la política 1",
            documento_politicas: "documento_politica_1.pdf"
          },
          nombre_politica_2: {
            detalle_descripcion_politicas: "Descripción de la política 2",
            documento_politicas: "documento_politica_2.pdf"
          }
        },
        guias: {
          nombre_guia_1: {
            detalle_descripcion_guias: "Descripción de la guía 1",
            documento_guias: "documento_guia_1.pdf"
          },
          nombre_guia_2: {
            detalle_descripcion_guias: "Descripción de la guía 2",
            documento_guias: "documento_guia_2.pdf"
          }
        },
        formatos: {
          nombre_formato_1: {
            detalle_descripcion_formatos: "Descripción del formato 1",
            documento_formatos: "documento_formato_1.pdf"
          }
        },
        anexos: {
          nombre_anexo_1: {
            detalle_descripcion_anexos: "Descripción del anexo 1",
            documento_anexos: "documento_anexo_1.pdf"
          }
        },
        diagramas: {
          nombre_diagrama_1: {
            detalle_descripcion_diagramas: "Descripción del diagrama 1",
            documento_diagramas: "documento_diagrama_1.pdf"
          }
        }
      }
    },
    {
      id: "17",
      nombre: "Calidad",
      abreviatura: "CL",
      descripcion: "Descripción general del departamento",
      detalles: {
        organigrama: "URL_o_descripción_del_organigrama",
        descripcion_de_puesto: {
          nombre_descripcion_puesto_1: {
            detalle_descripcion_puesto: "er since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
            documento_descripcion_puesto: "../../assets/909953614757-10239940959-ticket.pdf"
          },
          nombre_descripcion_puesto_2: {
            detalle_descripcion_puesto: "Descripción del puesto 2",
            documento_descripcion_puesto: "documento_puesto_2.pdf"
          }
        },
        procedimientos: {
          nombre_procedimiento_1: {
            "detalle_descripcion_procedimiento": "Descripción del procedimiento 1",
            "documento_procedimiento": "documento_procedimiento_1.pdf"
          },
          nombre_procedimiento_2: {
            detalle_descripcion_procedimiento: "Descripción del procedimiento 2",
            documento_procedimiento: "documento_procedimiento_2.pdf"
          }
        },
        politicas: {
          nombre_politica_1: {
            detalle_descripcion_politicas: "Descripción de la política 1",
            documento_politicas: "documento_politica_1.pdf"
          },
          nombre_politica_2: {
            detalle_descripcion_politicas: "Descripción de la política 2",
            documento_politicas: "documento_politica_2.pdf"
          }
        },
        guias: {
          nombre_guia_1: {
            detalle_descripcion_guias: "Descripción de la guía 1",
            documento_guias: "documento_guia_1.pdf"
          },
          nombre_guia_2: {
            detalle_descripcion_guias: "Descripción de la guía 2",
            documento_guias: "documento_guia_2.pdf"
          }
        },
        formatos: {
          nombre_formato_1: {
            detalle_descripcion_formatos: "Descripción del formato 1",
            documento_formatos: "documento_formato_1.pdf"
          }
        },
        anexos: {
          nombre_anexo_1: {
            detalle_descripcion_anexos: "Descripción del anexo 1",
            documento_anexos: "documento_anexo_1.pdf"
          }
        },
        diagramas: {
          nombre_diagrama_1: {
            detalle_descripcion_diagramas: "Descripción del diagrama 1",
            documento_diagramas: "documento_diagrama_1.pdf"
          }
        }
      }
    },
    {
      id: "18",
      nombre: "Mantenimiento",
      abreviatura: "MT",
      descripcion: "Descripción general del departamento",
      detalles: {
        organigrama: "URL_o_descripción_del_organigrama",
        descripcion_de_puesto: {
          nombre_descripcion_puesto_1: {
            detalle_descripcion_puesto: "er since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
            documento_descripcion_puesto: "../../assets/909953614757-10239940959-ticket.pdf"
          },
          nombre_descripcion_puesto_2: {
            detalle_descripcion_puesto: "Descripción del puesto 2",
            documento_descripcion_puesto: "documento_puesto_2.pdf"
          }
        },
        procedimientos: {
          nombre_procedimiento_1: {
            "detalle_descripcion_procedimiento": "Descripción del procedimiento 1",
            "documento_procedimiento": "documento_procedimiento_1.pdf"
          },
          nombre_procedimiento_2: {
            detalle_descripcion_procedimiento: "Descripción del procedimiento 2",
            documento_procedimiento: "documento_procedimiento_2.pdf"
          }
        },
        politicas: {
          nombre_politica_1: {
            detalle_descripcion_politicas: "Descripción de la política 1",
            documento_politicas: "documento_politica_1.pdf"
          },
          nombre_politica_2: {
            detalle_descripcion_politicas: "Descripción de la política 2",
            documento_politicas: "documento_politica_2.pdf"
          }
        },
        guias: {
          nombre_guia_1: {
            detalle_descripcion_guias: "Descripción de la guía 1",
            documento_guias: "documento_guia_1.pdf"
          },
          nombre_guia_2: {
            detalle_descripcion_guias: "Descripción de la guía 2",
            documento_guias: "documento_guia_2.pdf"
          }
        },
        formatos: {
          nombre_formato_1: {
            detalle_descripcion_formatos: "Descripción del formato 1",
            documento_formatos: "documento_formato_1.pdf"
          }
        },
        anexos: {
          nombre_anexo_1: {
            detalle_descripcion_anexos: "Descripción del anexo 1",
            documento_anexos: "documento_anexo_1.pdf"
          }
        },
        diagramas: {
          nombre_diagrama_1: {
            detalle_descripcion_diagramas: "Descripción del diagrama 1",
            documento_diagramas: "documento_diagrama_1.pdf"
          }
        }
      }
    },
    {
      id: "19",
      nombre: "Control ambiental",
      abreviatura: "CA",
      descripcion: "Descripción general del departamento",
      detalles: {
        organigrama: "URL_o_descripción_del_organigrama",
        descripcion_de_puesto: {
          nombre_descripcion_puesto_1: {
            detalle_descripcion_puesto: "er since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
            documento_descripcion_puesto: "../../assets/909953614757-10239940959-ticket.pdf"
          },
          nombre_descripcion_puesto_2: {
            detalle_descripcion_puesto: "Descripción del puesto 2",
            documento_descripcion_puesto: "documento_puesto_2.pdf"
          }
        },
        procedimientos: {
          nombre_procedimiento_1: {
            "detalle_descripcion_procedimiento": "Descripción del procedimiento 1",
            "documento_procedimiento": "documento_procedimiento_1.pdf"
          },
          nombre_procedimiento_2: {
            detalle_descripcion_procedimiento: "Descripción del procedimiento 2",
            documento_procedimiento: "documento_procedimiento_2.pdf"
          }
        },
        politicas: {
          nombre_politica_1: {
            detalle_descripcion_politicas: "Descripción de la política 1",
            documento_politicas: "documento_politica_1.pdf"
          },
          nombre_politica_2: {
            detalle_descripcion_politicas: "Descripción de la política 2",
            documento_politicas: "documento_politica_2.pdf"
          }
        },
        guias: {
          nombre_guia_1: {
            detalle_descripcion_guias: "Descripción de la guía 1",
            documento_guias: "documento_guia_1.pdf"
          },
          nombre_guia_2: {
            detalle_descripcion_guias: "Descripción de la guía 2",
            documento_guias: "documento_guia_2.pdf"
          }
        },
        formatos: {
          nombre_formato_1: {
            detalle_descripcion_formatos: "Descripción del formato 1",
            documento_formatos: "documento_formato_1.pdf"
          }
        },
        anexos: {
          nombre_anexo_1: {
            detalle_descripcion_anexos: "Descripción del anexo 1",
            documento_anexos: "documento_anexo_1.pdf"
          }
        },
        diagramas: {
          nombre_diagrama_1: {
            detalle_descripcion_diagramas: "Descripción del diagrama 1",
            documento_diagramas: "documento_diagrama_1.pdf"
          }
        }
      }
    },
    {
      id: "20",
      nombre: "Ley antilavado",
      abreviatura: "LA",
      descripcion: "Descripción general del departamento",
      detalles: {
        organigrama: "URL_o_descripción_del_organigrama",
        descripcion_de_puesto: {
          nombre_descripcion_puesto_1: {
            detalle_descripcion_puesto: "er since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
            documento_descripcion_puesto: "../../assets/909953614757-10239940959-ticket.pdf"
          },
          nombre_descripcion_puesto_2: {
            detalle_descripcion_puesto: "Descripción del puesto 2",
            documento_descripcion_puesto: "documento_puesto_2.pdf"
          }
        },
        procedimientos: {
          nombre_procedimiento_1: {
            "detalle_descripcion_procedimiento": "Descripción del procedimiento 1",
            "documento_procedimiento": "documento_procedimiento_1.pdf"
          },
          nombre_procedimiento_2: {
            detalle_descripcion_procedimiento: "Descripción del procedimiento 2",
            documento_procedimiento: "documento_procedimiento_2.pdf"
          }
        },
        politicas: {
          nombre_politica_1: {
            detalle_descripcion_politicas: "Descripción de la política 1",
            documento_politicas: "documento_politica_1.pdf"
          },
          nombre_politica_2: {
            detalle_descripcion_politicas: "Descripción de la política 2",
            documento_politicas: "documento_politica_2.pdf"
          }
        },
        guias: {
          nombre_guia_1: {
            detalle_descripcion_guias: "Descripción de la guía 1",
            documento_guias: "documento_guia_1.pdf"
          },
          nombre_guia_2: {
            detalle_descripcion_guias: "Descripción de la guía 2",
            documento_guias: "documento_guia_2.pdf"
          }
        },
        formatos: {
          nombre_formato_1: {
            detalle_descripcion_formatos: "Descripción del formato 1",
            documento_formatos: "documento_formato_1.pdf"
          }
        },
        anexos: {
          nombre_anexo_1: {
            detalle_descripcion_anexos: "Descripción del anexo 1",
            documento_anexos: "documento_anexo_1.pdf"
          }
        },
        diagramas: {
          nombre_diagrama_1: {
            detalle_descripcion_diagramas: "Descripción del diagrama 1",
            documento_diagramas: "documento_diagrama_1.pdf"
          }
        }
      }
    },
    {
      id: "21",
      nombre: "Seguridad e higiene",
      abreviatura: "SH",
      descripcion: "Descripción general del departamento",
      detalles: {
        organigrama: "URL_o_descripción_del_organigrama",
        descripcion_de_puesto: {
          nombre_descripcion_puesto_1: {
            detalle_descripcion_puesto: "er since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
            documento_descripcion_puesto: "../../assets/909953614757-10239940959-ticket.pdf"
          },
          nombre_descripcion_puesto_2: {
            detalle_descripcion_puesto: "Descripción del puesto 2",
            documento_descripcion_puesto: "documento_puesto_2.pdf"
          }
        },
        procedimientos: {
          nombre_procedimiento_1: {
            "detalle_descripcion_procedimiento": "Descripción del procedimiento 1",
            "documento_procedimiento": "documento_procedimiento_1.pdf"
          },
          nombre_procedimiento_2: {
            detalle_descripcion_procedimiento: "Descripción del procedimiento 2",
            documento_procedimiento: "documento_procedimiento_2.pdf"
          }
        },
        politicas: {
          nombre_politica_1: {
            detalle_descripcion_politicas: "Descripción de la política 1",
            documento_politicas: "documento_politica_1.pdf"
          },
          nombre_politica_2: {
            detalle_descripcion_politicas: "Descripción de la política 2",
            documento_politicas: "documento_politica_2.pdf"
          }
        },
        guias: {
          nombre_guia_1: {
            detalle_descripcion_guias: "Descripción de la guía 1",
            documento_guias: "documento_guia_1.pdf"
          },
          nombre_guia_2: {
            detalle_descripcion_guias: "Descripción de la guía 2",
            documento_guias: "documento_guia_2.pdf"
          }
        },
        formatos: {
          nombre_formato_1: {
            detalle_descripcion_formatos: "Descripción del formato 1",
            documento_formatos: "documento_formato_1.pdf"
          }
        },
        anexos: {
          nombre_anexo_1: {
            detalle_descripcion_anexos: "Descripción del anexo 1",
            documento_anexos: "documento_anexo_1.pdf"
          }
        },
        diagramas: {
          nombre_diagrama_1: {
            detalle_descripcion_diagramas: "Descripción del diagrama 1",
            documento_diagramas: "documento_diagrama_1.pdf"
          }
        }
      }
    },
    {
      id: "22",
      nombre: "Infraestructura",
      abreviatura: "IF",
      descripcion: "Descripción general del departamento",
      detalles: {
        organigrama: "URL_o_descripción_del_organigrama",
        descripcion_de_puesto: {
          nombre_descripcion_puesto_1: {
            detalle_descripcion_puesto: "er since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
            documento_descripcion_puesto: "../../assets/909953614757-10239940959-ticket.pdf"
          },
          nombre_descripcion_puesto_2: {
            detalle_descripcion_puesto: "Descripción del puesto 2",
            documento_descripcion_puesto: "documento_puesto_2.pdf"
          }
        },
        procedimientos: {
          nombre_procedimiento_1: {
            "detalle_descripcion_procedimiento": "Descripción del procedimiento 1",
            "documento_procedimiento": "documento_procedimiento_1.pdf"
          },
          nombre_procedimiento_2: {
            detalle_descripcion_procedimiento: "Descripción del procedimiento 2",
            documento_procedimiento: "documento_procedimiento_2.pdf"
          }
        },
        politicas: {
          nombre_politica_1: {
            detalle_descripcion_politicas: "Descripción de la política 1",
            documento_politicas: "documento_politica_1.pdf"
          },
          nombre_politica_2: {
            detalle_descripcion_politicas: "Descripción de la política 2",
            documento_politicas: "documento_politica_2.pdf"
          }
        },
        guias: {
          nombre_guia_1: {
            detalle_descripcion_guias: "Descripción de la guía 1",
            documento_guias: "documento_guia_1.pdf"
          },
          nombre_guia_2: {
            detalle_descripcion_guias: "Descripción de la guía 2",
            documento_guias: "documento_guia_2.pdf"
          }
        },
        formatos: {
          nombre_formato_1: {
            detalle_descripcion_formatos: "Descripción del formato 1",
            documento_formatos: "documento_formato_1.pdf"
          }
        },
        anexos: {
          nombre_anexo_1: {
            detalle_descripcion_anexos: "Descripción del anexo 1",
            documento_anexos: "documento_anexo_1.pdf"
          }
        },
        diagramas: {
          nombre_diagrama_1: {
            detalle_descripcion_diagramas: "Descripción del diagrama 1",
            documento_diagramas: "documento_diagrama_1.pdf"
          }
        }
      }
    },
    {
      id: "23",
      nombre: "Business Intelligence",
      abreviatura: "BI",
      descripcion: "Descripción general del departamento",
      detalles: {
        organigrama: "URL_o_descripción_del_organigrama",
        descripcion_de_puesto: {
          nombre_descripcion_puesto_1: {
            detalle_descripcion_puesto: "er since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
            documento_descripcion_puesto: "../../assets/909953614757-10239940959-ticket.pdf"
          },
          nombre_descripcion_puesto_2: {
            detalle_descripcion_puesto: "Descripción del puesto 2",
            documento_descripcion_puesto: "documento_puesto_2.pdf"
          }
        },
        procedimientos: {
          nombre_procedimiento_1: {
            "detalle_descripcion_procedimiento": "Descripción del procedimiento 1",
            "documento_procedimiento": "documento_procedimiento_1.pdf"
          },
          nombre_procedimiento_2: {
            detalle_descripcion_procedimiento: "Descripción del procedimiento 2",
            documento_procedimiento: "documento_procedimiento_2.pdf"
          }
        },
        politicas: {
          nombre_politica_1: {
            detalle_descripcion_politicas: "Descripción de la política 1",
            documento_politicas: "documento_politica_1.pdf"
          },
          nombre_politica_2: {
            detalle_descripcion_politicas: "Descripción de la política 2",
            documento_politicas: "documento_politica_2.pdf"
          }
        },
        guias: {
          nombre_guia_1: {
            detalle_descripcion_guias: "Descripción de la guía 1",
            documento_guias: "documento_guia_1.pdf"
          },
          nombre_guia_2: {
            detalle_descripcion_guias: "Descripción de la guía 2",
            documento_guias: "documento_guia_2.pdf"
          }
        },
        formatos: {
          nombre_formato_1: {
            detalle_descripcion_formatos: "Descripción del formato 1",
            documento_formatos: "documento_formato_1.pdf"
          }
        },
        anexos: {
          nombre_anexo_1: {
            detalle_descripcion_anexos: "Descripción del anexo 1",
            documento_anexos: "documento_anexo_1.pdf"
          }
        },
        diagramas: {
          nombre_diagrama_1: {
            detalle_descripcion_diagramas: "Descripción del diagrama 1",
            documento_diagramas: "documento_diagrama_1.pdf"
          }
        }
      }
    },

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
