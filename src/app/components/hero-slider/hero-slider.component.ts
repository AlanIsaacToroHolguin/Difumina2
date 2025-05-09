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
      subtitle: 'Revive la energía de nuestro último concierto en vivo - 2025'
    },
    {
      image: 'assets/slides/Difumina2barnaby4.jpg',
      title: 'Festival Obsian IV',
      subtitle: 'Un momento inolvidable donde todo comenzó a brillar'
    },
    {
      image: 'assets/slides/people2.jpg',
      title: 'Público',
      subtitle: 'Nuestra mayor inspiración: ustedes, quienes nos hacen vibrar'
    },
    {
      image: 'assets/slides/Rutacosmica.jpg',
      title: 'Nuestro primer álbum',
      subtitle: 'Sumérgete en el viaje sonoro de *Ruta Cósmica*'
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
        spaceBetween: 35,
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