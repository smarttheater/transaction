!function(){function t(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function e(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function n(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{"9q5l":function(t,e,n){"use strict";n.r(e),e.default='<div class="contents-width mx-auto px-3 py-5">\n    <h2 class="text-large mb-4 text-center font-weight-bold">{{ \'order.point.transfer.complete.title\' | translate }}\n    </h2>\n    <p class="mb-4 text-md-center" [innerHTML]="\'order.point.transfer.complete.read\' | translate"></p>\n\n\n    <div class="buttons mx-auto text-center">\n        <a *ngIf="environment.PORTAL_SITE_URL" class="btn btn-outline-primary btn-block py-3 portal-link"\n            [href]="environment.PORTAL_SITE_URL">{{ \'order.point.transfer.complete.prev\' | translate }}</a>\n        <button *ngIf="!environment.PORTAL_SITE_URL && theaterCode" type="button" class="btn btn-outline-primary btn-block py-3"\n        [routerLink]="\'/order/point/transfer/\' + theaterCode + \'/input\'">{{ \'order.point.transfer.complete.prev\' | translate }}</button>\n        <button *ngIf="!environment.PORTAL_SITE_URL && !theaterCode" type="button" class="btn btn-outline-primary btn-block py-3"\n            routerLink="/order/point/transfer/input">{{ \'order.point.transfer.complete.prev\' | translate }}</button>\n    </div>\n</div>'},H3c9:function(t,e,n){"use strict";n.r(e),e.default=".order-form {\n  max-width: 500px;\n}"},UDwU:function(t,e,n){"use strict";n.r(e),e.default='<div class="contents-width mx-auto px-3 py-5">\n    <form [formGroup]="inputForm">\n        <h2 class="text-large mb-4 text-center font-weight-bold">{{ \'order.point.transfer.confirm.title\' | translate }}\n        </h2>\n        <div *ngIf="(order | async)?.order.orderStatus === orderStatus.OrderReturned">\n            <p class="mb-4 text-md-center" [innerHTML]="\'order.point.transfer.confirm.canceled\' | translate"></p>\n        </div>\n        <div class="order-form mx-auto" *ngIf="(order | async)?.order.orderStatus !== orderStatus.OrderReturned">\n            <p class="mb-4 text-md-center" [innerHTML]="\'order.point.transfer.confirm.read\' | translate"></p>\n            <app-order-detail [order]="(order | async)?.order" [customer]="false">\n            </app-order-detail>\n\n            <div class="mx-auto p-3 bg-white mb-4">\n                <div class="form-group mb-0">\n                    <div class="container px-0">\n                        <div class="row align-items-center">\n                            <div class="col-md-4 col-12">\n                                <label class="mb-2 mb-md-0" for="">{{ \'order.point.transfer.confirm.accountNumber\' |\n                                    translate }}</label>\n                            </div>\n                            <div class="col-md-8 col-12">\n                                \x3c!-- <input type="text" class="form-control" formControlName="accountNumber"\n                                    id="accountNumber"> --\x3e\n                                <div class="input-group">\n                                    <input type="text" class="form-control" formControlName="accountNumber"\n                                        id="accountNumber">\n                                    <div class="input-group-append" (click)="openQRReader()">\n                                        <span class="input-group-text"><i class="fas fa-camera"></i></span>\n                                    </div>\n                                </div>\n                                <div *ngIf="inputForm.controls.accountNumber.invalid && inputForm.controls.accountNumber.touched"\n                                    class="mt-2">\n                                    <p *ngIf="inputForm.controls.accountNumber.errors?.required" class="text-danger">\n                                        {{ \'form.validation.required\' | translate }}</p>\n                                    <p *ngIf="inputForm.controls.accountNumber.errors?.minlength" class="text-danger">\n                                        {{ \'form.validation.minlength\' | translate: { value:\n                                        inputForm.controls.accountNumber.errors?.minlength.requiredLength } }}\n                                    </p>\n                                    <p *ngIf="inputForm.controls.accountNumber.errors?.maxlength" class="text-danger">\n                                        {{ \'form.validation.maxlength\' | translate: { value:\n                                        inputForm.controls.accountNumber.errors?.maxlength.requiredLength } }}\n                                    </p>\n                                    <p *ngIf="inputForm.controls.accountNumber.errors?.pattern" class="text-danger">\n                                        {{ \'form.validation.number\' | translate }}</p>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n\n\n\n\n        <div class="buttons mx-auto text-center">\n            <div *ngIf="(order | async)?.order.orderStatus !== orderStatus.OrderReturned">\n                <button [disabled]="(isLoading | async) || inputForm.invalid" type="button"\n                    class="btn btn-primary btn-block py-3 mb-3" (click)="transfer()">{{\n                    \'order.point.transfer.confirm.next\' | translate }}</button>\n            </div>\n            <button *ngIf="theaterCode" type="button" class="btn btn-outline-primary btn-block py-3"\n                [routerLink]="\'/order/point/transfer/\' + theaterCode + \'/input\'">{{ \'order.point.transfer.confirm.prev\'\n                | translate }}</button>\n            <button *ngIf="!theaterCode" type="button" class="btn btn-outline-primary btn-block py-3"\n                routerLink="/order/point/transfer/input">{{ \'order.point.transfer.confirm.prev\' | translate }}</button>\n        </div>\n    </form>\n</div>'},cfg2:function(e,r,o){"use strict";o.r(r),o.d(r,"OrderModule",(function(){return C}));var a=o("2kYt"),i=o("EM62"),c=o("DSWM"),s=o("sEIs"),l=o("sN6X"),u=o("PIN6"),p=o("cHUu"),d=o("mOXJ"),f=function(t){return t&&t.__esModule?t:{default:t}},m=function(){function e(n,r,o){t(this,e),this.store=n,this.actionService=r,this.activatedRoute=o,this.environment=Object(u.a)()}return n(e,[{key:"ngOnInit",value:function(){return t=this,e=void 0,n=void 0,r=regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:this.isLoading=this.store.pipe(Object(l.m)(d.b)),this.theaterCode=this.activatedRoute.snapshot.params.theaterCode,this.actionService.order.delete();case 1:case"end":return t.stop()}}),t,this)})),new(n||(n=Promise))((function(o,a){function i(t){try{s(r.next(t))}catch(e){a(e)}}function c(t){try{s(r.throw(t))}catch(e){a(e)}}function s(t){var e;t.done?o(t.value):(e=t.value,e instanceof n?e:new n((function(t){t(e)}))).then(i,c)}s((r=r.apply(t,e||[])).next())}));var t,e,n,r}}]),e}();m.ctorParameters=function(){return[{type:l.b},{type:p.a},{type:s.a}]},m=function(t,e,n,r){var o,a=arguments.length,i=a<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(t,e,n,r);else for(var c=t.length-1;c>=0;c--)(o=t[c])&&(i=(a<3?o(i):a>3?o(e,n,i):o(e,n))||i);return a>3&&i&&Object.defineProperty(e,n,i),i}([Object(i.n)({selector:"app-order-point-transfer-complete",template:f(o("9q5l")).default,styles:[f(o("oOOE")).default]}),function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)}("design:paramtypes",[l.b,p.a,s.a])],m);var h=o("nIj0"),v=o("icHh"),b=o("s2Ay"),y=o("wgY5"),g=function(t,e,n,r){return new(n||(n=Promise))((function(o,a){function i(t){try{s(r.next(t))}catch(e){a(e)}}function c(t){try{s(r.throw(t))}catch(e){a(e)}}function s(t){var e;t.done?o(t.value):(e=t.value,e instanceof n?e:new n((function(t){t(e)}))).then(i,c)}s((r=r.apply(t,e||[])).next())}))},x=function(t){return t&&t.__esModule?t:{default:t}},I=function(){function e(n,r,o,a,i,c,s,l){t(this,e),this.store=n,this.router=r,this.utilService=o,this.actionService=a,this.translate=i,this.activatedRoute=c,this.formBuilder=s,this.qrcodeService=l,this.moment=y,this.orderStatus=v.factory.orderStatus,this.environment=Object(u.a)()}return n(e,[{key:"ngOnInit",value:function(){return g(this,void 0,void 0,regeneratorRuntime.mark((function t(){var e;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return this.isLoading=this.store.pipe(Object(l.m)(d.b)),this.error=this.store.pipe(Object(l.m)(d.a)),this.order=this.store.pipe(Object(l.m)(d.d)),this.theaterCode=this.activatedRoute.snapshot.params.theaterCode,this.createInputForm(),t.prev=1,t.next=4,this.actionService.order.getData();case 4:if(void 0!==(e=t.sent.order)){t.next=7;break}throw new Error("order undefined");case 7:if(void 0===e.acceptedOffers.find((function(t){return t.itemOffered.typeOf!==v.factory.chevre.reservationType.EventReservation}))){t.next=9;break}throw new Error("not EventReservation");case 9:t.next=14;break;case 11:t.prev=11,t.t0=t.catch(1),console.error(t.t0),this.router.navigate(["/error"]);case 14:case"end":return t.stop()}}),t,this,[[1,11]])})))}},{key:"createInputForm",value:function(){this.inputForm=this.formBuilder.group({accountNumber:["",[h.k.required,h.k.pattern(/^[0-9]+$/)]]})}},{key:"transfer",value:function(){var t=this;this.utilService.openConfirm({title:this.translate.instant("common.confirm"),body:this.translate.instant("order.point.transfer.confirm.confirm.transfer"),cb:function(){return g(t,void 0,void 0,regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(t.prev=0,void 0===this.theaterCode){t.next=3;break}return t.abrupt("return",void this.router.navigate(["/order/point/transfer/".concat(this.theaterCode,"/complete")]));case 3:this.router.navigate(["/order/point/transfer/complete"]),t.next=9;break;case 6:t.prev=6,t.t0=t.catch(0),this.utilService.openAlert({title:this.translate.instant("common.error"),body:'\n                        <p class="mb-4">'.concat(this.translate.instant("inquiry.confirm.alert.transfer"),'</p>\n                        <div class="p-3 bg-light-gray select-text error">\n                            <code>').concat(t.t0,"</code>\n                        </div>")});case 9:case"end":return t.stop()}}),t,this,[[0,6]])})))}})}},{key:"openQRReader",value:function(){var t=this;this.qrcodeService.openQRCodeReader({cb:function(e){var n=e;t.inputForm.controls.accountNumber.setValue(n)}})}}]),e}();I.ctorParameters=function(){return[{type:l.b},{type:s.c},{type:p.g},{type:p.a},{type:b.c},{type:s.a},{type:h.b},{type:p.e}]},I=function(t,e,n,r){var o,a=arguments.length,i=a<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(t,e,n,r);else for(var c=t.length-1;c>=0;c--)(o=t[c])&&(i=(a<3?o(i):a>3?o(e,n,i):o(e,n))||i);return a>3&&i&&Object.defineProperty(e,n,i),i}([Object(i.n)({selector:"app-order-point-transfer-confirm",template:x(o("UDwU")).default,styles:[x(o("kG0s")).default]}),function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)}("design:paramtypes",[l.b,s.c,p.g,p.a,b.c,s.a,h.b,p.e])],I);var R=o("WxsR"),N=o("ddJ1"),k=function(t){return t&&t.__esModule?t:{default:t}},O=function(){function e(n,r,o,a,i,c,s){t(this,e),this.store=n,this.formBuilder=r,this.utilService=o,this.actionService=a,this.activatedRoute=i,this.router=c,this.translate=s,this.environment=Object(u.a)(),this.SearchCountryField=N.c,this.TooltipLabel=N.d,this.CountryISO=N.a}return n(e,[{key:"ngOnInit",value:function(){var t=this;this.isLoading=this.store.pipe(Object(l.m)(d.b)),this.theaterCode=this.activatedRoute.snapshot.params.theaterCode,this.createInputForm(),setTimeout((function(){if(void 0!==t.intlTelInput){var e=t.intlTelInput.allCountries.find((function(t){return t.iso2===N.a.Japan}));void 0!==e&&(e.placeHolder=t.translate.instant("form.placeholder.telephone"))}}),0)}},{key:"createInputForm",value:function(){this.inputForm=this.formBuilder.group({confirmationNumber:["",[h.k.required,h.k.pattern(/^[0-9]+$/)]],telephone:["",this.environment.INQUIRY_INPUT_KEYPAD?[h.k.required,h.k.maxLength(15),h.k.minLength(9),function(t){var e=t.root.get("telephone");if(null!==e){if(""===e.value)return null;var n=new RegExp(/^\+/).test(e.value)?R.c(e.value):R.c(e.value,"JP");if(void 0===n.phone)return{telephone:!0};if(!R.b(n))return{telephone:!0}}return null}]:[h.k.required]]})}},{key:"onSubmit",value:function(){return t=this,e=void 0,n=void 0,r=regeneratorRuntime.mark((function t(){var e,n,r=this;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(Object.keys(this.inputForm.controls).forEach((function(t){r.inputForm.controls[t].markAsTouched()})),this.inputForm.controls.confirmationNumber.setValue(document.getElementById("confirmationNumber").value),this.environment.INQUIRY_INPUT_KEYPAD&&this.inputForm.controls.telephone.setValue(document.getElementById("telephone").value),!this.inputForm.invalid){t.next=2;break}return t.abrupt("return");case 2:return e=this.inputForm.controls.confirmationNumber.value,n=this.environment.INQUIRY_INPUT_KEYPAD?this.inputForm.controls.telephone.value:this.inputForm.controls.telephone.value.e164Number,t.prev=3,t.next=6,this.actionService.order.inquiry({theaterCode:this.theaterCode,confirmationNumber:e,customer:{telephone:n}});case 6:if(void 0===this.theaterCode){t.next=8;break}return t.abrupt("return",void this.router.navigate(["/order/point/transfer/".concat(this.theaterCode,"/confirm")]));case 8:this.router.navigate(["/order/point/transfer/confirm"]),t.next=14;break;case 11:t.prev=11,t.t0=t.catch(3),console.error(t.t0),this.utilService.openAlert({title:this.translate.instant("common.error"),body:this.translate.instant("inquiry.input.validation")});case 14:case"end":return t.stop()}}),t,this,[[3,11]])})),new(n||(n=Promise))((function(o,a){function i(t){try{s(r.next(t))}catch(e){a(e)}}function c(t){try{s(r.throw(t))}catch(e){a(e)}}function s(t){var e;t.done?o(t.value):(e=t.value,e instanceof n?e:new n((function(t){t(e)}))).then(i,c)}s((r=r.apply(t,e||[])).next())}));var t,e,n,r}},{key:"changeConfirmationNumber",value:function(t){this.inputForm.controls.confirmationNumber.setValue(t)}},{key:"changeTelephone",value:function(t){this.inputForm.controls.telephone.setValue(t)}}]),e}();O.ctorParameters=function(){return[{type:l.b},{type:h.b},{type:p.g},{type:p.a},{type:s.a},{type:s.c},{type:b.c}]},O.propDecorators={intlTelInput:[{type:i.lb,args:["intlTelInput"]}]},O=function(t,e,n,r){var o,a=arguments.length,i=a<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(t,e,n,r);else for(var c=t.length-1;c>=0;c--)(o=t[c])&&(i=(a<3?o(i):a>3?o(e,n,i):o(e,n))||i);return a>3&&i&&Object.defineProperty(e,n,i),i}([Object(i.n)({selector:"app-order-point-transfer-input",template:k(o("qNXV")).default,styles:[k(o("H3c9")).default]}),function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)}("design:paramtypes",[l.b,h.b,p.g,p.a,s.a,s.c,b.c])],O);var w=[{path:"",component:o("RRjC").a,children:[{path:"point/transfer",children:[{path:"input",component:O},{path:"confirm",component:I},{path:"complete",component:m},{path:":theaterCode/input",component:O},{path:":theaterCode/confirm",component:I},{path:":theaterCode/complete",component:m}]}]}],F=function e(){t(this,e)};F=function(t,e,n,r){var o,a=arguments.length,i=a<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(t,e,n,r);else for(var c=t.length-1;c>=0;c--)(o=t[c])&&(i=(a<3?o(i):a>3?o(e,n,i):o(e,n))||i);return a>3&&i&&Object.defineProperty(e,n,i),i}([Object(i.K)({imports:[s.d.forChild(w)],exports:[s.d]})],F);var C=function e(){t(this,e)};C=function(t,e,n,r){var o,a=arguments.length,i=a<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(t,e,n,r);else for(var c=t.length-1;c>=0;c--)(o=t[c])&&(i=(a<3?o(i):a>3?o(e,n,i):o(e,n))||i);return a>3&&i&&Object.defineProperty(e,n,i),i}([Object(i.K)({declarations:[m,I,O],imports:[a.c,F,c.a]})],C)},kG0s:function(t,e,n){"use strict";n.r(e),e.default=".order-form {\n  max-width: 768px;\n}"},oOOE:function(t,e,n){"use strict";n.r(e),e.default=""},qNXV:function(t,e,n){"use strict";n.r(e),e.default='<div class="contents-width mx-auto px-3 py-5">\n    <form [formGroup]="inputForm">\n        <div class="mb-4">\n            <h2 class="text-large mb-4 text-center font-weight-bold">{{ \'order.point.transfer.input.title\' | translate }}</h2>\n            <p class="mb-4 text-md-center" [innerHTML]="\'order.point.transfer.input.read\' | translate"></p>\n\n            <div class="order-form mx-auto p-3 bg-white">\n\n                <div class="form-group">\n                    <label class="mb-2" for="">{{ \'common.confirmationNumber\' | translate }}</label>\n                    <app-numeric-keypad *ngIf="environment.INQUIRY_INPUT_KEYPAD" inputType="string"\n                        [inputValue]="inputForm.controls.confirmationNumber.value"\n                        (change)="changeConfirmationNumber($event)">\n                        <input type="text" class="form-control" formControlName="confirmationNumber"\n                            id="confirmationNumber" [placeholder]="\'form.placeholder.confirmationNumber\' | translate"\n                            readonly>\n                    </app-numeric-keypad>\n                    <input *ngIf="!environment.INQUIRY_INPUT_KEYPAD" type="text" class="form-control"\n                        formControlName="confirmationNumber" id="confirmationNumber"\n                        [placeholder]="\'form.placeholder.confirmationNumber\' | translate">\n                    <div *ngIf="inputForm.controls.confirmationNumber.invalid && inputForm.controls.confirmationNumber.touched"\n                        class="mt-2">\n                        <p *ngIf="inputForm.controls.confirmationNumber.errors?.required" class="text-danger">\n                            {{ \'form.validation.required\' | translate }}</p>\n                        <p *ngIf="inputForm.controls.confirmationNumber.errors?.pattern" class="text-danger">\n                            {{ \'form.validation.number\' | translate }}</p>\n                    </div>\n                </div>\n                <div class="form-group mb-0">\n                    <label class="mb-2" for="">{{ \'form.label.telephone\' | translate }}</label>\n                    <app-numeric-keypad *ngIf="environment.INQUIRY_INPUT_KEYPAD" inputType="telephone"\n                        [inputValue]="inputForm.controls.telephone.value" (change)="changeTelephone($event)">\n                        <input type="password" class="form-control" formControlName="telephone" id="telephone"\n                            [placeholder]="\'form.placeholder.telephone\' | translate" readonly>\n                    </app-numeric-keypad>\n                    <ngx-intl-tel-input *ngIf="!environment.INQUIRY_INPUT_KEYPAD"\n                        #intlTelInput\n                        [cssClass]="\'form-control text-security-disc\'"\n                        [preferredCountries]="[CountryISO.Japan]"\n                        [enableAutoCountrySelect]="false"\n                        [enablePlaceholder]="true"\n                        [searchCountryFlag]="true"\n                        [searchCountryField]="[SearchCountryField.Iso2, SearchCountryField.Name]"\n                        [selectFirstCountry]="false"\n                        [selectedCountryISO]="CountryISO.Japan"\n                        [maxLength]="15"\n                        [tooltipField]="TooltipLabel.Name"\n                        [phoneValidation]="true"\n                        [separateDialCode]="false"\n                        name="telephone"\n                        formControlName="telephone"\n                        type="password"></ngx-intl-tel-input>\n                    \x3c!-- <input *ngIf="!environment.INQUIRY_INPUT_KEYPAD" type="password" class="form-control"\n                        formControlName="telephone" id="telephone"\n                        [placeholder]="\'form.placeholder.telephone\' | translate"> --\x3e\n                    <div *ngIf="inputForm.controls.telephone.invalid && inputForm.controls.telephone.touched"\n                        class="mt-2">\n                        <p *ngIf="inputForm.controls.telephone.errors?.required" class="text-danger">\n                            {{ \'form.validation.required\' | translate }}</p>\n                        <p *ngIf="inputForm.controls.telephone.errors?.minlength" class="text-danger">\n                            {{ \'form.validation.minlength\' | translate: { value: inputForm.controls.telephone.errors?.minlength.requiredLength } }}\n                        </p>\n                        <p *ngIf="inputForm.controls.telephone.errors?.maxlength" class="text-danger">\n                            {{ \'form.validation.maxlength\' | translate: { value: inputForm.controls.telephone.errors?.maxlength.requiredLength } }}\n                        </p>\n                        <p *ngIf="inputForm.controls.telephone.errors?.pattern" class="text-danger">\n                            {{ \'form.validation.number\' | translate }}</p>\n                        <p *ngIf="inputForm.controls.telephone.errors?.telephone" class="text-danger">\n                            {{ \'form.validation.telephone\' | translate }}</p>\n                        <p *ngIf="inputForm.controls.telephone.errors?.validatePhoneNumber" class="text-danger">\n                            {{ \'form.validation.telephone\' | translate }}\n                        </p>\n                    </div>\n                </div>\n\n            </div>\n        </div>\n\n        <div class="buttons mx-auto text-center">\n            <button type="submit" [disabled]="isLoading | async" class="btn btn-primary btn-block py-3 mb-3"\n                (click)="onSubmit()">{{ \'order.point.transfer.input.next\' | translate }}</button>\n            <a *ngIf="environment.PORTAL_SITE_URL" class="btn btn-outline-primary btn-block py-3 portal-link"\n                [href]="environment.PORTAL_SITE_URL">{{ \'order.point.transfer.input.prev\' | translate }}</a>\n            <button *ngIf="!environment.PORTAL_SITE_URL" type="button" class="btn btn-outline-primary btn-block py-3"\n                routerLink="/">{{ \'order.point.transfer.input.prev\' | translate }}</button>\n        </div>\n    </form>\n</div>'}}])}();