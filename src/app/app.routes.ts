import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { Metodologia5sComponent } from './pages/metodologia5s/metodologia5s.component';
import { SistemaGestionCalidadComponent } from './pages/sistema-gestion-calidad/sistema-gestion-calidad.component';

export const routes: Routes = [
    {
        path: '',
        component: HomeComponent
    },
    {
        path: 'metodologia5s',
        component: Metodologia5sComponent
    },
    {
        path: 'sistema-de-gestion-de-calidad',
        component: SistemaGestionCalidadComponent
    },
];
