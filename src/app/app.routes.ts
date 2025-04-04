import { Routes } from '@angular/router';
import { InicioComponent } from './pages/inicio/inicio.component';
import { MiembrosComponent } from './pages/miembros/miembros.component';
import { LanzamientosComponent } from './pages/lanzamientos/lanzamientos.component';
import { ContactoComponent } from './pages/contacto/contacto.component';
import { TiendaComponent } from './pages/tienda/tienda.component';

export const routes: Routes = [
  { path: '', redirectTo: '/inicio', pathMatch: 'full' },
  { path: 'inicio', component: InicioComponent },
  { path: 'miembros', component: MiembrosComponent },
  { path: 'lanzamientos', component: LanzamientosComponent },
  { path: 'contacto', component: ContactoComponent },
  { path: 'tienda', component: TiendaComponent },
  { path: '**', redirectTo: '/inicio' }
];

