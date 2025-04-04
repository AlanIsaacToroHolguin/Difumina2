import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { MiembrosComponent } from './miembros/miembros.component';
import { LanzamientosComponent } from './lanzamientos/lanzamientos.component';
import { ContactoComponent } from './contacto/contacto.component';
import { TiendaComponent } from './tienda/tienda.component';

@NgModule({
  declarations: [
    InicioComponent,
    MiembrosComponent,
    LanzamientosComponent,
    ContactoComponent,
    TiendaComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class PagesModule { }