import {AfterViewInit, Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import { Product } from 'src/app/shared/models';
import { AppConfig } from 'src/app/shared/services/config/app.config';
import { ConfigService } from "src/app/shared/services/config/config.service";
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss']
})
export class ProductItemComponent implements OnInit, AfterViewInit{
  @Input() subscriptions: Product[]= [];  
  @Input() personalTrainings: Product[]= [];  
  @Input() config: AppConfig = {};  
  @Output() onSubscriptionSelected: EventEmitter<any> = new EventEmitter();
  @Output() onSelectGender: EventEmitter<any> = new EventEmitter();
  
  sPersonalTrainings: Product [] = [];  
  sSubscriptions: Product [] = [];  
  
  isLangflag: boolean = false; 
  selected_tab :number = 1;
  currency = 'SAR';
  selected_gender: string = 'male';
  constructor(
    private configService: ConfigService,
  ) {   
  }

  ngOnInit(){        
    this.isLangflag = this.config.isArabic;    
    this.selectGender('male');    
    console.log('new payment key', environment.paymentKey);
  }  
  
  ngAfterViewInit(){
    console.log('ngAfterViewInit personal data', this.personalTrainings);
    console.log('ngAfterViewInit subscription data', this.subscriptions);    
  }

  //select the tab
  selectTab (tab:number):void{
		this.selected_tab = tab;
	}  
 
  //Select the gender
  selectGender (gender:string):void{
		this.selected_gender = gender;
    this.onSelectGender.emit(gender);    
	}
}
