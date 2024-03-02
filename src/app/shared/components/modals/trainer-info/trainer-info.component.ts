import { Component, ElementRef, Input, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { AppConfig } from 'src/app/shared/services/config/app.config';
import { ConfigService } from 'src/app/shared/services/config/config.service';
import { HttpService } from 'src/app/shared/services/http/http.service';
import { AlertService } from 'src/app/shared/services/alert/alert.service';
import { LoaderService } from "src/app/shared/services/loader/loader.service";
import { Fancybox } from "@fancyapps/ui";
@Component({
  selector: 'app-trainer-info',
  templateUrl: './trainer-info.component.html',
  styleUrls: ['./trainer-info.component.scss']
})
export class TrainerInfoComponent {

  @Input() config: AppConfig = {};
  @Input() trainerID: any;
  referral_code="3d78021";  
  data_count: any = '10';
  //@ViewChild('fancyboxLink') fancyboxLink: ElementRef;
  trainer_info = {'trainer_id': 1, name:'KEILA GUEDES', role: 'Body Building Trainer', description:'I trained services for customers of all sizes, specializing in creating stylish, modern websites, web services and online stores. My passion is to design digital user experiences through the bold interface and meaningful interactions', 
    intro_url:'../../../../../assets/img/team/AZARIAS.mp4', photo:'../../../../../assets/img/team/alrege.jpg', 
    certificates: ['crossfit L1 and L2', 'Crossfit gymnastics L1']};
  
  constructor(
    public activeModal: NgbActiveModal,
    private configService: ConfigService,
    private loaderService: LoaderService,    
    private httpService: HttpService,
    private alertService: AlertService,    
    private elRef: ElementRef    
  ){
        
  }

  ngOnInit() {
    console.log('trainer id value ', this.trainerID);
    console.log('trainer_info value ', this.trainer_info);
    this.getTrainerInfo(this.trainerID);

    Fancybox.bind(this.elRef.nativeElement, '[data-fancybox]');  
    //Fancybox.bind(this.fancyboxLink.nativeElement, '[data-fancybox]');  
  }

  onClose(){
    this.activeModal.close();
  }

  ngOnDestroy() {
    Fancybox.unbind(this.elRef.nativeElement);
    Fancybox.close();
  }

  //get the trainer's info
  async getTrainerInfo(trainer_id){
    console.log('detailed trainer id', trainer_id);
    this.referral_code = '123';    

    this.loaderService.setLoading(false);    
    // this.httpService.get('profile').then((response: any) => {
    //   this.loaderService.setLoading(false);      
    //   if(response){
    //     if (!response) {
    //       console.log('get_non_profile');
    //       return;
    //     }         
    //     this.referral_code = response.referral_code;
    //     this.data_count = response.number_of_use_referral_code;        
    //   }
    // }).catch(error => this.alertService.alert('Login', error.message, 'error'));
  }

  //do a call with trainer
  doCall(hr){
    window.open(hr, '_blank');
  }
}

