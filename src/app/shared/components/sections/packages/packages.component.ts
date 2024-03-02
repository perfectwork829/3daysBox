import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import Swiper from 'swiper';
import { Product } from 'src/app/shared/models';
import { AppConfig } from 'src/app/shared/services/config/app.config';
import * as AOS from 'aos';
// import { register } from 'swiper/element/bundle';
// register();
@Component({
  selector: 'app-packages',
  templateUrl: './packages.component.html',
  styleUrls: ['./packages.component.scss']
})
export class PackagesComponent implements OnInit{
  @Input() subscriptions: Product[]= [];
  @Input() config: AppConfig = {};
  //@Output() onProductSelected: EventEmitter<any> = new EventEmitter();
  
  @Output() onProductSelected: EventEmitter<{param1: any, param2: any}> = new EventEmitter();
  @Output() onSelectGender: EventEmitter<any> = new EventEmitter();
  
  bLangFlag = false;
  private swiper: Swiper | undefined;
  selected_gender: string = "all";
  constructor(
  ) {
  }

  ngOnInit() {    
    this.bLangFlag = this.config.isArabic;    
    this.config.user.gender = this.selected_gender;
  }

  ngAfterContentInit(){
    AOS.init({
      once: true,      
    });    
    this.swiper = new Swiper('.packages-slider-container', {      
      loop: true,
      slidesPerView: 3,
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

  ngAfterViewChecked() {
    // Your function to run whenever the page content is changed    
    // Call your function here    
    this.updateSwiper();
  }

  //Go to the next slider
  plusSlides() {
    if (this.swiper) {
      this.swiper.slideNext(); 
    }
  }

  //Update the swiper slider
  updateSwiper() {
    this.swiper.update();
  }

  ngAfterViewInit() {
    this.updateSwiper();
    console.log('after view init');
  }

  //Choose the gender
  selectGender (gender:string):void{
		this.selected_gender = gender;
    this.config.user.gender = gender;
    this.onSelectGender.emit(gender);     
    this.updateSwiper();       
	}

  //go to the previous slider
  previw() {
    if (this.swiper) {
      this.swiper.slidePrev(); 
    }
  }

}
