import {Component, OnInit} from '@angular/core';
import { NgbModal, NgbModalRef } from "@ng-bootstrap/ng-bootstrap";
import { Title, Meta } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { CoreTranslationService } from 'src/app/shared/services/config/translation.service';
import { SignupComponent } from "src/app/shared/components/auth/signup/signup.component";
import { CheckOutComponent } from "src/app/shared/components/modals/check-out/check-out.component";
import { FreeTrialComponent } from 'src/app/shared/components/modals/free-trial/free-trial.component';
import { ProgramContentComponent } from 'src/app/shared/components/modals/program-content/program-content.component';
import { AppConfig } from "src/app/shared/services/config/app.config";
import { HttpService } from 'src/app/shared/services/http/http.service';
import { AlertService } from "src/app/shared/services/alert/alert.service";
import { ConfigService } from "src/app/shared/services/config/config.service";
import { User, Product } from "src/app/shared/models";
import { LoaderService } from "src/app/shared/services/loader/loader.service";

@Component({
  selector: 'app-academy',
  templateUrl: './academy.component.html',
  styleUrls: ['./academy.component.scss']
})
export class AcademyComponent implements OnInit{
  config: AppConfig = {};
  user: User = {};  
  branches: {name: string, image: string, duration: string, title?: string, type_box?: string[], footer_description?: string, age_type?: string[], head_description?: string }[] = [
    {name: 'Qurtobah Kids', image: 'assets/img/class/Kids1.jpg', duration: 'Duration 00 Minutes', title: 'Fitness Elevation', footer_description:"footer_description", head_description: "Taekwondo_description", age_type: ['Age groups', '4-11 years', '12-15 years'], type_box: ['Balance', 'Muscle Strengthening', 'Self-defense']},
    {name: 'Al-hamra Kids', image: 'assets/img/class/Kids2.jpg', duration: 'Duration 45 Minutes', title: 'Fitness Boost', footer_description:"footer_description", head_description: "boxing_description", age_type: ['Age groups', '4-11 years', '12-15 years'], type_box: ['Balance', 'Muscle Strengthening', 'Self-defense']}    
  ];
  subscriptions: Product[]= [];
  modalReference!: NgbModalRef;
  program: any;

  constructor(
    private title: Title,
		private meta: Meta,
    private httpService: HttpService,
    private configService: ConfigService,
    private modalService: NgbModal,
    private alertService: AlertService,
    private router: Router,
    private coreTranslationService: CoreTranslationService,
    private loaderService: LoaderService
  ) {
  }

  ngOnInit() {
    this.title.setTitle(this.coreTranslationService.translateText('Academy - 3 Days'));
		this.meta.addTags([{
        property: 'og:title',
        content: this.coreTranslationService.translateText('Academy - 3 Days'),
      },
    ]);
    this.config = this.configService.appSettingsValues;
    this.user = this.config.user || {};
    this.onFetchProducts('male');
    //this.onFetchPrograms('male');
    if(!this.config.isAcademy){
      this.onFreeTrial();        
    }        
  }
  
  //Get the program data list
  onFetchClasses(){
    this.httpService.post('classes', {}).then((response: any)=>{
      this.branches = response;      
    }).catch((err) => {      
      console.log(err);                        
      this.alertService.alert('info', err.message, 'error');        
    });
  }

  //Get the Programs data list
  onFetchPrograms(gender){
    this.loaderService.setLoading(true);    
    this.httpService.post('programs/list', {}).then((response: any)=>{
      this.branches = response.filter(item=> item.gender==gender);
      //this.branches = response;
      this.loaderService.setLoading(false);       
      console.log('programms list', this.branches);
    }).catch((err) => {      
      console.log(err);                        
      this.alertService.alert('info', err.message, 'error');        
    });
  }
  
  
  onBuyBranch(program: any) {
    console.log('program data here',program);
    return this.alertService.alert('Branches for Children', 'Coming Soon', 'info');
    // this.modalReference = this.modalService.open(ProgramContentComponent, { centered: true, size: 'md' });
    // this.modalReference.componentInstance.config = this.config;
    // this.modalReference.componentInstance.program = program;
    // this.modalReference.result.then((result) => {      
    //   if (result) {

    //   }
    // }, (reason) => {
    //   console.log('reason', reason);
    // });
  }

  //Get the Products data list
  onFetchProducts(gender){
    console.log('id home---->', this.config.user.client_id);     
    this.loaderService.setLoading(true);          
    this.httpService.post('products', {client_id: this.config.user.client_id}).then((response: any)=>{      
      console.log('product all list here', response);
      this.subscriptions = response.map(item => {
        const filteredBranches = item.branches.filter(sub_item => {
          return (sub_item.branch_category === gender) && (item.type=="subscription");
        });
        return { ...item, branches: filteredBranches };
      }).filter(item => item.branches.length > 0);       
      this.loaderService.setLoading(false);       
      console.log('product list', this.subscriptions);
    }).catch((err) => {      
      console.log(err);                        
      this.alertService.alert('info', err.message, 'error');        
    });
  } 

  onBuyProduct(product: Product) {
    if(!product.id) return;
    console.log('product', product);
    
    if(!this.config.token){
      let currentRoute = this.router.url.replace(/\#.*/gi, '').replace('/', '');
      if(currentRoute === '') currentRoute = 'home';

      this.modalReference = this.modalService.open(SignupComponent, { centered: true, size: 'xl' });
      this.modalReference.componentInstance.user = this.user;      
      this.modalReference.componentInstance.config = this.config;      
      this.modalReference.componentInstance.selectedProduct = product;
      this.modalReference.componentInstance.type = currentRoute;
      
      this.modalReference.result.then((result) => {
        console.log('modalOpenLogin', result);
        if (result && result.signup) {
          
        }
      }, (reason) => {
        console.log('reason', reason);
      });

    }else{//checkout 
      console.log('checkout the page!!');
      this.modalReference = this.modalService.open(CheckOutComponent, { centered: true, size: 'xl' });
      this.modalReference.componentInstance.config = this.config;
      this.modalReference.componentInstance.product = product;
      this.modalReference.result.then((result) => {
        console.log('onBuyProduct', result);
      }, (reason) => {
        console.log('reason', reason);
      });
    }    
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
}
