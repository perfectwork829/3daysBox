import {AfterViewInit, Component, OnInit} from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { CoreTranslationService } from 'src/app/shared/services/config/translation.service';
import { NgbModal, NgbModalRef } from "@ng-bootstrap/ng-bootstrap";
import { Router } from '@angular/router';
import { HttpService } from 'src/app/shared/services/http/http.service';
import { AlertService } from "src/app/shared/services/alert/alert.service";
import { ConfigService } from "src/app/shared/services/config/config.service";
import { AppConfig } from 'src/app/shared/services/config/app.config';
import { Product, User } from 'src/app/shared/models';
import { CheckOutComponent } from "src/app/shared/components/modals/check-out/check-out.component";
import { FreeTrialComponent } from 'src/app/shared/components/modals/free-trial/free-trial.component';
import { SignupComponent } from "src/app/shared/components/auth/signup/signup.component";
import { LoaderService } from "src/app/shared/services/loader/loader.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit, AfterViewInit{
  config: AppConfig = {};
  user: User = {};
  trainers: any[] = [];  
  partners: any[] = [];  
  subscriptions: Product[]= [];
  modalReference!: NgbModalRef;  
  programs: {name: string, image: string, duration: string}[] = [];
  carouselItems : any[] = [
    {id: 1, customer_name:"Johnathan P.", exclamation_title:"Lost1 10kgs",description:"I lost 22 pounds and lost my belly, he amazing thing is that I really could only workout once a week",time:"4:00-5:00",count:3,photo:"person2.png", custom_img: "../../../assets/img/photos/workout.bg1.png"},
    {id: 2, customer_name:"Cherry S.", exclamation_title:"Lost2 10kgs",description:"I lost 22 pounds and lost my belly, he amazing thing is that I really could only workout once a week",time:"4:00-5:00",count:3,photo:"person2.png", custom_img: "../../../assets/img/photos/workout.bg1.png"},
    {id: 3, customer_name:"Adam T.", exclamation_title:"Lost3 10kgs",description:"I lost 22 pounds and lost my belly, he amazing thing is that I really could only workout once a week",time:"4:00-5:00",count:3,photo:"person2.png", custom_img: "../../../assets/img/photos/workout.bg1.png"},
    {id: 4, customer_name:"Gig.", exclamation_title:"Lost4 10kgs",description:"I lost 22 pounds and lost my belly, he amazing thing is that I really could only workout once a week",time:"4:00-5:00",count:3,photo:"person2.png", custom_img: "../../../assets/img/photos/workout.bg1.png"},
    {id: 5, customer_name:"Max", exclamation_title:"Lost5 10kgs",description:"I lost 22 pounds and lost my belly, he amazing thing is that I really could only workout once a week",time:"4:00-5:00",count:3,photo:"person2.png", custom_img: "../../../assets/img/photos/workout.bg1.png"},
    {id: 6, customer_name:"Wagner", exclamation_title:"Lost6 10kgs",description:"I lost 22 pounds and lost my belly, he amazing thing is that I really could only workout once a week",time:"4:00-5:00",count:3,photo:"person2.png", custom_img: "../../../assets/img/photos/workout.bg1.png"},
    {id: 7, customer_name:"Sebastian", exclamation_title:"Lost7 10kgs",description:"I lost 22 pounds and lost my belly, he amazing thing is that I really could only workout once a week",time:"4:00-5:00",count:3,photo:"person2.png", custom_img: "../../../assets/img/photos/workout.bg1.png"},
  ];

  memberships: any[]= [
    {id: 1, main_title:"INDIVIDUAL - 60 MINUTES", sub_title:"LEARNERS PACKAGE", description:"I lost 22 pounds and lost my belly, he amazing thing is that I really could only workout once a week", price: "3600.00", session: 12, period: 1, week: 3},
    {id: 2, main_title:"INDIVIDUAL - 60 MINUTES", sub_title:"LEARNERS PACKAGE", description:"I lost 22 pounds and lost my belly, he amazing thing is that I really could only workout once a week", price: "6120.00", session: 24, period: 2, week: 3},
    {id: 3, main_title:"INDIVIDUAL - 60 MINUTES", sub_title:"LEARNERS PACKAG", description:"I lost 22 pounds and lost my belly, he amazing thing is that I really could only workout once a week", price: "7990.00", session: 36, period: 3, week: 3},
    {id: 4, main_title:"INDIVIDUAL - 60 MINUTES", sub_title:"COMMITMENT PACKAGE", description:"I lost 22 pounds and lost my belly, he amazing thing is that I really could only workout once a week", price: "6120.00", session: 24, period: 2, week: 4},
    {id: 5, main_title:"INDIVIDUAL - 60 MINUTES", sub_title:"COMMITMENT PACKAGE", description:"I lost 22 pounds and lost my belly, he amazing thing is that I really could only workout once a week", price: "10400.00", session: 48, period: 2, week: 4},
    {id: 6, main_title:"INDIVIDUAL - 60 MINUTES", sub_title:"COMMITMENT PACKAGE", description:"I lost 22 pounds and lost my belly, he amazing thing is that I really could only workout once a week", price: "13580.00", session: 72, period: 2, week: 4},
    {id: 7, main_title:"INDIVIDUAL - 60 MINUTES", sub_title:"FOCUSED PACKAGE", description:"I lost 22 pounds and lost my belly, he amazing thing is that I really could only workout once a week", price: "7990.00", session: 36, period: 2, week: 5},
    
  ];

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
    this.title.setTitle(this.coreTranslationService.translateText('Home -3 Days'));
		this.meta.addTags([{
        property: 'og:title',
        content: this.coreTranslationService.translateText('Home -3 Days'),
      },
    ]);
    this.config = this.configService.appSettingsValues;
    this.user = this.config.user || {};
    console.log('token here', this.config);
    if(!this.config.isTrial){
      this.onFreeTrial();        
    }
  }
  
  ngAfterViewInit() {
    this.onFetchProducts('all');
    this.onFetchTrainers();
    this.onFetchPrograms('male');
    this.onFetchPartners();
  }

  //Get the Products data list
  // onFetchProducts(){
  //   console.log('id home---->', this.httpService.client_id);
  //   this.httpService.post('products', {client_id: this.config.user.client_id}).then((response: any)=>{
  //     this.subscriptions = response;
  //   }).catch((err) => {      
  //     console.log(err);                        0
  //     this.alertService.alert('info', err.message, 'error');        
  //   });
  // }

  onFetchProducts(gender){
    console.log('id home---->', this.httpService.client_id);     
    
    this.loaderService.setLoading(true);          
    this.httpService.post('products', {client_id: this.config.user.client_id}).then((response: any)=>{      
      console.log('product all list here', response);
      // if(gender == 'all')
      //   this.subscriptions = response.filter(item=> item.type=="subscription");
      // else
      //   this.subscriptions = response.map(item => {
      //     const filteredBranches = item.branches.filter(sub_item => {
      //       return (sub_item.branch_category === gender) && (item.type=="subscription");
      //     });
      //     return { ...item, branches: filteredBranches };
      //   }).filter(item => item.branches.length > 0);       
      if(gender == 'all')
        this.subscriptions = response.filter(item=> item.type!="");
      else
        this.subscriptions = response.map(item => {
          const filteredBranches = item.branches.filter(sub_item => {
            return (sub_item.branch_category === gender) && (item.type!="");
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


  //Get the Trainers data list
  onFetchTrainers(){
    this.httpService.post('trainers/list', {}).then((response: any)=>{
      this.trainers = response;
    }).catch((err) => {      
      console.log(err);                        
      this.alertService.alert('info', err.message, 'error');        
    });
  }

  //Get the Programs data list
  onFetchPrograms(gender){
    this.loaderService.setLoading(true);    
    this.httpService.post('programs/list', {}).then((response: any)=>{
      this.programs = response.filter(item=> item.gender==gender);
      //this.programs = response;
      this.loaderService.setLoading(false);       
      console.log('programms list', this.programs);
    }).catch((err) => {      
      console.log(err);                        
      this.alertService.alert('info', err.message, 'error');        
    });
  }

  //Get the Partners data list
  onFetchPartners(){
    this.httpService.post('partners/list', {}).then((response: any)=>{
      this.partners = response;
      console.log('partners list', this.partners);
    }).catch((err) => {      
      console.log(err);                        
      this.alertService.alert('info', err.message, 'error');        
    });
  }

  //Buy the product.
  onBuyProduct(product: Product) {
    if(!product.id) return;
    console.log('product--home', product);
    
    if(!this.config.token){
      let currentRoute = this.router.url.replace(/\#.*/gi, '').replace('/', '');
      if(currentRoute === '') currentRoute = 'home';
      console.log('gender here', this.user);
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

  onBuyProgram(program: any) {
    return this.alertService.alert('Programs', 'Coming Soon', 'info');
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

