import {Component, ElementRef, OnDestroy, OnInit, Input} from '@angular/core';
import Swiper from 'swiper';
import {Fancybox} from "@fancyapps/ui";
import { AppConfig } from 'src/app/shared/services/config/app.config';
import { CoreTranslationService } from 'src/app/shared/services/config/translation.service';
import { HttpService } from 'src/app/shared/services/http/http.service';
import { ConfigService } from "src/app/shared/services/config/config.service";
import { NgbModal, NgbModalRef } from "@ng-bootstrap/ng-bootstrap";
import { AlertService } from "src/app/shared/services/alert/alert.service";
import { Router } from '@angular/router';
import { LoaderService } from "src/app/shared/services/loader/loader.service";
import { TrainerInfoComponent } from "src/app/shared/components/modals/trainer-info/trainer-info.component";

import * as AOS from 'aos';

@Component({
  selector: 'app-trainers',
  templateUrl: './trainers.component.html',
  styleUrls: ['./trainers.component.scss']
})
export class TrainersComponent implements OnInit, OnDestroy{
  @Input() config: AppConfig = {};
  @Input() trainers: any = [];  
  bLangFlag = false;
  private swiper: Swiper | undefined;
  modalReference!: NgbModalRef;  

  constructor(
    private elRef: ElementRef,
    private httpService: HttpService,
    private configService: ConfigService,
    private modalService: NgbModal,
    private alertService: AlertService,    
    private router: Router,
    private loaderService: LoaderService,
    private coreTranslationService: CoreTranslationService
    ) {    
  }

  ngOnInit() {
    AOS.init({
      once: true,      
    });
    this.bLangFlag = this.config.isArabic;
    this.swiper = new Swiper('.team-slider-container', {
      loop: true,
      slidesPerView: 3,
      spaceBetween:11,
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
    Fancybox.bind(this.elRef.nativeElement, '[data-fancybox]');  

  }

  //go to the next slider
  plusSlides() {
    if (this.swiper) {      
      this.swiper.slideNext(); 
    }
  }

  //go to the previous slider
  previewSlides() {
    if (this.swiper) {
      this.swiper.slidePrev(); 
    }
  }

  ngOnDestroy() {
    Fancybox.unbind(this.elRef.nativeElement);
    Fancybox.close();
    this.swiper.destroy();
  }

  //Open the detailed Trainer info
  onViewTrainer(trainer_id){            
    // const title= "Success";
    // const body = "Trainer member ID" + trainer_id;    
    // this.alertService.alert(title, body, 'success');  
    
    this.modalReference = this.modalService.open(TrainerInfoComponent, { centered: true, size: 'lg'});
    this.modalReference.componentInstance.config = this.config; 
    this.modalReference.componentInstance.trainerID = trainer_id;
    this.modalReference.result.then((result) => {               
    }, (reason) => {
      console.log('reason', reason);
    }); 
    this.modalReference.hidden.subscribe(()=>{
      //location.reload();
    });  
  }
}
