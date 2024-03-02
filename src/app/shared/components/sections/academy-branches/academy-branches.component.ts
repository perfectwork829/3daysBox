import {Component, EventEmitter, Input, Output} from '@angular/core';
import { AppConfig } from 'src/app/shared/services/config/app.config';
import * as AOS from 'aos';

@Component({
  selector: 'app-academy-branches',
  templateUrl: './academy-branches.component.html',
  styleUrls: ['./academy-branches.component.scss']
})
export class AcademyBranchesComponent {
  @Input() branches: {name: string, image: string, duration: string}[] = [];
  @Input() section: string = '';
  @Input() config: AppConfig = {};
  @Input() page: string = '';
  selected_gender: string = "male";
  min_number = 60;  
  @Output() onSelectGender: EventEmitter<any> = new EventEmitter();
  @Output() onBranchSelected: EventEmitter<any> = new EventEmitter();
  constructor() {
  }

  ngOnInit() {
    AOS.init({
      once: true,      
    });
  } 
}
