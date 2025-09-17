import { Component, ViewChild, ElementRef, AfterViewInit, ChangeDetectorRef } from '@angular/core';
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
  @ViewChild('swiperContainer', { static: false }) swiperContainer!: ElementRef;
  swiper: Swiper | null = null;
  constructor(private cdr: ChangeDetectorRef) {}
  
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
    // Forzar detección de cambios para asegurar que el DOM esté listo
    this.cdr.detectChanges();
    setTimeout(() => {
      this.initSwiper();
    }, 0);
  }
  
  private initSwiper(retryCount: number = 0) {
    // Destruir instancia previa si existe
    if (this.swiper) {
      this.swiper.destroy(true, true);
      this.swiper = null;
    }
    // Inicializar Swiper solo si el contenedor existe
    if (this.swiperContainer && this.swiperContainer.nativeElement) {
      // Verificar que los botones de navegación existen en el DOM
      const nextBtn = document.querySelector('.swiper-button-next');
      const prevBtn = document.querySelector('.swiper-button-prev');
      if (!nextBtn || !prevBtn) {
        // Si no existen, reintentar hasta 5 veces con un pequeño delay
        if (retryCount < 5) {
          setTimeout(() => this.initSwiper(retryCount + 1), 100);
        }
        return;
      }
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