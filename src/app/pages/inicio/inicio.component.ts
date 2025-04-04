import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroSliderComponent } from '../../components/hero-slider/hero-slider.component';

@Component({
  standalone: true,
  imports: [CommonModule, HeroSliderComponent],
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss']
})
export class InicioComponent {}