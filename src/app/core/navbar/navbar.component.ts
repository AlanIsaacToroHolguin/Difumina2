import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  standalone: true, // ✔️ Añade esto
  selector: 'app-navbar',
  imports: [CommonModule, RouterLink], // ✔️ Añade módulos necesarios
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  menuItems = [
    { text: 'Inicio', path: '/inicio' },
    { text: 'Miembros', path: '/miembros' },
    { text: 'Lanzamientos', path: '/lanzamientos' },
    { text: 'Contacto', path: '/contacto' },
    { text: 'Tienda', path: '/tienda' }
  ];
}