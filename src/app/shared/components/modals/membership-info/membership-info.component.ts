import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { AppConfig } from 'src/app/shared/services/config/app.config';
import { ConfigService } from 'src/app/shared/services/config/config.service';
import { HttpService } from 'src/app/shared/services/http/http.service';
import { AlertService } from 'src/app/shared/services/alert/alert.service';
import { LoaderService } from "src/app/shared/services/loader/loader.service";


@Component({
  selector: 'app-membership-info',
  templateUrl: './membership-info.component.html',
  styleUrls: ['./membership-info.component.scss']
})
export class MembershipInfoComponent {
  @Input() config: AppConfig = {};
  @Input() trainerID: any;
  referral_code="3d78021";  
  data_count: any = '10';

  constructor(
    public activeModal: NgbActiveModal,
    private configService: ConfigService,
    private loaderService: LoaderService,    
    private httpService: HttpService,
    private alertService: AlertService,    
  ){
        
  }

  ngOnInit() {
    console.log('trainer id value ', this.trainerID);
    this.getMembershipInfo(this.trainerID);
  }

  onClose(){
    this.activeModal.close();
  }

  //get the memership's info
  async getMembershipInfo(trainer_id){
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

  //do call to the trainer.
  doCall(hr){
    window.open(hr, '_blank');
  }
}
