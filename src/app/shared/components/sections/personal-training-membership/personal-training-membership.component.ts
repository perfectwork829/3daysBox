import {Component, ElementRef, OnDestroy, OnInit, Input} from '@angular/core';
import Swiper from 'swiper';
import { Product } from 'src/app/shared/models';
import { AppConfig } from 'src/app/shared/services/config/app.config';
import * as AOS from 'aos';
import {Fancybox} from "@fancyapps/ui";
import { CoreTranslationService } from 'src/app/shared/services/config/translation.service';
import { HttpService } from 'src/app/shared/services/http/http.service';
import { ConfigService } from "src/app/shared/services/config/config.service";
import { NgbModal, NgbModalRef } from "@ng-bootstrap/ng-bootstrap";
import { AlertService } from "src/app/shared/services/alert/alert.service";
import { Router } from '@angular/router';
import { LoaderService } from "src/app/shared/services/loader/loader.service";
import { MembershipInfoComponent } from "src/app/shared/components/modals/membership-info/membership-info.component";

@Component({
  selector: 'app-personal-training-membership',
  templateUrl: './personal-training-membership.component.html',
  styleUrls: ['./personal-training-membership.component.scss']
})
export class PersonalTrainingMembershipComponent {
  @Input() memberships: any[]= [];
  @Input() config: AppConfig = {};
  //@Output() onProductSelected: EventEmitter<any> = new EventEmitter();
  
  bLangFlag = false;
  private swiper: Swiper | undefined;
  selected_gender: string = "all";
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
    this.bLangFlag = this.config.isArabic;    
    this.config.user.gender = this.selected_gender;
  }

  ngAfterContentInit(){
    AOS.init({
      once: true,      
    });    
    this.swiper = new Swiper('.personalTraining-member-slider-container', {      
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
    // console.log('Page content has changed');
    // Call your function here    
    this.updateSwiper();
  }

  //Go to the next slider
  plusSlides() {
    if (this.swiper) {
      this.swiper.slideNext(); 
    }
  }

  //go to the previous slider
  previw() {
    if (this.swiper) {
      this.swiper.slidePrev(); 
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
  
  onViewMembership(membership_id){            
    // const title= "Success";
    // const body = "Trainer member ID" + trainer_id;    
    // this.alertService.alert(title, body, 'success');  
    
    this.modalReference = this.modalService.open(MembershipInfoComponent, { centered: true, size: 'lg'});
    this.modalReference.componentInstance.config = this.config; 
    this.modalReference.componentInstance.trainerID = membership_id;
    this.modalReference.result.then((result) => {               
    }, (reason) => {
      console.log('reason', reason);
    }); 
    this.modalReference.hidden.subscribe(()=>{
      //location.reload();
    });  
  }
}
