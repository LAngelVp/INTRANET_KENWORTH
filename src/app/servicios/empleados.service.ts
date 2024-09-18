import { Injectable } from '@angular/core';
import { EmpleadosModel } from '../models/empleados-model';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmpleadosService {

  lista_empleados: EmpleadosModel[] = [
    {
      N_Empleado: "1",
      nombre: "Juan Pérez",
      departamento: "Recursos Humanos",
      puesto: "Contratación",
      extension: "101",
      mail: "juan.perez@example.com",
      foto: 'https://www.svgrepo.com/show/499764/user.svg'
    },
    {
      N_Empleado: "2",
      nombre: "María García",
      departamento: "Tecnología",
      puesto: "Desarrollo",
      extension: "102",
      mail: "maria.garcia@example.com",
      foto: 'https://www.svgrepo.com/show/499764/user.svg'
    },
    {
      N_Empleado: "3",
      nombre: "Carlos Ramírez",
      departamento: "Finanzas",
      puesto: "Contabilidad",
      extension: "103",
      mail: "carlos.ramirez@example.com",
      foto: 'https://www.svgrepo.com/show/499764/user.svg'
    },
    {
      N_Empleado: "4",
      nombre: "Luisa Fernández",
      departamento: "Marketing",
      puesto: "Publicidad",
      extension: "104",
      mail: "luisa.fernandez@example.com",
      foto: 'https://www.svgrepo.com/show/499764/user.svg'
    },
    {
      N_Empleado: "5",
      nombre: "Ana Martínez",
      departamento: "Ventas",
      puesto: "Relaciones Comerciales",
      extension: "105",
      mail: "ana.martinez@example.com",
      foto: 'https://www.svgrepo.com/show/499764/user.svg'
    },
    {
      N_Empleado: "6",
      nombre: "Pedro Gómez",
      departamento: "Operaciones",
      puesto: "Logística",
      extension: "106",
      mail: "pedro.gomez@example.com",
      foto: 'https://www.svgrepo.com/show/499764/user.svg'
    },
    {
      N_Empleado: "7",
      nombre: "Laura Sánchez",
      departamento: "Recursos Humanos",
      puesto: "Capacitación",
      extension: "107",
      mail: "laura.sanchez@example.com",
      foto: 'https://www.svgrepo.com/show/499764/user.svg'
    },
    {
      N_Empleado: "8",
      nombre: "Roberto Torres",
      departamento: "Tecnología",
      puesto: "Soporte Técnico",
      extension: "108",
      mail: "roberto.torres@example.com",
      foto: 'https://www.svgrepo.com/show/499764/user.svg'
    },
    {
      N_Empleado: "9",
      nombre: "Elena Morales",
      departamento: "Finanzas",
      puesto: "Auditoría",
      extension: "109",
      mail: "elena.morales@example.com",
      foto: 'https://www.svgrepo.com/show/499764/user.svg'
    },
    {
      N_Empleado: "10",
      nombre: "Miguel Díaz",
      departamento: "Marketing",
      puesto: "Investigación de Mercado",
      extension: "110",
      mail: "miguel.diaz@example.com",
      foto: 'https://www.svgrepo.com/show/499764/user.svg'
    },
    {
      N_Empleado: "11",
      nombre: "Carmen López",
      departamento: "Ventas",
      puesto: "Atención al Cliente",
      extension: "111",
      mail: "carmen.lopez@example.com",
      foto: 'https://www.svgrepo.com/show/499764/user.svg'
    },
    {
      N_Empleado: "12",
      nombre: "Andrés Pérez",
      departamento: "Operaciones",
      puesto: "Control de Calidad",
      extension: "112",
      mail: "andres.perez@example.com",
      foto: 'https://www.svgrepo.com/show/499764/user.svg'
    },
    {
      N_Empleado: "13",
      nombre: "Patricia Romero",
      departamento: "Recursos Humanos",
      puesto: "Desarrollo Organizacional",
      extension: "113",
      mail: "patricia.romero@example.com",
      foto: 'https://www.svgrepo.com/show/499764/user.svg'
    },
    {
      N_Empleado: "14",
      nombre: "Sergio Vázquez",
      departamento: "Tecnología",
      puesto: "Administración de Bases de Datos",
      extension: "114",
      mail: "sergio.vazquez@example.com",
      foto: 'https://www.svgrepo.com/show/499764/user.svg'
    },
    {
      N_Empleado: "15",
      nombre: "Verónica Ruiz",
      departamento: "Finanzas",
      puesto: "Tesorería",
      extension: "115",
      mail: "veronica.ruiz@example.com",
      foto: 'https://www.svgrepo.com/show/499764/user.svg'
    },
    {
      N_Empleado: "16",
      nombre: "Raúl Navarro",
      departamento: "Marketing",
      puesto: "Comunicación Corporativa",
      extension: "116",
      mail: "raul.navarro@example.com",
      foto: 'https://www.svgrepo.com/show/499764/user.svg'
    },
    {
      N_Empleado: "17",
      nombre: "Gloria Jiménez",
      departamento: "Ventas",
      puesto: "Gerente de Cuentas",
      extension: "117",
      mail: "gloria.jimenez@example.com",
      foto: 'https://www.svgrepo.com/show/499764/user.svg'
    },
    {
      N_Empleado: "18",
      nombre: "Emilio Castro",
      departamento: "Operaciones",
      puesto: "Planificación",
      extension: "118",
      mail: "emilio.castro@example.com",
      foto: 'https://www.svgrepo.com/show/499764/user.svg'
    },
    {
      N_Empleado: "19",
      nombre: "Claudia Herrera",
      departamento: "Recursos Humanos",
      puesto: "Relaciones Laborales",
      extension: "119",
      mail: "claudia.herrera@example.com",
      foto: 'https://www.svgrepo.com/show/499764/user.svg'
    },
    {
      N_Empleado: "20",
      nombre: "Jorge Ortiz",
      departamento: "Tecnología",
      puesto: "Seguridad Informática",
      extension: "120",
      mail: "jorge.ortiz@example.com",
      foto: 'https://www.svgrepo.com/show/499764/user.svg'
    }
];


  obtener_empleados():Observable<EmpleadosModel[]>{
    return of(this.lista_empleados);
  }
}
