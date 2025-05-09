import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroSliderComponent } from '../../components/hero-slider/hero-slider.component';
import { FooterComponent } from '../../shared/footer/footer.component'; // Ruta corregida

@Component({
  standalone: true,
  imports: [
    CommonModule,
    HeroSliderComponent,
    FooterComponent // Añade el FooterComponent aquí
  ],
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss']
})
export class InicioComponent { }