import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcademyBranchesComponent } from './academy-branches.component';

describe('AcademyBranchesComponent', () => {
  let component: AcademyBranchesComponent;
  let fixture: ComponentFixture<AcademyBranchesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AcademyBranchesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AcademyBranchesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
