import { Injectable } from '@angular/core';
import { EmpleadosModel } from '../models/empleados-model';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmpleadosService {

  lista_empleados : EmpleadosModel[] = [
    {
      id: "1",
      nombre: "Juan Pérez",
      departamento: "Recursos Humanos",
      puesto: "Contratación",
      extension: "101",
      foto: 'https://www.svgrepo.com/show/499764/user.svg'
    },
    {
      id: "2",
      nombre: "María García",
      departamento: "Tecnología",
      puesto: "Desarrollo",
      extension: "102",
      foto: 'https://www.svgrepo.com/show/499764/user.svg'
    },
    {
      id: "3",
      nombre: "Carlos Ramírez",
      departamento: "Finanzas",
      puesto: "Contabilidad",
      extension: "103",
      foto: 'https://www.svgrepo.com/show/499764/user.svg'
    },
    {
      id: "4",
      nombre: "Luisa Fernández",
      departamento: "Marketing",
      puesto: "Publicidad",
      extension: "104",
      foto: 'https://www.svgrepo.com/show/499764/user.svg'
    },
    {
      id: "5",
      nombre: "Ana Martínez",
      departamento: "Ventas",
      puesto: "Relaciones Comerciales",
      extension: "105",
      foto: 'https://www.svgrepo.com/show/499764/user.svg'
    },
    {
      id: "6",
      nombre: "Pedro Gómez",
      departamento: "Operaciones",
      puesto: "Logística",
      extension: "106",
      foto: 'https://www.svgrepo.com/show/499764/user.svg'
    },
    {
      id: "7",
      nombre: "Laura Sánchez",
      departamento: "Recursos Humanos",
      puesto: "Capacitación",
      extension: "107",
      foto: 'https://www.svgrepo.com/show/499764/user.svg'
    },
    {
      id: "8",
      nombre: "Roberto Torres",
      departamento: "Tecnología",
      puesto: "Soporte Técnico",
      extension: "108",
      foto: 'https://www.svgrepo.com/show/499764/user.svg'
    },
    {
      id: "9",
      nombre: "Elena Morales",
      departamento: "Finanzas",
      puesto: "Auditoría",
      extension: "109",
      foto: 'https://www.svgrepo.com/show/499764/user.svg'
    },
    {
      id: "10",
      nombre: "Miguel Díaz",
      departamento: "Marketing",
      puesto: "Investigación de Mercado",
      extension: "110",
      foto: 'https://www.svgrepo.com/show/499764/user.svg'
    },
    {
      id: "11",
      nombre: "Carmen López",
      departamento: "Ventas",
      puesto: "Atención al Cliente",
      extension: "111",
      foto: 'https://www.svgrepo.com/show/499764/user.svg'
    },
    {
      id: "12",
      nombre: "Andrés Pérez",
      departamento: "Operaciones",
      puesto: "Control de Calidad",
      extension: "112",
      foto: 'https://www.svgrepo.com/show/499764/user.svg'
    },
    {
      id: "13",
      nombre: "Patricia Romero",
      departamento: "Recursos Humanos",
      puesto: "Desarrollo Organizacional",
      extension: "113",
      foto: 'https://www.svgrepo.com/show/499764/user.svg'
    },
    {
      id: "14",
      nombre: "Sergio Vázquez",
      departamento: "Tecnología",
      puesto: "Administración de Bases de Datos",
      extension: "114",
      foto: 'https://www.svgrepo.com/show/499764/user.svg'
    },
    {
      id: "15",
      nombre: "Verónica Ruiz",
      departamento: "Finanzas",
      puesto: "Tesorería",
      extension: "115",
      foto: 'https://www.svgrepo.com/show/499764/user.svg'
    },
    {
      id: "16",
      nombre: "Raúl Navarro",
      departamento: "Marketing",
      puesto: "Comunicación Corporativa",
      extension: "116",
      foto: 'https://www.svgrepo.com/show/499764/user.svg'
    },
    {
      id: "17",
      nombre: "Gloria Jiménez",
      departamento: "Ventas",
      puesto: "Gerente de Cuentas",
      extension: "117",
      foto: 'https://www.svgrepo.com/show/499764/user.svg'
    },
    {
      id: "18",
      nombre: "Emilio Castro",
      departamento: "Operaciones",
      puesto: "Planificación",
      extension: "118",
      foto: 'https://www.svgrepo.com/show/499764/user.svg'
    },
    {
      id: "19",
      nombre: "Claudia Herrera",
      departamento: "Recursos Humanos",
      puesto: "Relaciones Laborales",
      extension: "119",
      foto: 'https://www.svgrepo.com/show/499764/user.svg'
    },
    {
      id: "20",
      nombre: "Jorge Ortiz",
      departamento: "Tecnología",
      puesto: "Seguridad Informática",
      extension: "120",
      foto: 'https://www.svgrepo.com/show/499764/user.svg'
    }
  ]

  obtener_empleados():Observable<EmpleadosModel[]>{
    return of(this.lista_empleados);
  }
}
