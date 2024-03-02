import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { GoogleMapsModule } from '@angular/google-maps';
import { CoreDirectivesModule } from "./directives/directives";
import {FormsModule} from "@angular/forms";
import { NgSelectModule } from '@ng-select/ng-select';
import {NgbInputDatepicker, NgbTimepicker} from "@ng-bootstrap/ng-bootstrap";
import { PipesModule } from "./pipes/pipes";
import { ClipboardModule } from 'ngx-clipboard';
import { ImageCropperModule } from 'ngx-image-cropper';

//individual components
import { ForgetPasswordComponent } from './components/auth/forget-password/forget-password.component';
import { ResetPasswordComponent } from './components/auth/reset-password/reset-password.component';
import { PageSliderComponent } from './components/page-slider/page-slider.component';
import { SpinnerComponent } from './components/spinner/spinner/spinner.component';
import { LoginComponent } from './components/auth/login/login.component';
import { SignupComponent } from './components/auth/signup/signup.component';
import { GoogleMapComponent } from './components/google-map/google-map.component';
import { MenuSliderComponent } from './components/menu-slider/menu-slider.component';
import { SliderComponent } from 'src/app/shared/components/slider/slider.component';

//modal components
import { ContactFormComponent } from './components/modals/contact-form/contact-form.component';
import { MembershipInfoComponent } from './components/modals/membership-info/membership-info.component';
import { TrainerInfoComponent } from './components/modals/trainer-info/trainer-info.component';
import { FreeTrialComponent } from './components/modals/free-trial/free-trial.component';
import { LanguageComponent } from './components/modals/language/language.component';
import { ProfileComponent } from './components/modals/profile/profile.component';
import { CheckOutComponent } from './components/modals/check-out/check-out.component';
import { SuspendSubscriptionComponent } from './components/modals/suspend-subscription/suspend-subscription.component';
import { RateBookingComponent } from './components/modals/rate-booking/rate-booking.component';
import { ProgramContentComponent } from './components/modals/program-content/program-content.component';
import { CancelBookingComponent } from './components/modals/cancel-booking/cancel-booking.component';
import { NotificationsComponent } from './components/modals/notifications/notifications.component';
import { ConfirmCodeComponent } from './components/modals/confirm-code/confirm-code.component';
import { ReferralCodeComponent } from './components/modals/referral-code/referral-code.component';
import { ConfirmDialogComponent } from './components/modals/confirm-dialog/confirm-dialog.component';
import { BranchSettingComponent } from './components/modals/branch-setting/branch-setting.component';
import { TermsConditionsComponent } from './components/modals/terms-conditions/terms-conditions.component';

//section components
import { PersonalTrainingMembershipComponent } from './components/sections/personal-training-membership/personal-training-membership.component';
import { PackagesComponent } from './components/sections/packages/packages.component';
import { MembershipsComponent } from './components/sections/memberships/memberships.component';
import { BillStatementComponent } from './components/sections/bill-statement/bill-statement.component';
import { BookingItemsComponent } from './components/sections/booking-items/booking-items.component';
import { PersonalTrainingItemComponent } from './components/sections/personal-training-item/personal-training-item.component';
import { KidsAcademyComponent } from './components/sections/kids-academy/kids-academy.component';
import { SubscriptionsComponent } from './components/sections/subscriptions/subscriptions.component';
import { ProfileDetailComponent } from './components/sections/profile-detail/profile-detail.component';
import { TestimonialSliderComponent } from './components/sections/testimonial-slider/testimonial-slider.component';
import { ProfileInfoComponent } from './components/sections/profile-info/profile-info.component';
import { ClubBranchesComponent } from './components/sections/club-branches/club-branches.component';
import { ClubBranchesItemComponent } from './components/sections/club-branches-item/club-branches-item.component';
import { ProductItemComponent } from './components/sections/product-item/product-item.component';
import { ProgramsComponent } from './components/sections/programs/programs.component';
import { AboutUsComponent } from './components/sections/about-us/about-us.component';
import { PartnersComponent } from './components/sections/partners/partners.component';
import { TrainersComponent } from './components/sections/trainers/trainers.component';
import { TrainerListComponent } from './components/sections/trainer-list/trainer-list.component';
import { AcademyBranchesComponent } from './components/sections/academy-branches/academy-branches.component';

@NgModule({
  declarations: [SliderComponent, MenuSliderComponent, PartnersComponent, TrainersComponent, ContactFormComponent, AboutUsComponent, GoogleMapComponent, PackagesComponent, MembershipsComponent, LoginComponent, SignupComponent, PageSliderComponent, FreeTrialComponent, LanguageComponent, ProfileComponent, ProgramsComponent, CheckOutComponent, SpinnerComponent,
    PersonalTrainingItemComponent, KidsAcademyComponent, ProductItemComponent, SubscriptionsComponent,ProfileDetailComponent, MembershipInfoComponent,
    ProfileInfoComponent, ClubBranchesComponent, ReferralCodeComponent, ClubBranchesItemComponent, TrainerInfoComponent, TrainerListComponent,
    ConfirmDialogComponent, BookingItemsComponent, SuspendSubscriptionComponent, RateBookingComponent, CancelBookingComponent, 
    BillStatementComponent, NotificationsComponent, BranchSettingComponent,ConfirmCodeComponent, ForgetPasswordComponent, AcademyBranchesComponent,
    ResetPasswordComponent, TermsConditionsComponent, ProgramContentComponent, TestimonialSliderComponent, PersonalTrainingMembershipComponent],
  imports: [
    CommonModule,
    RouterLink,
    TranslateModule,
    GoogleMapsModule,
    CoreDirectivesModule,
    FormsModule,
    NgSelectModule,
    NgbInputDatepicker,
    NgbTimepicker,
    PipesModule,
    ClipboardModule,
    ImageCropperModule
  ],
  exports: [SliderComponent, MenuSliderComponent, ContactFormComponent, TrainersComponent, PartnersComponent, AboutUsComponent, 
    GoogleMapComponent, PackagesComponent, MembershipsComponent, CoreDirectivesModule, PipesModule, MembershipInfoComponent,
    LoginComponent, SignupComponent, PageSliderComponent, ProfileComponent, ProgramsComponent, TrainerInfoComponent,AcademyBranchesComponent,
    CheckOutComponent, SpinnerComponent, PersonalTrainingItemComponent, KidsAcademyComponent, TestimonialSliderComponent,
    ProductItemComponent, SubscriptionsComponent, ProfileDetailComponent, ProfileInfoComponent, ClubBranchesComponent, TrainerListComponent,
    ReferralCodeComponent, ClubBranchesItemComponent, ConfirmDialogComponent, BookingItemsComponent, SuspendSubscriptionComponent,
    RateBookingComponent, CancelBookingComponent, BillStatementComponent, NotificationsComponent, BranchSettingComponent,ConfirmCodeComponent, 
    ForgetPasswordComponent, ResetPasswordComponent, TermsConditionsComponent, ProgramContentComponent, PersonalTrainingMembershipComponent]
})
export class SharedModule { }
