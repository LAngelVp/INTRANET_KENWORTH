import { Component } from '@angular/core';
import { UpperCasePipe } from '@angular/common';
import { DepartamentosComponent } from '../../components/departamentos/departamentos.component';

@Component({
  selector: 'app-sistema-gestion-calidad',
  standalone: true,
  imports: [
    DepartamentosComponent,
    UpperCasePipe
  ],
  templateUrl: './sistema-gestion-calidad.component.html',
  styleUrl: './sistema-gestion-calidad.component.sass'
})
export class SistemaGestionCalidadComponent {
  titulo: string = 'Sistema de gestión de calidad';
  descripcion : string = 'Explora nuestro apartado de gestión de calidad: organigramas, descripciones de puestos, procedimientos, guías y políticas para optimizar tu empresa. Todo lo necesario para una gestión efectiva y una calidad sin igual';
  imagen_5s : string = '../../assets/Images/SGC.png'
  titulo_opciones : string = 'Departamentos'
}
