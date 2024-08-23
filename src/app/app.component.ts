import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { BarraNavegacionComponent } from "./shared/barra-navegacion/barra-navegacion.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    BarraNavegacionComponent
],
  template: `
    <app-barra-navegacion/>
    <router-outlet/>
  `
})
export class AppComponent {
  title = 'IntranetKenworth';
}
