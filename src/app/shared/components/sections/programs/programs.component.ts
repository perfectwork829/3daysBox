import {Component, EventEmitter, Input, Output} from '@angular/core';
import { AppConfig } from 'src/app/shared/services/config/app.config';
import * as AOS from 'aos';

@Component({
  selector: 'app-programs',
  templateUrl: './programs.component.html',
  styleUrls: ['./programs.component.scss']
})
export class ProgramsComponent {
  @Input() programs: {name: string, image: string, duration: string}[] = [];
  @Input() section: string = '';
  @Input() config: AppConfig = {};
  @Input() page: string = '';
  selected_gender: string = "male";
  min_number = 60;
  @Output() onSelectGender: EventEmitter<any> = new EventEmitter();
  @Output() onProgramSelected: EventEmitter<any> = new EventEmitter();
  constructor() {
  }

  ngOnInit() {
    AOS.init({
      once: true,      
    });
  }

  //Select the gender
  selectGender (gender:string):void{
		this.selected_gender = gender;
    this.onSelectGender.emit(gender);           
	}
}
