import { Component, Input, OnInit } from '@angular/core';
import { CursosService } from '../../servicios/cursos.service';
import { Cursos } from '../../models/cursos';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cursos-asesorias',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './cursos-asesorias.component.html',
  styleUrl: './cursos-asesorias.component.sass'
})
export class CursosAsesoriasComponent implements OnInit {

  lista_cursos: Cursos[] = [];
  video: any;

  constructor(
    private cursos : CursosService
  ){}

  ngOnInit(): void {
    this.cursos.mostrar_videos().subscribe(data_cursos => {
      return this.lista_cursos = data_cursos;
    });
  }

  abrirModal(item: any){
    this.video = item;
    console.log(this.video);
  }
}
