import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { Metodologia5sComponent } from './pages/metodologia5s/metodologia5s.component';
import { SistemaGestionCalidadComponent } from './pages/sistema-gestion-calidad/sistema-gestion-calidad.component';
import { DepartamentosComponent } from './components/departamentos/departamentos.component';
import { RecursosHumanosComponent } from './pages/recursos-humanos/recursos-humanos.component';
import { CursosAsesoriasComponent } from './pages/cursos-asesorias/cursos-asesorias.component';
import { NotFoundComponent } from './shared/not-found/not-found.component';

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
    {
        path: 'recursos-humanos',
        component: RecursosHumanosComponent
    },
    {
        path: 'cursos-y-asesorias',
        component: CursosAsesoriasComponent
    },
    {
        path: '**',
        component: NotFoundComponent
    }
];
