import {Component, OnInit, ElementRef} from '@angular/core';
import { NgbModal, NgbModalRef } from "@ng-bootstrap/ng-bootstrap";
import { Title, Meta } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { CoreTranslationService } from 'src/app/shared/services/config/translation.service';
import { FreeTrialComponent } from 'src/app/shared/components/modals/free-trial/free-trial.component';
import { AppConfig } from "src/app/shared/services/config/app.config";
import { HttpService } from 'src/app/shared/services/http/http.service';
import { AlertService } from "src/app/shared/services/alert/alert.service";
import { ConfigService } from "src/app/shared/services/config/config.service";
import { User } from "src/app/shared/models";
import { LoaderService } from "src/app/shared/services/loader/loader.service";
import { Fancybox } from "@fancyapps/ui";
@Component({
  selector: 'app-trainer',
  templateUrl: './trainer.component.html',
  styleUrls: ['./trainer.component.scss']
})
export class TrainerComponent {
  config: AppConfig = {};
  user: User = {};  
  programs: {name: string, image: string, duration: string, title?: string, type_box?: string[], footer_description?: string, age_type?: string[], head_description?: string }[] = [
    {name: 'Taekwondo', image: 'assets/img/class/Kids1.jpg', duration: 'Duration 00 Minutes', title: 'Fitness Elevation', footer_description:"footer_description", head_description: "Taekwondo_description", age_type: ['Age groups', '4-11 years', '12-15 years'], type_box: ['Balance', 'Muscle Strengthening', 'Self-defense']},
    {name: 'kickboxing', image: 'assets/img/class/Kids2.jpg', duration: 'Duration 45 Minutes', title: 'Fitness Boost', footer_description:"footer_description", head_description: "boxing_description", age_type: ['Age groups', '4-11 years', '12-15 years'], type_box: ['Balance', 'Muscle Strengthening', 'Self-defense']}    
  ];  
  modalReference!: NgbModalRef;
  program: any;
  trainers: any = [];

  constructor(
    private title: Title,
		private meta: Meta,
    private httpService: HttpService,
    private configService: ConfigService,
    private modalService: NgbModal,
    private alertService: AlertService,
    private router: Router,
    private coreTranslationService: CoreTranslationService,
    private loaderService: LoaderService,
    private elRef: ElementRef    
  ) {
  }

  ngOnInit() {
    this.title.setTitle(this.coreTranslationService.translateText('Trainers - 3 Days'));
		this.meta.addTags([{
        property: 'og:title',
        content: this.coreTranslationService.translateText('Trainers - 3 Days'),
      },
    ]);
    this.config = this.configService.appSettingsValues;
    this.user = this.config.user || {};
    
    if(!this.config.isAcademy){
      this.onFreeTrial();        
    }        
    this.onFetchTrainers();

    Fancybox.bind(this.elRef.nativeElement, '[data-fancybox]');  
  }
  

  //Get the Trainers data list
  onFetchTrainers(){
    this.loaderService.setLoading(true);    
    this.httpService.post('trainers/list', {}).then((response: any)=>{
      this.trainers = response;
      console.log('trainer page\'s info list', this.trainers);
      this.loaderService.setLoading(false);    
    }).catch((err) => {      
      console.log(err);                        
      this.alertService.alert('info', err.message, 'error');        
    });
  }
  
  onFreeTrial() {
    this.modalReference = this.modalService.open(FreeTrialComponent, { centered: true, size: 'lg' });
    this.modalReference.componentInstance.config = this.config;
    this.modalReference.result.then((result) => {
      console.log('FreeTrialComponent', result);
      if (result) {

      }
    }, (reason) => {
      console.log('reason', reason);
    });
  }

  ngOnDestroy() {
    Fancybox.unbind(this.elRef.nativeElement);
    Fancybox.close();
  }
}
