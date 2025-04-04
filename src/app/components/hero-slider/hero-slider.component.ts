import { Component, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';

// Importar Swiper con la versión específica que tienes
import Swiper, { Navigation, Pagination, Autoplay } from 'swiper';

// Instalar módulos Swiper
Swiper.use([Navigation, Pagination, Autoplay]);

@Component({
  standalone: true,
  selector: 'app-hero-slider',
  imports: [CommonModule],
  templateUrl: './hero-slider.component.html',
  styleUrls: ['./hero-slider.component.scss']
})
export class HeroSliderComponent implements AfterViewInit {
  @ViewChild('swiperContainer') swiperContainer!: ElementRef;
  swiper: Swiper;
  
  slides = [
    {
      image: 'assets/slides/Difumina2nico.jpg',
      title: 'Bienvenido',
      subtitle: 'Texto descriptivo aquí'
    },
    {
      image: 'assets/slides/people1.jpg',
      title: 'Bienvenido',
      subtitle: 'Texto descriptivo aquí'
    },{
      image: 'assets/slides/Difumina2nico2.jpg',
      title: 'Bienvenido',
      subtitle: 'Texto descriptivo aquí'
    },
    {
      image: 'assets/slides/people2.jpg',
      title: 'Bienvenido',
      subtitle: 'Texto descriptivo aquí'
    }
  ];
  
  ngAfterViewInit() {
    // Inicializar Swiper después de que el componente se renderiza
    this.initSwiper();
  }
  
  private initSwiper() {
    // Asegúrate de que el elemento existe antes de inicializar
    if (this.swiperContainer && this.swiperContainer.nativeElement) {
      this.swiper = new Swiper(this.swiperContainer.nativeElement, {
        modules: [Navigation, Pagination, Autoplay],
        slidesPerView: 1,
        spaceBetween: 30,
        loop: true,
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        },
        autoplay: {
          delay: 3000,
          disableOnInteraction: false
        }
      });
    }
  }
}