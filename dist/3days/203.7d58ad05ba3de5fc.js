"use strict";(self.webpackChunk_3days=self.webpackChunk_3days||[]).push([[203],{1203:(ke,Z,a)=>{a.r(Z),a.d(Z,{HomeModule:()=>be});var c=a(6895),u=a(7750),P=a(2476),x=a(6529),L=a(2813),e=a(4650),b=a(1481),h=a(3348),A=a(138),_=a(9453),v=a(9379),k=a(7226),C=a(1130),q=a(1859),d=a(4463);let O=(()=>{class i{static#e=this.\u0275fac=function(o){return new(o||i)};static#t=this.\u0275cmp=e.Xpm({type:i,selectors:[["app-menu-slider"]],decls:35,vars:12,consts:[[1,"features-area","features-default-area"],[1,"container-fluid","p-0"],[1,"row","row-gutter-0"],[1,"col-sm-6","col-lg-3"],[1,"featured-item"],[1,"featured-thumb"],["src","assets/img/class/f1.png","alt","Image"],[1,"featured-info"],["src","assets/img/class/f2.jpg","alt","Image"],["src","assets/img/class/f3.jpg","alt","Image"],["src","assets/img/class/f4.png","alt","Image"]],template:function(o,n){1&o&&(e.TgZ(0,"section",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"div",4)(5,"div",5),e._UZ(6,"img",6),e.qZA(),e.TgZ(7,"div",7)(8,"h5"),e._uU(9),e.ALo(10,"translate"),e.qZA()()()(),e.TgZ(11,"div",3)(12,"div",4)(13,"div",5),e._UZ(14,"img",8),e.qZA(),e.TgZ(15,"div",7)(16,"h5"),e._uU(17),e.ALo(18,"translate"),e.qZA()()()(),e.TgZ(19,"div",3)(20,"div",4)(21,"div",5),e._UZ(22,"img",9),e.qZA(),e.TgZ(23,"div",7)(24,"h5"),e._uU(25),e.ALo(26,"translate"),e.qZA()()()(),e.TgZ(27,"div",3)(28,"div",4)(29,"div",5),e._UZ(30,"img",10),e.qZA(),e.TgZ(31,"div",7)(32,"h5"),e._uU(33),e.ALo(34,"translate"),e.qZA()()()()()()()),2&o&&(e.xp6(9),e.Oqu(e.lcZ(10,4,"One hour")),e.xp6(8),e.Oqu(e.lcZ(18,6,"Certified trainers")),e.xp6(8),e.Oqu(e.lcZ(26,8,"14 people maximum for group exercises")),e.xp6(8),e.Oqu(e.lcZ(34,10,"Positive society")))},dependencies:[d.X$]})}return i})();var T=a(1478),p=a(1591),N=a(7384),f=a(7123);let U=(()=>{class i{constructor(t){this.el=t}error(){this.el.nativeElement.src="assets/img/team/1.jpg"}ionError(){this.el.nativeElement.src="assets/img/team/1.jpg"}static#e=this.\u0275fac=function(o){return new(o||i)(e.Y36(e.SBq))};static#t=this.\u0275dir=e.lG2({type:i,selectors:[["","defaultImg",""]],hostBindings:function(o,n){1&o&&e.NdJ("error",function(){return n.error()})("ionError",function(){return n.ionError()})}})}return i})();function E(i,s){if(1&i){const t=e.EpF();e.TgZ(0,"div",13)(1,"div",14),e.NdJ("click",function(){e.CHM(t);const n=e.oxw();return e.KtG(n.plusSlides())}),e.qZA()()}}function J(i,s){if(1&i){const t=e.EpF();e.TgZ(0,"div",13)(1,"div",15),e.NdJ("click",function(){e.CHM(t);const n=e.oxw();return e.KtG(n.plusSlides())}),e.qZA()()}}function M(i,s){if(1&i&&(e.TgZ(0,"div",16)(1,"div",17)(2,"div",18)(3,"div",19)(4,"a",20),e._UZ(5,"img",21),e.qZA()(),e.TgZ(6,"div",22)(7,"div",23)(8,"h4",24)(9,"a"),e._uU(10),e.qZA()()()()()()()),2&i){const t=s.$implicit;e.xp6(4),e.s9C("href",t.image,e.LSH),e.xp6(1),e.s9C("src",t.image,e.LSH),e.xp6(5),e.Oqu(t.name)}}function G(i,s){if(1&i){const t=e.EpF();e.TgZ(0,"div",13)(1,"div",15),e.NdJ("click",function(){e.CHM(t);const n=e.oxw();return e.KtG(n.previewSlides())}),e.qZA()()}}function R(i,s){if(1&i){const t=e.EpF();e.TgZ(0,"div",13)(1,"div",14),e.NdJ("click",function(){e.CHM(t);const n=e.oxw();return e.KtG(n.previewSlides())}),e.qZA()()}}let Y=(()=>{class i{constructor(t,o,n,r,l,m,y,w){this.elRef=t,this.httpService=o,this.configService=n,this.modalService=r,this.alertService=l,this.router=m,this.loaderService=y,this.coreTranslationService=w,this.config={},this.trainers=[],this.bLangFlag=!1}ngOnInit(){f.init({once:!0}),this.bLangFlag=this.config.isArabic,this.swiper=new T.Z(".team-slider-container",{loop:!0,slidesPerView:3,spaceBetween:11,allowTouchMove:!0,allowSlideNext:!0,allowSlidePrev:!0,effect:"fade",fadeEffect:{crossFade:!0},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},breakpoints:{1200:{slidesPerView:3},992:{slidesPerView:3},768:{slidesPerView:2},576:{slidesPerView:2},0:{slidesPerView:1}}}),p.KR.bind(this.elRef.nativeElement,"[data-fancybox]")}plusSlides(){this.swiper&&this.swiper.slideNext()}previewSlides(){this.swiper&&this.swiper.slidePrev()}ngOnDestroy(){p.KR.unbind(this.elRef.nativeElement),p.KR.close(),this.swiper.destroy()}onViewTrainer(t){this.modalReference=this.modalService.open(N.g,{centered:!0,size:"lg"}),this.modalReference.componentInstance.config=this.config,this.modalReference.componentInstance.trainerID=t,this.modalReference.result.then(o=>{},o=>{console.log("reason",o)}),this.modalReference.hidden.subscribe(()=>{})}static#e=this.\u0275fac=function(o){return new(o||i)(e.Y36(e.SBq),e.Y36(h.O),e.Y36(A.E),e.Y36(_.FF),e.Y36(v.c),e.Y36(u.F0),e.Y36(C.D),e.Y36(k.s))};static#t=this.\u0275cmp=e.Xpm({type:i,selectors:[["app-trainers"]],inputs:{config:"config",trainers:"trainers"},decls:21,vars:11,consts:[["id","trainers-section",1,"team-area","team-default-area"],[1,"container-fluid"],[1,"row"],[1,"col-lg-12"],["data-aos","fade-up","data-aos-duration","1000",1,"section-title","text-center"],[1,"title"],[1,"row","justify-content-center"],["class","col-1 position-relative slider-button",4,"ngIf"],[1,"col-10"],[1,"gallery-slider-content"],[1,"swiper-container","team-slider-container"],[1,"swiper-wrapper","gallery-slider"],["class","swiper-slide",4,"ngFor","ngForOf"],[1,"col-1","position-relative","slider-button"],[1,"swiper-button-next","next-slide","position-absolute",3,"click"],[1,"swiper-button-prev","prev-slide","position-absolute",3,"click"],[1,"swiper-slide"],[1,"team-item"],[1,"team-member"],[1,"thumb"],["data-fancybox","trainer",1,"lightbox-image",3,"href"],["defaultImg","","alt","Image",3,"src"],[1,"content"],[1,"member-info"],[1,"name"]],template:function(o,n){1&o&&(e.TgZ(0,"section",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"div",4)(5,"h2",5),e._uU(6),e.ALo(7,"translate"),e.TgZ(8,"span"),e._uU(9),e.ALo(10,"translate"),e.qZA()()()()(),e.TgZ(11,"div",6),e.YNc(12,E,2,0,"div",7),e.YNc(13,J,2,0,"div",7),e.TgZ(14,"div",8)(15,"div",9)(16,"div",10)(17,"div",11),e.YNc(18,M,11,3,"div",12),e.qZA()()()(),e.YNc(19,G,2,0,"div",7),e.YNc(20,R,2,0,"div",7),e.qZA()()()),2&o&&(e.xp6(6),e.hij("",e.lcZ(7,7,"PROFESSIONAL")," "),e.xp6(3),e.Oqu(e.lcZ(10,9,"TRAINERS")),e.xp6(3),e.Q6J("ngIf",n.bLangFlag),e.xp6(1),e.Q6J("ngIf",!n.bLangFlag),e.xp6(5),e.Q6J("ngForOf",n.trainers.concat(n.trainers)),e.xp6(1),e.Q6J("ngIf",n.bLangFlag),e.xp6(1),e.Q6J("ngIf",!n.bLangFlag))},dependencies:[c.sg,c.O5,U,d.X$]})}return i})();function V(i,s){if(1&i){const t=e.EpF();e.TgZ(0,"div",14)(1,"div",15),e.NdJ("click",function(){e.CHM(t);const n=e.oxw();return e.KtG(n.plusSlides())}),e.qZA()()}}function H(i,s){if(1&i){const t=e.EpF();e.TgZ(0,"div",14)(1,"div",16),e.NdJ("click",function(){e.CHM(t);const n=e.oxw();return e.KtG(n.plusSlides())}),e.qZA()()}}function Q(i,s){if(1&i&&(e.TgZ(0,"div",17)(1,"div",18)(2,"div",19)(3,"a",20),e._UZ(4,"img",21),e.qZA()()()()),2&i){const t=s.$implicit;e.xp6(3),e.s9C("href",t,e.LSH),e.xp6(1),e.s9C("src",t,e.LSH)}}function K(i,s){if(1&i){const t=e.EpF();e.TgZ(0,"div",14)(1,"div",16),e.NdJ("click",function(){e.CHM(t);const n=e.oxw();return e.KtG(n.previewSlides())}),e.qZA()()}}function D(i,s){if(1&i){const t=e.EpF();e.TgZ(0,"div",14)(1,"div",15),e.NdJ("click",function(){e.CHM(t);const n=e.oxw();return e.KtG(n.previewSlides())}),e.qZA()()}}let B=(()=>{class i{constructor(t){this.elRef=t,this.config={},this.partners=[],this.bLangFlag=!1}ngOnInit(){f.init({once:!0}),this.bLangFlag=this.config.isArabic,this.swiper=new T.Z(".gallery-slider-container",{loop:!0,slidesPerView:5,spaceBetween:10,allowTouchMove:!0,allowSlideNext:!0,allowSlidePrev:!0,effect:"fade",fadeEffect:{crossFade:!0},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},breakpoints:{1200:{slidesPerView:5},992:{slidesPerView:4},768:{slidesPerView:3},576:{slidesPerView:2},0:{slidesPerView:2}}}),p.KR.bind(this.elRef.nativeElement,"[data-fancybox]")}plusSlides(){this.swiper&&this.swiper.slideNext()}previewSlides(){this.swiper&&this.swiper.slidePrev()}updateSwiper(){this.swiper.update()}ngAfterViewChecked(){this.updateSwiper()}ngAfterViewInit(){this.updateSwiper(),console.log("after view init")}ngOnDestroy(){p.KR.unbind(this.elRef.nativeElement),p.KR.close(),this.swiper.destroy()}static#e=this.\u0275fac=function(o){return new(o||i)(e.Y36(e.SBq))};static#t=this.\u0275cmp=e.Xpm({type:i,selectors:[["app-partners"]],inputs:{config:"config",partners:"partners"},decls:22,vars:11,consts:[[1,"gallery-area","gallery-default-area"],[1,"container"],[1,"row"],[1,"col-12","pr-0"],["data-aos","fade-up","data-aos-duration","1000",1,"section-title","stitle-style2","text-center"],[1,"title"],[1,"container-fluid"],[1,"row","justify-content-center"],["class","col-1 position-relative slider-button",4,"ngIf"],[1,"col-10"],[1,"gallery-slider-content"],[1,"swiper-container","gallery-slider-container"],[1,"swiper-wrapper","gallery-slider"],["class","swiper-slide",4,"ngFor","ngForOf"],[1,"col-1","position-relative","slider-button"],[1,"swiper-button-next","next-slide","position-absolute",3,"click"],[1,"swiper-button-prev","prev-slide","position-absolute",3,"click"],[1,"swiper-slide"],[1,"gallery-item"],[1,"thumb"],["data-fancybox","gallery",1,"lightbox-image",3,"href"],["alt","Image",1,"img-fluid",3,"src"]],template:function(o,n){1&o&&(e.TgZ(0,"section",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"div",4)(5,"h2",5),e._uU(6),e.ALo(7,"translate"),e.TgZ(8,"span"),e._uU(9),e.ALo(10,"translate"),e.qZA()()()()()(),e.TgZ(11,"div",6)(12,"div",7),e.YNc(13,V,2,0,"div",8),e.YNc(14,H,2,0,"div",8),e.TgZ(15,"div",9)(16,"div",10)(17,"div",11)(18,"div",12),e.YNc(19,Q,5,2,"div",13),e.qZA()()()(),e.YNc(20,K,2,0,"div",8),e.YNc(21,D,2,0,"div",8),e.qZA()()()),2&o&&(e.xp6(6),e.hij("",e.lcZ(7,7,"OUR")," "),e.xp6(3),e.Oqu(e.lcZ(10,9,"PARTNER")),e.xp6(4),e.Q6J("ngIf",n.bLangFlag),e.xp6(1),e.Q6J("ngIf",!n.bLangFlag),e.xp6(5),e.Q6J("ngForOf",n.partners.concat(n.partners)),e.xp6(1),e.Q6J("ngIf",n.bLangFlag),e.xp6(1),e.Q6J("ngIf",!n.bLangFlag))},dependencies:[c.sg,c.O5,d.X$]})}return i})(),z=(()=>{class i{constructor(t,o){this.elRef=t,this.modalService=o,this.config={}}ngOnInit(){p.KR.bind(this.elRef.nativeElement,"[data-fancybox]")}ngOnDestroy(){p.KR.unbind(this.elRef.nativeElement),p.KR.close()}onFreeTrial(){this.modalReference=this.modalService.open(x.L,{centered:!0,size:"lg"}),this.modalReference.componentInstance.config=this.config,this.modalReference.result.then(t=>{console.log("FreeTrialComponent",t)},t=>{console.log("reason",t)})}static#e=this.\u0275fac=function(o){return new(o||i)(e.Y36(e.SBq),e.Y36(_.FF))};static#t=this.\u0275cmp=e.Xpm({type:i,selectors:[["app-about-us"]],inputs:{config:"config"},decls:46,vars:27,consts:[["id","about-section",1,"about-area","about-default-area","position-relative"],[1,"container"],[1,"row"],[1,"col-lg-7","col-xl-7","order-1","order-lg-1"],[1,"thumb"],["src","assets/img/about/1.png","alt","Image"],[1,"col-lg-5","col-xl-5","order-0","order-lg-0"],[1,"about-content"],[1,"section-title","stitle-style2"],[1,"title"],[1,"desc"],[1,"inner-content"],[1,"about-list"],[1,"inline-style"],[1,"btn","btn-theme",3,"click"],[1,"btn-play-box"],["data-fancybox","play-video-popup","href","https://www.youtube.com/watch?v=xwQh3mlubV8&t=14s&ab_channel=3days",1,"btn-play"],["src","assets/img/icons/play-btn1.png","alt","Image"],[1,"shape-group"],[1,"shape-img1"],["src","assets/img/photos/shape1.png","alt","Image"]],template:function(o,n){1&o&&(e.TgZ(0,"section",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"div",4),e._UZ(5,"img",5),e.qZA()(),e.TgZ(6,"div",6)(7,"div",7)(8,"div",8)(9,"h2",9),e._uU(10),e.ALo(11,"translate"),e.TgZ(12,"span"),e._uU(13),e.ALo(14,"translate"),e.qZA()(),e.TgZ(15,"div",10)(16,"p"),e._uU(17),e.ALo(18,"translate"),e.qZA()()(),e.TgZ(19,"div",11)(20,"div",12)(21,"ul")(22,"li"),e._uU(23),e.ALo(24,"translate"),e.qZA(),e.TgZ(25,"li"),e._uU(26),e.ALo(27,"translate"),e.qZA(),e.TgZ(28,"li"),e._uU(29),e.ALo(30,"translate"),e.qZA(),e.TgZ(31,"li"),e._uU(32),e.ALo(33,"translate"),e.qZA()()(),e.TgZ(34,"div",13)(35,"a",14),e.NdJ("click",function(){return n.onFreeTrial()}),e._uU(36),e.ALo(37,"translate"),e.qZA(),e.TgZ(38,"div",15)(39,"a",16),e._UZ(40,"img",17),e._uU(41),e.ALo(42,"translate"),e.qZA()()()()()()()(),e.TgZ(43,"div",18)(44,"div",19),e._UZ(45,"img",20),e.qZA()()()),2&o&&(e.xp6(10),e.hij("",e.lcZ(11,9,"ABOUT")," "),e.xp6(3),e.Oqu(e.lcZ(14,11,"US")),e.xp6(4),e.Oqu(e.lcZ(18,13,"3Days is a club with a completely new concept, where We offer individual or group training programs three days a week To go beyond the common gym idea, 3Days was founded In 2018, we focus on the personal training curriculum Our exercises in order to achieve the maximum benefit from exercise and avoid injuries And guide trainees on their journey to achieve their goals.")),e.xp6(6),e.Oqu(e.lcZ(24,15,"14 people maximum for group exercises")),e.xp6(3),e.Oqu(e.lcZ(27,17,"Certified trainers")),e.xp6(3),e.Oqu(e.lcZ(30,19,"Positive society")),e.xp6(3),e.Oqu(e.lcZ(33,21,"One hour")),e.xp6(4),e.Oqu(e.lcZ(37,23,"Free Trial")),e.xp6(5),e.hij("",e.lcZ(42,25,"INTRO VIDEO")," "))},dependencies:[d.X$]})}return i})();var j=a(5861),g=a(7705);const I=function(i,s){return{lat:i,lng:s}},$=function(){return{width:32,height:56}},X=function(i){return{url:"../../../../assets/img/icons/small-icon-pin.png",scaledSize:i}},W=function(i){return{icon:i}};function ee(i,s){if(1&i){const t=e.EpF();e.TgZ(0,"map-marker",3,4),e.NdJ("mapClick",function(){const r=e.CHM(t).index,l=e.MAs(1),m=e.oxw();return e.KtG(m.openInfoWindow(l,r))}),e.qZA()}if(2&i){const t=s.$implicit;e.Q6J("position",e.WLB(2,I,t.lat,t.lng))("options",e.VKq(8,W,e.VKq(6,X,e.DdM(5,$))))}}function te(i,s){if(1&i&&(e.TgZ(0,"div")(1,"p",9),e._uU(2),e.ALo(3,"translate"),e.qZA(),e.TgZ(4,"p",10),e._uU(5),e.ALo(6,"translate"),e.qZA()()),2&i){const t=e.oxw().$implicit;e.xp6(2),e.Oqu(e.lcZ(3,2,t.name_en)),e.xp6(3),e.Oqu(e.lcZ(6,4,t.branch_category))}}function ie(i,s){if(1&i&&(e.TgZ(0,"div")(1,"p",9),e._uU(2),e.ALo(3,"translate"),e.qZA(),e.TgZ(4,"p",10),e._uU(5),e.ALo(6,"translate"),e.qZA()()),2&i){const t=e.oxw().$implicit;e.xp6(2),e.Oqu(e.lcZ(3,2,t.name_ar)),e.xp6(3),e.Oqu(e.lcZ(6,4,t.branch_category))}}function ne(i,s){if(1&i&&(e.TgZ(0,"map-info-window",5,6)(2,"div",7),e.YNc(3,te,7,6,"div",8),e.YNc(4,ie,7,6,"div",8),e.qZA()()),2&i){const t=s.$implicit,o=e.oxw();e.Q6J("position",e.WLB(3,I,t.lat,t.lng)),e.xp6(3),e.Q6J("ngIf",!o.isLangFlag),e.xp6(1),e.Q6J("ngIf",o.isLangFlag)}}let oe=(()=>{class i{constructor(t,o){this.httpService=t,this.alertService=o,this.config={},this.branches=[],this.isLangFlag=!1,this.markerInfoContent="",this.styles=[{elementType:"geometry",stylers:[{color:"#242f3e"}]},{elementType:"labels.text.stroke",stylers:[{color:"#242f3e"}]},{elementType:"labels.text.fill",stylers:[{color:"#746855"}]},{featureType:"administrative.locality",elementType:"labels.text.fill",stylers:[{color:"#d59563"}]},{featureType:"poi",elementType:"labels.text.fill",stylers:[{color:"#d59563",visibility:"off"}]},{featureType:"poi.park",elementType:"geometry",stylers:[{color:"#263c3f"}]},{featureType:"poi.park",elementType:"labels.text.fill",stylers:[{color:"#6b9a76"}]},{featureType:"road",elementType:"geometry",stylers:[{color:"#38414e"}]},{featureType:"road",elementType:"geometry.stroke",stylers:[{color:"#212a37"}]},{featureType:"road",elementType:"labels.text.fill",stylers:[{color:"#9ca5b3"}]},{featureType:"road.highway",elementType:"geometry",stylers:[{color:"#746855"}]},{featureType:"road.highway",elementType:"geometry.stroke",stylers:[{color:"#1f2835"}]},{featureType:"road.highway",elementType:"labels.text.fill",stylers:[{color:"#f3d19c"}]},{featureType:"transit",elementType:"geometry",stylers:[{color:"#2f3948",visibility:"off"}]},{featureType:"transit.station",elementType:"labels.text.fill",stylers:[{color:"#d59563"}]},{featureType:"water",elementType:"geometry",stylers:[{color:"#17263c"}]},{featureType:"water",elementType:"labels.text.fill",stylers:[{color:"#515c6d"}]},{featureType:"water",elementType:"labels.text.stroke",stylers:[{color:"#17263c"}]},{featureType:"poi",elementType:"labels",stylers:[{visibility:"off"}]}],this.mapOptions={styles:this.styles,mapTypeControl:!1,streetViewControl:!1},this.markerCenter={lat:24.6857408,lng:46.7047453},this.marker={position:{lat:24.6857408,lng:46.7047453},options:{draggable:!0},label:"A"},this.selectedBranchIndex=null}ngOnInit(){this.onFetchBranches().then(()=>{}),console.log("config value==>",this.config.isArabic),this.isLangFlag=this.config.isArabic}addMarker(t){console.log(t.latLng),this.marker.position=t.latLng?.toJSON()||{lat:24.6857408,lng:46.7047453}}onFetchBranches(){var t=this;return(0,j.Z)(function*(){t.httpService.post("branches",{keyword:"",client_id:t.config.user.client_id}).then(o=>{t.branches=o,0!==Object.keys(t.branches).length&&(t.markerCenter={lat:o[0].lat,lng:o[0].lng})}).catch(o=>{console.log(o),t.alertService.alert("info",o.message,"error")})})()}openInfoWindow(t,o){let n=0;this.infoWindowsView.forEach(r=>{o===n?(r.open(t),n++):(n++,r.close())})}static#e=this.\u0275fac=function(o){return new(o||i)(e.Y36(h.O),e.Y36(v.c))};static#t=this.\u0275cmp=e.Xpm({type:i,selectors:[["app-google-map"]],viewQuery:function(o,n){if(1&o&&(e.Gf(g.b6,5),e.Gf(g.ch,5)),2&o){let r;e.iGM(r=e.CRH())&&(n.map=r.first),e.iGM(r=e.CRH())&&(n.infoWindowsView=r)}},inputs:{config:"config"},decls:3,vars:5,consts:[["height","400px","width","100%",3,"zoom","center","options","mapClick"],[3,"position","options","mapClick",4,"ngFor","ngForOf"],[3,"position",4,"ngFor","ngForOf"],[3,"position","options","mapClick"],["marker","mapMarker"],[3,"position"],["infoWindow","mapInfoWindow"],[1,"pop_branch_info"],[4,"ngIf"],[1,"m-0","mb-2"],[1,"m-0"]],template:function(o,n){1&o&&(e.TgZ(0,"google-map",0),e.NdJ("mapClick",function(l){return n.addMarker(l)}),e.YNc(1,ee,2,10,"map-marker",1),e.YNc(2,ne,5,6,"map-info-window",2),e.qZA()),2&o&&(e.Q6J("zoom",12)("center",n.markerCenter)("options",n.mapOptions),e.xp6(1),e.Q6J("ngForOf",n.branches),e.xp6(1),e.Q6J("ngForOf",n.branches))},dependencies:[c.sg,c.O5,g.b6,g.ch,g.O_,d.X$]})}return i})();var se=a(7835);function re(i,s){if(1&i){const t=e.EpF();e.TgZ(0,"div",16)(1,"div",17),e.NdJ("click",function(){e.CHM(t);const n=e.oxw();return e.KtG(n.plusSlides())}),e.qZA()()}}function ae(i,s){if(1&i){const t=e.EpF();e.TgZ(0,"div",16)(1,"div",18),e.NdJ("click",function(){e.CHM(t);const n=e.oxw();return e.KtG(n.plusSlides())}),e.qZA()()}}function le(i,s){1&i&&(e.TgZ(0,"div",24)(1,"a",25),e._uU(2),e.ALo(3,"translate"),e.qZA()()),2&i&&(e.xp6(2),e.Oqu(e.lcZ(3,1,"SUBSCRIBE NOW")))}function ce(i,s){1&i&&(e.TgZ(0,"div",24)(1,"a",25),e._uU(2),e.ALo(3,"translate"),e.qZA()()),2&i&&(e.xp6(2),e.Oqu(e.lcZ(3,1,"BOOK NOW")))}function pe(i,s){if(1&i){const t=e.EpF();e.TgZ(0,"div",19)(1,"div",20),e.NdJ("click",function(){const r=e.CHM(t).$implicit,l=e.oxw();return e.KtG(l.onProductSelected.emit(r))}),e.TgZ(2,"div",21)(3,"h5"),e._uU(4),e.qZA()(),e.TgZ(5,"div",22)(6,"h2"),e._uU(7),e.ALo(8,"translate"),e.qZA(),e.TgZ(9,"h3"),e._uU(10),e.qZA()(),e.YNc(11,le,4,3,"div",23),e.YNc(12,ce,4,3,"div",23),e.qZA()()}if(2&i){const t=s.$implicit,o=e.oxw();e.xp6(4),e.Oqu(o.config.isArabic?t.arabic_name:t.english_name),e.xp6(3),e.lnq("",t.amount_after_vat.toFixed(1),""," ","",e.lcZ(8,7,"SAR"),""),e.xp6(3),e.Oqu(o.config.isArabic?t.period+" "+t.arabic_period_unit:t.period+" "+t.period_unit),e.xp6(1),e.Q6J("ngIf","subscription"===t.type),e.xp6(1),e.Q6J("ngIf","session"===t.type)}}function de(i,s){if(1&i){const t=e.EpF();e.TgZ(0,"div",16)(1,"div",18),e.NdJ("click",function(){e.CHM(t);const n=e.oxw();return e.KtG(n.previw())}),e.qZA()()}}function ge(i,s){if(1&i){const t=e.EpF();e.TgZ(0,"div",16)(1,"div",17),e.NdJ("click",function(){e.CHM(t);const n=e.oxw();return e.KtG(n.previw())}),e.qZA()()}}const S=function(i){return{active:i}};let me=(()=>{class i{constructor(){this.subscriptions=[],this.config={},this.onProductSelected=new e.vpe,this.onSelectGender=new e.vpe,this.bLangFlag=!1,this.selected_gender="all"}ngOnInit(){this.bLangFlag=this.config.isArabic,this.config.user.gender=this.selected_gender}ngAfterContentInit(){f.init({once:!0}),this.swiper=new T.Z(".packages-slider-container",{loop:!0,slidesPerView:3,spaceBetween:10,allowTouchMove:!0,allowSlideNext:!0,allowSlidePrev:!0,effect:"fade",fadeEffect:{crossFade:!0},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},breakpoints:{1200:{slidesPerView:3},992:{slidesPerView:3},768:{slidesPerView:2},576:{slidesPerView:2},0:{slidesPerView:1}}})}ngAfterViewChecked(){this.updateSwiper()}plusSlides(){this.swiper&&this.swiper.slideNext()}updateSwiper(){this.swiper.update()}ngAfterViewInit(){this.updateSwiper(),console.log("after view init")}selectGender(t){this.selected_gender=t,this.config.user.gender=t,this.onSelectGender.emit(t),this.updateSwiper()}previw(){this.swiper&&this.swiper.slidePrev()}static#e=this.\u0275fac=function(o){return new(o||i)};static#t=this.\u0275cmp=e.Xpm({type:i,selectors:[["app-packages"]],inputs:{subscriptions:"subscriptions",config:"config"},outputs:{onProductSelected:"onProductSelected",onSelectGender:"onSelectGender"},decls:32,vars:26,consts:[["id","packages-section",1,"pricing-area","pricing-default-area","packages"],[1,"container-fluid"],[1,"row"],[1,"col-lg-12"],["data-aos","fade-up","data-aos-duration","1000",1,"section-title","text-center","mb-0"],[1,"title"],[1,"text-gray"],[1,"row","justify-content-center"],["class","col-1 position-relative slider-button",4,"ngIf"],[1,"col-10"],[1,"gender-content"],[1,"gender-toggle"],[1,"btn-gender-switch",3,"ngClass","click"],[1,"swiper-container","packages-slider-container"],[1,"swiper-wrapper"],["class","swiper-slide",4,"ngFor","ngForOf"],[1,"col-1","position-relative","slider-button"],[1,"swiper-button-next","next-slide","position-absolute",3,"click"],[1,"swiper-button-prev","prev-slide","position-absolute",3,"click"],[1,"swiper-slide"],[1,"pricing-item",3,"click"],[1,"pricing-title"],[1,"pricing-amount"],["class","pricing-footer",4,"ngIf"],[1,"pricing-footer"],[1,"btn","btn-subscribe"]],template:function(o,n){1&o&&(e._UZ(0,"app-spinner"),e.TgZ(1,"section",0)(2,"div",1)(3,"div",2)(4,"div",3)(5,"div",4)(6,"h2",5),e._uU(7),e.ALo(8,"translate"),e.TgZ(9,"span",6),e._uU(10),e.ALo(11,"translate"),e.qZA(),e.TgZ(12,"span"),e._uU(13),e.ALo(14,"translate"),e.qZA()()()()(),e.TgZ(15,"div",7),e.YNc(16,re,2,0,"div",8),e.YNc(17,ae,2,0,"div",8),e.TgZ(18,"div",9)(19,"div",10)(20,"div",11)(21,"div",12),e.NdJ("click",function(){return n.selectGender("male")}),e._uU(22),e.ALo(23,"translate"),e.qZA(),e.TgZ(24,"div",12),e.NdJ("click",function(){return n.selectGender("female")}),e._uU(25),e.ALo(26,"translate"),e.qZA()()(),e.TgZ(27,"div",13)(28,"div",14),e.YNc(29,pe,13,9,"div",15),e.qZA()()(),e.YNc(30,de,2,0,"div",8),e.YNc(31,ge,2,0,"div",8),e.qZA()()()),2&o&&(e.xp6(7),e.Oqu(e.lcZ(8,12,"PACKAGES")),e.xp6(3),e.Oqu(e.lcZ(11,14," & ")),e.xp6(3),e.Oqu(e.lcZ(14,16,"MEMBERSHIPS")),e.xp6(3),e.Q6J("ngIf",n.bLangFlag),e.xp6(1),e.Q6J("ngIf",!n.bLangFlag),e.xp6(4),e.Q6J("ngClass",e.VKq(22,S,"male"==n.selected_gender)),e.xp6(1),e.hij(" ",e.lcZ(23,18,"Man")," "),e.xp6(2),e.Q6J("ngClass",e.VKq(24,S,"female"==n.selected_gender)),e.xp6(1),e.hij(" ",e.lcZ(26,20,"Woman")," "),e.xp6(4),e.Q6J("ngForOf",n.subscriptions),e.xp6(1),e.Q6J("ngIf",n.bLangFlag),e.xp6(1),e.Q6J("ngIf",!n.bLangFlag))},dependencies:[c.mk,c.sg,c.O5,se.O,d.X$]})}return i})();const F=function(i){return{active:i}};function ue(i,s){if(1&i){const t=e.EpF();e.TgZ(0,"div",3)(1,"div",9)(2,"div",10)(3,"div",11),e.NdJ("click",function(){e.CHM(t);const n=e.oxw();return e.KtG(n.selectGender("male"))}),e._uU(4),e.ALo(5,"translate"),e.qZA(),e.TgZ(6,"div",11),e.NdJ("click",function(){e.CHM(t);const n=e.oxw();return e.KtG(n.selectGender("female"))}),e._uU(7),e.ALo(8,"translate"),e.qZA()()()()}if(2&i){const t=e.oxw();e.xp6(3),e.Q6J("ngClass",e.VKq(8,F,"male"==t.selected_gender)),e.xp6(1),e.hij(" ",e.lcZ(5,4,"Man")," "),e.xp6(2),e.Q6J("ngClass",e.VKq(10,F,"female"==t.selected_gender)),e.xp6(1),e.hij(" ",e.lcZ(8,6,"Woman")," ")}}const fe=function(){return{numbers:60}};function he(i,s){if(1&i){const t=e.EpF();e.TgZ(0,"div",12)(1,"div",13),e.NdJ("click",function(){const r=e.CHM(t).$implicit,l=e.oxw();return e.KtG(l.onProgramSelected.emit(r))}),e.TgZ(2,"div",14)(3,"div",15)(4,"a")(5,"span"),e._UZ(6,"img",16),e.qZA()()(),e.TgZ(7,"div",17)(8,"h4",5)(9,"a",18),e.NdJ("click",function(n){return n.preventDefault()}),e._uU(10),e.qZA()(),e.TgZ(11,"h4",19),e._uU(12),e.ALo(13,"translate"),e.qZA()()()()()}if(2&i){const t=s.$implicit;e.xp6(6),e.Q6J("src",t.image,e.LSH),e.xp6(4),e.Oqu(t.name),e.xp6(2),e.Oqu(e.xi3(13,3,t.description,e.DdM(6,fe)))}}const _e=function(i,s){return{"home-page":i,"acadamy-page":s}};let ve=(()=>{class i{constructor(){this.programs=[],this.section="",this.config={},this.page="",this.selected_gender="male",this.min_number=60,this.onSelectGender=new e.vpe,this.onProgramSelected=new e.vpe}ngOnInit(){f.init({once:!0})}selectGender(t){this.selected_gender=t,this.onSelectGender.emit(t)}static#e=this.\u0275fac=function(o){return new(o||i)};static#t=this.\u0275cmp=e.Xpm({type:i,selectors:[["app-programs"]],inputs:{programs:"programs",section:"section",config:"config",page:"page"},outputs:{onSelectGender:"onSelectGender",onProgramSelected:"onProgramSelected"},decls:14,vars:10,consts:[[1,"service-area","service-default-area",3,"id","ngClass"],[1,"container"],[1,"row"],[1,"col-lg-12"],["data-aos","fade-up","data-aos-duration","1000",1,"section-title","text-center"],[1,"title"],["class","col-lg-12",4,"ngIf"],[1,"col-md-10","offset-md-1","col-lg-12","offset-lg-0"],["class","col-sm-6 col-lg-4",4,"ngFor","ngForOf"],[1,"gender-content"],[1,"gender-toggle"],[1,"btn-gender-switch",3,"ngClass","click"],[1,"col-sm-6","col-lg-4"],[1,"service-item",3,"click"],[1,"inner-content"],[1,"thumb"],["alt","Image",3,"src"],[1,"content"],["href","#",3,"click"],[1,"class-time"]],template:function(o,n){1&o&&(e.TgZ(0,"section",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"div",4)(5,"h2",5)(6,"span"),e._uU(7),e.ALo(8,"translate"),e.qZA()()()(),e.YNc(9,ue,9,12,"div",6),e.qZA(),e.TgZ(10,"div",2)(11,"div",7)(12,"div",2),e.YNc(13,he,14,7,"div",8),e.qZA()()()()()),2&o&&(e.MGl("id","",n.section,"-section"),e.Q6J("ngClass",e.WLB(7,_e,"home"===n.page,"home"!==n.page)),e.xp6(7),e.Oqu(e.lcZ(8,5,"PROGRAMS")),e.xp6(2),e.Q6J("ngIf","academy"!=n.page),e.xp6(4),e.Q6J("ngForOf",n.programs))},dependencies:[c.mk,c.sg,c.O5,d.X$]})}return i})();function Te(i,s){if(1&i){const t=e.EpF();e.TgZ(0,"app-packages",7),e.NdJ("onSelectGender",function(n){e.CHM(t);const r=e.oxw();return e.KtG(r.onFetchProducts(n))})("onProductSelected",function(n){e.CHM(t);const r=e.oxw();return e.KtG(r.onBuyProduct(n))}),e.qZA()}if(2&i){const t=e.oxw();e.Q6J("config",t.config)("subscriptions",t.subscriptions)}}function ye(i,s){if(1&i&&e._UZ(0,"app-trainers",8),2&i){const t=e.oxw();e.Q6J("config",t.config)("trainers",t.trainers)}}const we=[{path:"",component:(()=>{class i{constructor(t,o,n,r,l,m,y,w,Ae){this.title=t,this.meta=o,this.httpService=n,this.configService=r,this.modalService=l,this.alertService=m,this.router=y,this.coreTranslationService=w,this.loaderService=Ae,this.config={},this.user={},this.trainers=[],this.partners=[],this.subscriptions=[],this.programs=[],this.carouselItems=[{id:1,customer_name:"Johnathan P.",exclamation_title:"Lost1 10kgs",description:"I lost 22 pounds and lost my belly, he amazing thing is that I really could only workout once a week",time:"4:00-5:00",count:3,photo:"person2.png",custom_img:"../../../assets/img/photos/workout.bg1.png"},{id:2,customer_name:"Cherry S.",exclamation_title:"Lost2 10kgs",description:"I lost 22 pounds and lost my belly, he amazing thing is that I really could only workout once a week",time:"4:00-5:00",count:3,photo:"person2.png",custom_img:"../../../assets/img/photos/workout.bg1.png"},{id:3,customer_name:"Adam T.",exclamation_title:"Lost3 10kgs",description:"I lost 22 pounds and lost my belly, he amazing thing is that I really could only workout once a week",time:"4:00-5:00",count:3,photo:"person2.png",custom_img:"../../../assets/img/photos/workout.bg1.png"},{id:4,customer_name:"Gig.",exclamation_title:"Lost4 10kgs",description:"I lost 22 pounds and lost my belly, he amazing thing is that I really could only workout once a week",time:"4:00-5:00",count:3,photo:"person2.png",custom_img:"../../../assets/img/photos/workout.bg1.png"},{id:5,customer_name:"Max",exclamation_title:"Lost5 10kgs",description:"I lost 22 pounds and lost my belly, he amazing thing is that I really could only workout once a week",time:"4:00-5:00",count:3,photo:"person2.png",custom_img:"../../../assets/img/photos/workout.bg1.png"},{id:6,customer_name:"Wagner",exclamation_title:"Lost6 10kgs",description:"I lost 22 pounds and lost my belly, he amazing thing is that I really could only workout once a week",time:"4:00-5:00",count:3,photo:"person2.png",custom_img:"../../../assets/img/photos/workout.bg1.png"},{id:7,customer_name:"Sebastian",exclamation_title:"Lost7 10kgs",description:"I lost 22 pounds and lost my belly, he amazing thing is that I really could only workout once a week",time:"4:00-5:00",count:3,photo:"person2.png",custom_img:"../../../assets/img/photos/workout.bg1.png"}],this.memberships=[{id:1,main_title:"INDIVIDUAL - 60 MINUTES",sub_title:"LEARNERS PACKAGE",description:"I lost 22 pounds and lost my belly, he amazing thing is that I really could only workout once a week",price:"3600.00",session:12,period:1,week:3},{id:2,main_title:"INDIVIDUAL - 60 MINUTES",sub_title:"LEARNERS PACKAGE",description:"I lost 22 pounds and lost my belly, he amazing thing is that I really could only workout once a week",price:"6120.00",session:24,period:2,week:3},{id:3,main_title:"INDIVIDUAL - 60 MINUTES",sub_title:"LEARNERS PACKAG",description:"I lost 22 pounds and lost my belly, he amazing thing is that I really could only workout once a week",price:"7990.00",session:36,period:3,week:3},{id:4,main_title:"INDIVIDUAL - 60 MINUTES",sub_title:"COMMITMENT PACKAGE",description:"I lost 22 pounds and lost my belly, he amazing thing is that I really could only workout once a week",price:"6120.00",session:24,period:2,week:4},{id:5,main_title:"INDIVIDUAL - 60 MINUTES",sub_title:"COMMITMENT PACKAGE",description:"I lost 22 pounds and lost my belly, he amazing thing is that I really could only workout once a week",price:"10400.00",session:48,period:2,week:4},{id:6,main_title:"INDIVIDUAL - 60 MINUTES",sub_title:"COMMITMENT PACKAGE",description:"I lost 22 pounds and lost my belly, he amazing thing is that I really could only workout once a week",price:"13580.00",session:72,period:2,week:4},{id:7,main_title:"INDIVIDUAL - 60 MINUTES",sub_title:"FOCUSED PACKAGE",description:"I lost 22 pounds and lost my belly, he amazing thing is that I really could only workout once a week",price:"7990.00",session:36,period:2,week:5}]}ngOnInit(){this.title.setTitle(this.coreTranslationService.translateText("Home -3 Days")),this.meta.addTags([{property:"og:title",content:this.coreTranslationService.translateText("Home -3 Days")}]),this.config=this.configService.appSettingsValues,this.user=this.config.user||{},console.log("token here",this.config),this.config.isTrial||this.onFreeTrial()}ngAfterViewInit(){this.onFetchProducts("all"),this.onFetchTrainers(),this.onFetchPrograms("male"),this.onFetchPartners()}onFetchProducts(t){console.log("id home----\x3e",this.httpService.client_id),this.loaderService.setLoading(!0),this.httpService.post("products",{client_id:this.config.user.client_id}).then(o=>{console.log("product all list here",o),this.subscriptions="all"==t?o.filter(n=>""!=n.type):o.map(n=>{const r=n.branches.filter(l=>l.branch_category===t&&""!=n.type);return{...n,branches:r}}).filter(n=>n.branches.length>0),this.loaderService.setLoading(!1),console.log("product list",this.subscriptions)}).catch(o=>{console.log(o),this.alertService.alert("info",o.message,"error")})}onFetchTrainers(){this.httpService.post("trainers/list",{}).then(t=>{this.trainers=t}).catch(t=>{console.log(t),this.alertService.alert("info",t.message,"error")})}onFetchPrograms(t){this.loaderService.setLoading(!0),this.httpService.post("programs/list",{}).then(o=>{this.programs=o.filter(n=>n.gender==t),this.loaderService.setLoading(!1),console.log("programms list",this.programs)}).catch(o=>{console.log(o),this.alertService.alert("info",o.message,"error")})}onFetchPartners(){this.httpService.post("partners/list",{}).then(t=>{this.partners=t,console.log("partners list",this.partners)}).catch(t=>{console.log(t),this.alertService.alert("info",t.message,"error")})}onBuyProduct(t){if(t.id)if(console.log("product--home",t),this.config.token)console.log("checkout the page!!"),this.modalReference=this.modalService.open(P._,{centered:!0,size:"xl"}),this.modalReference.componentInstance.config=this.config,this.modalReference.componentInstance.product=t,this.modalReference.result.then(o=>{console.log("onBuyProduct",o)},o=>{console.log("reason",o)});else{let o=this.router.url.replace(/\#.*/gi,"").replace("/","");""===o&&(o="home"),console.log("gender here",this.user),this.modalReference=this.modalService.open(L.X,{centered:!0,size:"xl"}),this.modalReference.componentInstance.user=this.user,this.modalReference.componentInstance.config=this.config,this.modalReference.componentInstance.selectedProduct=t,this.modalReference.componentInstance.type=o,this.modalReference.result.then(n=>{console.log("modalOpenLogin",n)},n=>{console.log("reason",n)})}}onBuyProgram(t){return this.alertService.alert("Programs","Coming Soon","info")}onFreeTrial(){this.modalReference=this.modalService.open(x.L,{centered:!0,size:"lg"}),this.modalReference.componentInstance.config=this.config,this.modalReference.result.then(t=>{console.log("FreeTrialComponent",t)},t=>{console.log("reason",t)})}static#e=this.\u0275fac=function(o){return new(o||i)(e.Y36(b.Dx),e.Y36(b.h_),e.Y36(h.O),e.Y36(A.E),e.Y36(_.FF),e.Y36(v.c),e.Y36(u.F0),e.Y36(k.s),e.Y36(C.D))};static#t=this.\u0275cmp=e.Xpm({type:i,selectors:[["app-home"]],decls:9,vars:13,consts:[[1,"main-content"],[3,"page","image","config"],[3,"config"],[3,"config","subscriptions","onSelectGender","onProductSelected",4,"ngIf"],[3,"config","trainers",4,"ngIf"],[3,"config","programs","section","page","onSelectGender"],[3,"config","partners"],[3,"config","subscriptions","onSelectGender","onProductSelected"],[3,"config","trainers"]],template:function(o,n){1&o&&(e.TgZ(0,"main",0),e._UZ(1,"app-slider",1)(2,"app-menu-slider")(3,"app-about-us",2),e.YNc(4,Te,1,2,"app-packages",3),e.YNc(5,ye,1,2,"app-trainers",4),e.TgZ(6,"app-programs",5),e.NdJ("onSelectGender",function(l){return n.onFetchPrograms(l)}),e.qZA(),e._UZ(7,"app-partners",6)(8,"app-google-map",2),e.qZA()),2&o&&(e.xp6(1),e.Q6J("page","home")("image","url(assets/img/slider/home1.jpg)")("config",n.config),e.xp6(2),e.Q6J("config",n.config),e.xp6(1),e.Q6J("ngIf",null==n.subscriptions?null:n.subscriptions.length),e.xp6(1),e.Q6J("ngIf",null==n.trainers?null:n.trainers.length),e.xp6(1),e.Q6J("config",n.config)("programs",n.programs)("section","classes")("page","home"),e.xp6(1),e.Q6J("config",n.config)("partners",n.partners),e.xp6(1),e.Q6J("config",n.config))},dependencies:[c.O5,q.P,O,Y,B,z,oe,me,ve]})}return i})()}];let Ze=(()=>{class i{static#e=this.\u0275fac=function(o){return new(o||i)};static#t=this.\u0275mod=e.oAB({type:i});static#i=this.\u0275inj=e.cJS({imports:[u.Bz.forChild(we),u.Bz]})}return i})();var xe=a(8986);let be=(()=>{class i{static#e=this.\u0275fac=function(o){return new(o||i)};static#t=this.\u0275mod=e.oAB({type:i});static#i=this.\u0275inj=e.cJS({imports:[c.ez,Ze,xe.m]})}return i})()}}]);