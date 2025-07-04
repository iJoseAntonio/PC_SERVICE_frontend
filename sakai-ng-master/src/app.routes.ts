import { Routes } from '@angular/router';
import { AppLayout } from './app/layout/component/app.layout';
import { Dashboard } from './app/pages/dashboard/dashboard';
import { Documentation } from './app/pages/documentation/documentation';
import { Landing } from './app/pages/landing/landing';
import { Notfound } from './app/pages/notfound/notfound';
import { GestionDatosLicenciasComponent } from './app/gestion-datos-licencias/gestion-datos-licencias.component';
import { GestionDatosDispositivosComponent } from './app/gestion-datos-dispositivos/gestion-datos-dispositivos.component';

export const appRoutes: Routes = [
    {
        path: '',
        component: AppLayout,
        children: [
            { path: '', component: Dashboard },
            { path: 'uikit', loadChildren: () => import('./app/pages/uikit/uikit.routes') },
            { path: 'documentation', component: Documentation },
            { path: 'pages', loadChildren: () => import('./app/pages/pages.routes') },
            { path: 'gestion-datos-licencias', component: GestionDatosLicenciasComponent },
            { path: 'licencias', component: GestionDatosLicenciasComponent },
            { path: 'gestion-datos-dispositivos', component: GestionDatosDispositivosComponent }
        ]
    },
    { path: 'landing', component: Landing },
    { path: 'notfound', component: Notfound },
    { path: 'auth', loadChildren: () => import('./app/pages/auth/auth.routes') },
    { path: '**', redirectTo: '/notfound' }
];