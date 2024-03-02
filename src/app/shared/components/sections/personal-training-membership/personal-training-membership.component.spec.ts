import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonalTrainingMembershipComponent } from './personal-training-membership.component';

describe('PersonalTrainingMembershipComponent', () => {
  let component: PersonalTrainingMembershipComponent;
  let fixture: ComponentFixture<PersonalTrainingMembershipComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PersonalTrainingMembershipComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PersonalTrainingMembershipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
