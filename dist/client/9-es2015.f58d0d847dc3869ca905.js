(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{"2kqO":function(e,t,n){"use strict";n.r(t),n.d(t,"ProductModule",(function(){return z}));var r=n("2kYt"),i=n("EM62"),o=n("DSWM"),c=n("sN6X"),a=n("mOXJ"),s=function(e,t,n,r){var i,o=arguments.length,c=o<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(c=(o<3?i(c):o>3?i(t,n,c):i(t,n))||c);return o>3&&c&&Object.defineProperty(t,n,c),c},l=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},p=function(e){return e&&e.__esModule?e:{default:e}};let u=class{constructor(e,t){this.store=e,this.changeDetectorRef=t}ngOnInit(){this.isLoading=this.store.pipe(Object(c.m)(a.b)),this.process=this.store.pipe(Object(c.m)(a.e)),this.purchase=this.store.pipe(Object(c.m)(a.f))}ngAfterViewChecked(){this.changeDetectorRef.detectChanges()}ngOnDestroy(){this.isLoading.subscribe().unsubscribe(),this.process.subscribe().unsubscribe(),this.purchase.subscribe().unsubscribe()}};u.ctorParameters=()=>[{type:c.b},{type:i.k}],u=s([Object(i.n)({selector:"app-membership-base",template:p(n("96AH")).default,styles:[p(n("yQu0")).default]}),l("design:paramtypes",[c.b,i.k])],u);var d=n("sEIs"),h=n("icHh"),f=n("wgY5"),m=n("PIN6"),v=n("cHUu"),y=function(e,t,n,r){var i,o=arguments.length,c=o<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(c=(o<3?i(c):o>3?i(t,n,c):i(t,n))||c);return o>3&&c&&Object.defineProperty(t,n,c),c},b=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},g=function(e,t,n,r){return new(n||(n=Promise))((function(i,o){function c(e){try{s(r.next(e))}catch(t){o(t)}}function a(e){try{s(r.throw(e))}catch(t){o(t)}}function s(e){var t;e.done?i(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(c,a)}s((r=r.apply(e,t||[])).next())}))},O=function(e){return e&&e.__esModule?e:{default:e}};let w=class{constructor(e,t,n,r){this.store=e,this.router=t,this.actionService=n,this.masterService=r,this.moment=f,this.environment=Object(m.a)()}ngOnInit(){return g(this,void 0,void 0,(function*(){try{this.eventOrders=[],this.paymentTypes=[],this.purchase=this.store.pipe(Object(c.m)(a.f));const{order:e}=yield this.actionService.purchase.getData();if(void 0===e)throw new Error("order undefined");this.paymentTypes=yield this.masterService.searchCategoryCode({categorySetIdentifier:h.factory.chevre.categoryCode.CategorySetIdentifier.PaymentMethodType})}catch(e){console.error(e),this.router.navigate(["/error"])}}))}};w.ctorParameters=()=>[{type:c.b},{type:d.c},{type:v.a},{type:v.c}],w=y([Object(i.n)({selector:"app-membership-complete",template:O(n("PKHc")).default,styles:[O(n("jyfw")).default]}),b("design:paramtypes",[c.b,d.c,v.a,v.c])],w);var x=n("s2Ay"),C=function(e,t,n,r){var i,o=arguments.length,c=o<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(c=(o<3?i(c):o>3?i(t,n,c):i(t,n))||c);return o>3&&c&&Object.defineProperty(t,n,c),c},j=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},k=function(e,t,n,r){return new(n||(n=Promise))((function(i,o){function c(e){try{s(r.next(e))}catch(t){o(t)}}function a(e){try{s(r.throw(e))}catch(t){o(t)}}function s(e){var t;e.done?i(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(c,a)}s((r=r.apply(e,t||[])).next())}))},S=function(e){return e&&e.__esModule?e:{default:e}};let R=class{constructor(e,t,n,r,i){this.store=e,this.utilService=t,this.actionService=n,this.router=r,this.translate=i,this.moment=f,this.environment=Object(m.a)()}ngOnInit(){return k(this,void 0,void 0,(function*(){try{this.purchase=this.store.pipe(Object(c.m)(a.f)),this.isLoading=this.store.pipe(Object(c.m)(a.b)),this.user=this.store.pipe(Object(c.m)(a.g));const{authorizeProducts:e}=yield this.actionService.purchase.getData();this.amount=0,e.forEach(e=>{var t,n;void 0!==(null===(t=e.result)||void 0===t?void 0:t.price)&&(this.amount+=null===(n=e.result)||void 0===n?void 0:n.price)})}catch(e){console.error(e),this.router.navigate(["/error"])}}))}onSubmit(){return k(this,void 0,void 0,(function*(){const{language:e}=yield this.actionService.user.getData();try{this.amount>0&&(yield this.actionService.purchase.payment.authorizeCreditCard({amount:this.amount}))}catch(t){return this.utilService.openAlert({title:this.translate.instant("common.error"),body:this.translate.instant("purchase.confirm.alert.authorizeCreditCard")}),void this.router.navigate(["/product/membership/input"])}try{yield this.actionService.purchase.transaction.confirm({mailType:"product",language:e}),this.router.navigate(["/product/membership/complete"])}catch(t){console.error(t),this.router.navigate(["/error"])}}))}};R.ctorParameters=()=>[{type:c.b},{type:v.f},{type:v.a},{type:d.c},{type:x.c}],R=C([Object(i.n)({selector:"app-membership-confirm",template:S(n("e8wj")).default,styles:[S(n("AH3j")).default]}),j("design:paramtypes",[c.b,v.f,v.a,d.c,x.c])],R);var P=function(e,t,n,r){var i,o=arguments.length,c=o<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(c=(o<3?i(c):o>3?i(t,n,c):i(t,n))||c);return o>3&&c&&Object.defineProperty(t,n,c),c},F=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},T=function(e,t,n,r){return new(n||(n=Promise))((function(i,o){function c(e){try{s(r.next(e))}catch(t){o(t)}}function a(e){try{s(r.throw(e))}catch(t){o(t)}}function s(e){var t;e.done?i(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(c,a)}s((r=r.apply(e,t||[])).next())}))},I=function(e){return e&&e.__esModule?e:{default:e}};let L=class{constructor(e,t,n,r,i){this.store=e,this.router=t,this.utilService=n,this.actionService=r,this.translate=i,this.environment=Object(m.a)()}ngOnInit(){return T(this,void 0,void 0,(function*(){try{this.purchase=this.store.pipe(Object(c.m)(a.f)),this.user=this.store.pipe(Object(c.m)(a.g)),this.isLoading=this.store.pipe(Object(c.m)(a.b));const{ticketOffer:e}=yield this.actionService.purchase.getData();if(void 0===e)throw new Error("ticketOffer undefined");this.amount=0,e.priceSpecification.priceComponent.forEach(e=>{this.amount+=e.price})}catch(e){console.error(e),this.router.navigate(["/error"])}}))}onSubmit(){return T(this,void 0,void 0,(function*(){if(void 0!==this.profileForm)if(Object.keys(this.profileForm.controls).forEach(e=>{var t,n;null===(t=this.profileForm)||void 0===t||t.controls[e].markAsTouched(),"telephone"!==e&&(null===(n=this.profileForm)||void 0===n||n.controls[e].setValue(document.getElementById(e).value))}),this.profileForm.invalid)this.utilService.openAlert({title:this.translate.instant("common.error"),body:this.translate.instant("purchase.input.alert.customer")});else if(this.amount>0&&void 0!==this.creditCardForm&&(Object.keys(this.creditCardForm.controls).forEach(e=>{var t;null===(t=this.creditCardForm)||void 0===t||t.controls[e].markAsTouched()}),this.creditCardForm.controls.cardNumber.setValue(document.getElementById("cardNumber").value),this.creditCardForm.controls.securityCode.setValue(document.getElementById("securityCode").value),this.creditCardForm.controls.holderName.setValue(document.getElementById("holderName").value),this.creditCardForm.invalid))this.utilService.openAlert({title:this.translate.instant("common.error"),body:this.translate.instant("purchase.input.alert.payment")});else{if(this.actionService.purchase.removeCreditCard(),this.amount>0&&void 0!==this.creditCardForm)try{const e={year:this.creditCardForm.controls.cardExpirationYear.value,month:this.creditCardForm.controls.cardExpirationMonth.value},t={cardno:this.creditCardForm.controls.cardNumber.value,expire:`${e.year}${e.month}`,holderName:this.creditCardForm.controls.holderName.value,securityCode:this.creditCardForm.controls.securityCode.value};yield this.actionService.purchase.payment.createCreditCardToken(t)}catch(e){return void this.utilService.openAlert({title:this.translate.instant("common.error"),body:this.translate.instant("purchase.input.alert.createCreditCardToken")})}try{const e=[];Object.keys(this.profileForm.controls).forEach(t=>{var n;/additionalProperty/.test(t)&&e.push({name:t.replace("additionalProperty.",""),value:null===(n=this.profileForm)||void 0===n?void 0:n.controls[t].value})});const t={givenName:void 0===this.profileForm.controls.givenName?void 0:this.profileForm.controls.givenName.value,familyName:void 0===this.profileForm.controls.familyName?void 0:this.profileForm.controls.familyName.value,telephone:void 0===this.profileForm.controls.telephone?void 0:this.profileForm.controls.telephone.value.e164Number,email:void 0===this.profileForm.controls.email?void 0:this.profileForm.controls.email.value,address:void 0===this.profileForm.controls.address?void 0:this.profileForm.controls.address.value,age:void 0===this.profileForm.controls.age?void 0:this.profileForm.controls.age.value,gender:void 0===this.profileForm.controls.gender?void 0:this.profileForm.controls.gender.value,additionalProperty:0===e.length?void 0:e};yield this.actionService.purchase.transaction.setProfile(t),yield this.actionService.purchase.authorizeProduct(),this.router.navigate(["/product/membership/confirm"])}catch(e){this.router.navigate(["/error"])}}}))}};L.ctorParameters=()=>[{type:c.b},{type:d.c},{type:v.f},{type:v.a},{type:x.c}],L=P([Object(i.n)({selector:"app-membership-input",template:I(n("mIPw")).default,styles:[I(n("GBJB")).default]}),F("design:paramtypes",[c.b,d.c,v.f,v.a,x.c])],L);var E=n("Fp6c"),A=n("x8Mb"),M=function(e,t,n,r){var i,o=arguments.length,c=o<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(c=(o<3?i(c):o>3?i(t,n,c):i(t,n))||c);return o>3&&c&&Object.defineProperty(t,n,c),c},_=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},D=function(e,t,n,r){return new(n||(n=Promise))((function(i,o){function c(e){try{s(r.next(e))}catch(t){o(t)}}function a(e){try{s(r.throw(e))}catch(t){o(t)}}function s(e){var t;e.done?i(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(c,a)}s((r=r.apply(e,t||[])).next())}))},N=function(e){return e&&e.__esModule?e:{default:e}};let Q=class{constructor(e,t,n,r){this.store=e,this.router=t,this.actionService=n,this.utilService=r,this.environment=Object(m.a)(),this.unitCode=h.factory.unitCode}ngOnInit(){return D(this,void 0,void 0,(function*(){try{this.purchase=this.store.pipe(Object(c.m)(a.f)),this.user=this.store.pipe(Object(c.m)(a.g)),this.isLoading=this.store.pipe(Object(c.m)(a.b)),this.products=[],this.ticketOffers=[];const{transaction:e}=yield this.actionService.purchase.getData();void 0!==e&&(yield this.actionService.purchase.transaction.cancel());const t=yield this.actionService.product.search({typeOf:{$eq:h.factory.product.ProductType.MembershipService}}),n=f((yield this.utilService.getServerTime()).date).toDate();t.forEach(e=>{this.products.push(new A.b.Purchase.Product({product:e,now:n}))})}catch(e){console.error(e),this.router.navigate(["/error"])}}))}changeProduct(e){return D(this,void 0,void 0,(function*(){try{if(this.selectProduct=e,void 0===e.id||void 0===e.offers||void 0===e.offers[0].seller||void 0===e.offers[0].seller.id)throw new Error("product.id or product.offers[0].seller.id undefined");this.ticketOffers=yield this.actionService.product.searchOffers({itemOffered:{id:e.id},seller:{id:e.offers[0].seller.id}})}catch(t){console.error(t),this.router.navigate(["/error"])}}))}changeTicketOffer(e){return D(this,void 0,void 0,(function*(){this.selectTicketOffer=e}))}onSubmit(){return D(this,void 0,void 0,(function*(){try{const e=this.selectProduct,t=this.selectTicketOffer;if(void 0===e||void 0===e.offers||void 0===e.offers[0].seller||void 0===e.offers[0].seller.id||void 0===t)throw new Error("product or ticketOffer undefined");this.actionService.purchase.setProduct({product:e}),this.actionService.purchase.setTicketOffer({ticketOffer:t}),yield this.actionService.purchase.getSeller({id:e.offers[0].seller.id}),yield this.actionService.purchase.transaction.start(),this.router.navigate(["/product/membership/input"])}catch(e){console.error(e);try{const t=JSON.parse(e);if(t.status===E.TOO_MANY_REQUESTS)return void this.router.navigate(["/congestion"]);if(t.status===E.BAD_REQUEST)return void this.router.navigate(["/maintenance"]);this.router.navigate(["/error"])}catch(t){console.error(t),this.router.navigate(["/error"])}}}))}};Q.ctorParameters=()=>[{type:c.b},{type:d.c},{type:v.a},{type:v.f}],Q=M([Object(i.n)({selector:"app-membership",template:N(n("nHKR")).default,styles:[N(n("q2RU")).default]}),_("design:paramtypes",[c.b,d.c,v.a,v.f])],Q);var H=n("unpb"),U=function(e,t,n,r){var i,o=arguments.length,c=o<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(c=(o<3?i(c):o>3?i(t,n,c):i(t,n))||c);return o>3&&c&&Object.defineProperty(t,n,c),c};const B=[{path:"",component:n("RRjC").a,children:[{path:"membership",canActivate:[],children:[{path:"",component:Q}]}]},{path:"membership",component:u,children:[{path:"input",canActivate:[H.d],component:L},{path:"confirm",canActivate:[H.d],component:R},{path:"complete",component:w}]}];let V=class{};V=U([Object(i.K)({imports:[d.d.forChild(B)],exports:[d.d]})],V);var J=function(e,t,n,r){var i,o=arguments.length,c=o<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(c=(o<3?i(c):o>3?i(t,n,c):i(t,n))||c);return o>3&&c&&Object.defineProperty(t,n,c),c};let z=class{};z=J([Object(i.K)({declarations:[u,L,R,w,Q],entryComponents:[],imports:[r.c,V,o.a],exports:[]})],z)},"96AH":function(e,t,n){"use strict";n.r(t),t.default='<app-header></app-header>\n<app-contents class="purchase">\n    <app-transaction-remaining-time *ngIf="(purchase | async)?.transaction" [transaction]="(purchase | async)?.transaction"></app-transaction-remaining-time>\n    <router-outlet></router-outlet>\n    <app-footer></app-footer>\n</app-contents>\n\n<app-loading [isLoading]="isLoading | async" [process]="process | async"></app-loading>'},AH3j:function(e,t,n){"use strict";n.r(t),t.default=""},GBJB:function(e,t,n){"use strict";n.r(t),t.default=""},PKHc:function(e,t,n){"use strict";n.r(t),t.default='<div class="contents-width mx-auto px-3 py-5">\n    <div class="mb-4">\n        <h2 class="text-large mb-4 text-center font-weight-bold">{{ \'product.membership.complete.title\' | translate }}\n        </h2>\n        <p class="mb-4 text-md-center" [innerHTML]="\'product.membership.complete.read\' | translate"></p>\n    </div>\n\n\n    <div class="p-3 bg-white mb-4">\n        <app-item-product [order]="(purchase | async)?.order"></app-item-product>\n    </div>\n\n    <div *ngIf="(purchase | async)?.order.customer" class="mb-4 p-3 bg-white">\n        <app-item-profile [profile]="(purchase | async)?.order.customer"></app-item-profile>\n    </div>\n\n\n    <div *ngIf="(purchase | async)?.order.price > 0" class="mb-4 px-3 bg-white">\n        <div class="py-3 border-bottom border-gray">\n            <div class="row align-items-center">\n                <p class="mb-2 mb-md-0 col-md-4">{{ \'common.amount\' | translate }}</p>\n                <p class="col-md-8 font-weight-bold text-large text-info">{{ (purchase | async)?.order.price |\n                    currency : \'JPY\' }}</p>\n            </div>\n        </div>\n        <div class="py-3" *ngIf="(purchase | async)?.order.paymentMethods.length > 0 && paymentTypes.length > 0">\n            <div class="row align-items-center">\n                <p class="mb-2 mb-md-0 col-md-4">{{ \'common.paymentMethod\' | translate }}</p>\n                <div class="col-md-8">\n                    <app-item-payment-method [paymentMethods]="(purchase | async)?.order.paymentMethods"\n                        [paymentTypes]="paymentTypes">\n                    </app-item-payment-method>\n                </div>\n            </div>\n        </div>\n    </div>\n\n    <div class="buttons mx-auto text-center">\n        <a *ngIf="environment.PORTAL_SITE_URL" class="btn btn-outline-primary btn-block py-3 portal-link"\n            [href]="environment.PORTAL_SITE_URL">{{ \'purchase.confirm.prev\' | translate }}</a>\n        <button *ngIf="!environment.PORTAL_SITE_URL" type="button" class="btn btn-outline-primary btn-block py-3"\n            routerLink="/">{{ \'purchase.confirm.prev\' | translate }}</button>\n    </div>\n\n</div>'},e8wj:function(e,t,n){"use strict";n.r(t),t.default='<div class="contents-width mx-auto px-3 py-5">\n    <div class="mb-4">\n        <h2 class="text-large mb-4 text-center font-weight-bold">{{ \'purchase.confirm.title\' | translate }}</h2>\n        <p class="mb-4 text-md-center" [innerHTML]="\'purchase.confirm.read\' | translate"></p>\n    </div>\n\n    <div class="p-3 bg-white mb-4">\n        <ng-container *ngFor="let action of (purchase | async)?.authorizeProducts">\n            <app-item-product [authorizeProductAction]="action"></app-item-product>\n        </ng-container>\n    </div>\n\n    <div class="mb-4 p-3 bg-white">\n        <app-item-profile [profile]="(purchase | async)?.profile"></app-item-profile>\n    </div>\n\n\n    <div class="buttons mx-auto text-center">\n        <button type="submit" class="btn btn-primary btn-block py-3 mb-3" [disabled]="isLoading | async"\n            (click)="onSubmit()">{{ \'purchase.confirm.next\' | translate }}</button>\n\n        <button type="button" class="btn btn-outline-primary btn-block py-3" routerLink="/product/membership/input">{{\n            \'purchase.confirm.prev\' | translate }}</button>\n    </div>\n</div>'},jyfw:function(e,t,n){"use strict";n.r(t),t.default=""},mIPw:function(e,t,n){"use strict";n.r(t),t.default='<div class="contents-width mx-auto px-3 py-5">\n    <div class="mb-4">\n        <h2 class="text-large mb-4 text-center font-weight-bold">{{ \'purchase.input.title\' | translate }}</h2>\n        <p class="mb-4 text-md-center" [innerHTML]="\'purchase.input.read\' | translate"></p>\n\n        <div class="p-3 bg-white">\n            <app-input-customer [profile]="(purchase | async)?.profile" [language]="(user | async)?.language"\n                (valueChanges)="profileForm = $event">\n            </app-input-customer>\n        </div>\n    </div>\n\n    <div class="mb-4" *ngIf="amount > 0">\n        <h2 class="text-large mb-4 text-center font-weight-bold">{{ \'purchase.input.payment.title\' | translate }}</h2>\n        <p class="mb-4 text-md-center" [innerHTML]="\'purchase.input.payment.read\' | translate"></p>\n\n        <div class="p-3 bg-white">\n            <div class="form-group row">\n                <p class="col-md-4 py-2 py-md-3 text-md-right">{{ \'common.amount\' | translate }}</p>\n                <div class="col-md-8">\n                    <p class="text-x-large text-info">{{ amount | currency : \'JPY\'}}</p>\n                </div>\n            </div>\n            <div class="mb-3">\n                <app-input-creditcard [amount]="amount" (valueChanges)="creditCardForm = $event">\n                </app-input-creditcard>\n            </div>\n        </div>\n    </div>\n\n    <div class="mb-4 p-3 bg-white">\n        <h3 class="mb-2 font-weight-bold">{{ \'purchase.input.payment.note.label\' | translate }}</h3>\n        <p class="text-small" [innerHTML]="\'purchase.input.payment.note.read\' | translate"></p>\n    </div>\n\n\n    <div class="buttons mx-auto text-center">\n        <button type="submit" class="btn btn-primary btn-block py-3 mb-3" [disabled]="isLoading | async"\n            (click)="onSubmit()">{{ \'purchase.input.next\' | translate }}</button>\n\n        <button type="button" class="btn btn-outline-primary btn-block py-3" routerLink="/product/membership">{{\n            \'purchase.input.prev\' | translate }}</button>\n\n    </div>\n\n</div>'},nHKR:function(e,t,n){"use strict";n.r(t),t.default='<div class="contents-width mx-auto px-3 py-5">\n    <div class="mb-4">\n        <h2 class="text-large mb-4 text-center font-weight-bold">\n            {{ \'product.membership.index.title\' | translate }}\n        </h2>\n        <p class="mb-4 text-md-center" [innerHTML]="\'product.membership.index.read\' | translate"></p>\n\n        <div class="p-3 bg-white mb-4">\n            <div *ngFor="let product of products" class="py-3 border-bottom">\n                <label class="d-flex align-items-center w-100 pointer">\n                    <input type="radio" class="d-none" name="product" (change)="changeProduct(product.data)">\n                    <div class="text-primary">\n                        <i class="bi bi-circle unchecked"></i>\n                        <i class="bi bi-record-circle checked"></i>\n                    </div>\n                    <p class="ml-3">{{ product.data.name | changeLanguage }}</p>\n                </label>\n            </div>\n        </div>\n\n        <div *ngIf="ticketOffers.length > 0" class="p-3 bg-white">\n            <div *ngFor="let ticketOffer of ticketOffers" class="py-3 border-bottom">\n                <label class="d-flex align-items-center w-100 pointer">\n                    <input type="radio" class="d-none" name="ticketOffer" (change)="changeTicketOffer(ticketOffer)">\n                    <div class="text-primary">\n                        <i class="bi bi-circle unchecked"></i>\n                        <i class="bi bi-record-circle checked"></i>\n                    </div>\n                    <div class="ml-3 w-100">\n                        <div class="d-flex justify-content-between align-items-center"\n                            *ngFor="let priceComponent of ticketOffer.priceSpecification.priceComponent">\n                            <p class="w-50 text-left">{{ priceComponent.name | changeLanguage }}</p>\n                            <div *ngIf="priceComponent.price > 0" class="w-50 d-flex justify-content-end">\n                                <p>{{ priceComponent.price | currency : priceComponent.priceCurrency }}</p>\n                                <ng-container *ngIf="priceComponent?.referenceQuantity?.value">\n                                    <p *ngIf="priceComponent?.referenceQuantity?.unitCode === unitCode.C62">\n                                        {{ \'common.referenceQuantityValue\' | translate: { value:\n                                        priceComponent?.referenceQuantity?.value } }}\n                                    </p>\n                                    <p *ngIf="priceComponent?.referenceQuantity?.unitCode === unitCode.Ann">\n                                        {{ \'common.referenceQuantityValueAnn\' | translate: { value:\n                                        priceComponent?.referenceQuantity?.value } }}\n                                    </p>\n                                    <p *ngIf="priceComponent?.referenceQuantity?.unitCode === unitCode.Day">\n                                        {{ \'common.referenceQuantityValueDay\' | translate: { value:\n                                        priceComponent?.referenceQuantity?.value } }}\n                                    </p>\n                                    <p *ngIf="priceComponent?.referenceQuantity?.unitCode === unitCode.Sec">\n                                        {{ \'common.referenceQuantityValueSec\' | translate: { value:\n                                        priceComponent?.referenceQuantity?.value } }}\n                                    </p>\n                                </ng-container>\n                            </div>\n                        </div>\n                        <p>{{ ticketOffer.description | changeLanguage }}</p>\n                    </div>\n\n                </label>\n            </div>\n        </div>\n\n\n\n    </div>\n\n    <div class="buttons mx-auto text-center">\n        <button type="submit" class="btn btn-primary btn-block py-3 mb-3"\n            [disabled]="(isLoading | async) || !selectProduct || !selectTicketOffer" (click)="onSubmit()">{{\n            \'product.membership.index.next\'\n            | translate }}</button>\n        <a *ngIf="environment.PORTAL_SITE_URL" class="btn btn-outline-primary btn-block py-3 portal-link"\n            [href]="environment.PORTAL_SITE_URL">{{ \'product.membership.index.prev\' | translate }}</a>\n    </div>\n\n</div>'},q2RU:function(e,t,n){"use strict";n.r(t),t.default="input[type=radio] + div .checked {\n  display: none;\n}\ninput[type=radio] + div .unchecked {\n  display: block;\n}\ninput[type=radio]:checked + div .checked {\n  display: block;\n}\ninput[type=radio]:checked + div .unchecked {\n  display: none;\n}"},yQu0:function(e,t,n){"use strict";n.r(t),t.default=""}}]);