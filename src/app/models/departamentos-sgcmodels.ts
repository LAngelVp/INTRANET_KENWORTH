// Define la estructura para cada tipo de detalle
interface DescripcionPuestoDetalle {
    detalle_descripcion_puesto: string;
    documento_descripcion_puesto: string;
}
interface ProcedimientoDetalle {
    detalle_descripcion_procedimiento: string;
    documento_procedimiento: string;
}
interface PoliticasDetalle {
    detalle_descripcion_politicas: string;
    documento_politicas: string;
}

interface GuiaDetalle {
    detalle_descripcion_guias: string;
    documento_guias: string;
}

interface FormatoDetalle {
    detalle_descripcion_formatos: string;
    documento_formatos: string;
}

interface AnexoDetalle {
    detalle_descripcion_anexos: string;
    documento_anexos: string;
}

interface DiagramaDetalle {
    detalle_descripcion_diagramas: string;
    documento_diagramas: string;
}

// Define la estructura general para los detalles
interface Detalles {
    organigrama: string;
    descripcion_de_puesto: {
        [nombre_descripcion_puesto: string]: DescripcionPuestoDetalle;
};
    procedimientos: {
        [nombre_procedimientos: string]:ProcedimientoDetalle;
};
    politicas: {
        [nombre_politicas: string]: PoliticasDetalle;
};
    guias: {
        [nombre_guias: string]: GuiaDetalle;
};
    formatos: {
        [nombre_formatos: string]: FormatoDetalle;
};
    anexos: {
        [nombre_anexos: string]: AnexoDetalle;
};
    diagramas: {
        [nombre_diagrama: string]: DiagramaDetalle;
};
}

export interface DepartamentosSGCModels {
    id: string;
    nombre: string;
    abreviatura: string;
    descripcion: string;
    detalles: Detalles;
}
