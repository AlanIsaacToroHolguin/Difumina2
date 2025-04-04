import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true, // ✔️ Añade esto
  selector: 'app-miembros',
  imports: [CommonModule], // ✔️ Añade módulos necesarios
  templateUrl: './miembros.component.html',
  styleUrls: ['./miembros.component.scss']
})
export class MiembrosComponent {}