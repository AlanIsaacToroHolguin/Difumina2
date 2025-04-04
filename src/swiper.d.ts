// src/swiper.d.ts
declare module 'swiper' {
    import Swiper from 'swiper/types/swiper-class';
    import { Navigation, Pagination, Autoplay } from 'swiper/types/modules';
    
    export default Swiper;
    export { Navigation, Pagination, Autoplay };
  }
  
  declare module 'swiper/css';
  declare module 'swiper/css/navigation';
  declare module 'swiper/css/pagination';