import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import Swiper from 'swiper';
import { Product } from 'src/app/shared/models';
import { AppConfig } from 'src/app/shared/services/config/app.config';
import * as AOS from 'aos';

@Component({
  selector: 'app-testimonial-slider',
  templateUrl: './testimonial-slider.component.html',
  styleUrls: ['./testimonial-slider.component.scss']
})
export class TestimonialSliderComponent {
  @Input() programs: {name: string, image: string, duration: string}[] = [];
  @Input() section: string = '';
  @Input() config: AppConfig = {};
  @Input() page: string = '';  
  @Input() carouselItems : any[] = [];
  private swiper: Swiper | undefined;
  bLangFlag = false;
  
  ngOnInit() {
    AOS.init({
      once: true,      
    });   
     
    this.swiper = new Swiper('.testimonial-slider-container', {      
      loop: true,
      slidesPerView: 2,
      spaceBetween : 10,      
      allowTouchMove:true,
      allowSlideNext:true,
      allowSlidePrev: true,
      effect: 'fade',
      fadeEffect: {
        crossFade: true,
      },
      
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      breakpoints: {
        1200:{
          slidesPerView : 3
        },

        992:{
          slidesPerView : 3
        },

        768:{
          slidesPerView : 2
        },

        576:{
          slidesPerView : 2
        },

        0:{
          slidesPerView : 1
        }
      }
    });
  }
  
   //Go to the next slider
  plusSlides() {
    this.swiper.slideNext(); 
  }
  
  //Go to the previous slider
  previewSlides() {
    if (this.swiper) {
      this.swiper.slidePrev(); // You can use slidePrev() for the previous button
    }
  }
}
