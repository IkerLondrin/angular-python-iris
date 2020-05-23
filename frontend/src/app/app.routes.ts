import {Routes} from "@angular/router";
import {HomeComponent} from "./components/pages/home/home.component";
import { EstadisticasComponent } from './components/pages/estadisticas/estadisticas.component';

export const ROUTES: Routes = [
    // routes from pages
    {path: 'home', component: HomeComponent, data: {title: 'Modelado'}},
    {path: 'visualizacion', component: EstadisticasComponent, data: {title: 'Visualización'}},

    // default redirect
    {path: '**', redirectTo: '/home'}
];
