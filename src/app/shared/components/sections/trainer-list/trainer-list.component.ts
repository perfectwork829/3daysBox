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
  selector: 'app-trainer-list',
  templateUrl: './trainer-list.component.html',
  styleUrls: ['./trainer-list.component.scss']
})
export class TrainerListComponent {
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
    Fancybox.bind(this.elRef.nativeElement, '[data-fancybox]');  
  }  

  ngOnDestroy() {
    Fancybox.unbind(this.elRef.nativeElement);
    Fancybox.close();
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
