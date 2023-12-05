import { Routes } from '@angular/router';
import { listaEmpleado } from '../app/componentes/lista_empleado/lista.component'

export const routes: Routes = [
    { path: 'empleado/list', component: listaEmpleado},
];
