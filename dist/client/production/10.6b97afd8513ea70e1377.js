(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{"+X77":function(e,t,n){"use strict";n.r(t),t.default='<div class="contents-width mx-auto px-3 py-5">\n    <h2 class="text-large mb-4 text-center font-weight-bold">{{ \'inquiry.confirm.title\' | translate }}</h2>\n    <div *ngIf="(order | async).order.orderStatus === orderStatus.OrderReturned">\n        <p class="mb-4 text-md-center" [innerHTML]="\'inquiry.confirm.canceled\' | translate"></p>\n    </div>\n    <div *ngIf="(order | async).order.orderStatus !== orderStatus.OrderReturned">\n        <p class="mb-4 text-md-center" [innerHTML]="\'inquiry.confirm.read\' | translate"></p>\n        <div class="mb-4 px-3 py-2 bg-white">\n            <div class="row align-items-center">\n                <p class="col-4">\n                    {{ \'common.confirmationNumber\' | translate }}</p>\n                <p class="col-8 text-large text-info font-weight-bold">\n                    {{ (order | async).order.confirmationNumber }}\n                </p>\n            </div>\n        </div>\n        <div *ngFor="let eventOrder of eventOrders" class="mb-4 bg-white p-3">\n            <div class="mb-3">\n                <div class="mb-1">\n                    <p class="font-weight-bold text-large">{{ eventOrder.event.name | changeLanguage }}</p>\n                    <p class="text-small"\n                        *ngIf="eventOrder.event.superEvent.headline && (eventOrder.event.superEvent.headline | changeLanguage)">\n                        {{ eventOrder.event.superEvent.headline | changeLanguage }}</p>\n                    <p class="text-small"\n                        *ngIf="eventOrder.event.superEvent.description && (eventOrder.event.superEvent.description | changeLanguage)">{{\n                        eventOrder.event.superEvent.description | changeLanguage }}</p>\n                </div>\n                <p class="mb-1">\n                    {{ eventOrder.event.startDate | formatDate: \'MM/DD(ddd) HH:mm\' }}-{{ eventOrder.event.endDate | formatDate: \'HH:mm\' }}\n                </p>\n                <p class="text-small mb-1">\n                    <span class="theater-name">{{ eventOrder.event.superEvent.location.name | changeLanguage }}</span>\n                    <span class="screen-name">&nbsp;/&nbsp;<span *ngIf="eventOrder.event.location.address" class="mr-2">{{ eventOrder.event.location.address | changeLanguage }}</span>{{ eventOrder.event.location.name | changeLanguage }}</span>\n                    <span\n                        *ngIf="eventOrder.event.workPerformed?.duration && moment.duration(eventOrder.event.workPerformed?.duration).asMinutes() > 0">\n                        &nbsp;/&nbsp;<span\n                            class="mr-1">{{ \'common.duration\' | translate }}</span>{{ moment.duration(eventOrder.event.workPerformed?.duration).asMinutes() }}{{ \'common.date.minute\' | translate }}\n                    </span>\n                </p>\n            </div>\n            <hr class="mb-3">\n            <app-item-list [acceptedOffers]="eventOrder.data" [qrcode]="environment.INQUIRY_QRCODE" (openQrcode)="openQRCodeViewer($event)"></app-item-list>\n        </div>\n\n\n        <div class="mb-4 px-3 bg-white">\n            <div class="py-3 border-bottom border-gray customer-name">\n                <div class="row align-items-center">\n                    <p class="mb-2 mb-md-0 col-md-4">{{ \'common.customerName\' | translate }}</p>\n                    <p class="col-md-8">{{ (order | async).order.customer.familyName }}\n                        {{ (order | async).order.customer.givenName }}</p>\n                </div>\n            </div>\n            <div class="py-3 border-bottom border-gray email">\n                <div class="row align-items-center">\n                    <p class="mb-2 mb-md-0 col-md-4">{{ \'common.email\' | translate }}</p>\n                    <p class="col-md-8">{{ (order | async).order.customer.email }}</p>\n                </div>\n            </div>\n            <div class="py-3 telephone">\n                <div class="row align-items-center">\n                    <p class="mb-2 mb-md-0 col-md-4">{{ \'common.telephone\' | translate }}</p>\n                    <p class="col-md-8">{{ (order | async).order.customer.telephone | libphonenumberFormat }}</p>\n                </div>\n            </div>\n            \x3c!-- <div class="py-3" *ngIf="(order | async).order.price > 0">\n                <div class="row align-items-center">\n                    <p class="mb-2 mb-md-0 col-md-4">{{ \'common.paymentMethod\' | translate }}</p>\n                    <p class="col-md-8">クレジットカード</p>\n                </div>\n            </div> --\x3e\n        </div>\n    </div>\n\n\n    <div class="buttons mx-auto text-center">\n        <div *ngIf="(order | async).order.orderStatus !== orderStatus.OrderReturned">\n            <button *ngIf="environment.INQUIRY_PRINT"\n                [disabled]="(order | async).order.orderStatus !== orderStatus.OrderDelivered" type="button"\n                class="btn btn-primary btn-block py-3 mb-3" (click)="print()"\n                [disabled]="isLoading | async">{{ \'inquiry.confirm.print\' | translate }}</button>\n            <button *ngIf="environment.INQUIRY_CANCEL"\n                [disabled]="(order | async).order.orderStatus !== orderStatus.OrderDelivered" type="button"\n                class="btn btn-danger btn-block py-3 mb-3"\n                (click)="cancelConfirm()">{{ \'inquiry.confirm.cancel\' | translate }}</button>\n        </div>\n        <button type="button" class="btn btn-link"\n            routerLink="/inquiry/input">{{ \'inquiry.confirm.prev\' | translate }}</button>\n    </div>\n</div>'},"2+OO":function(e,t,n){"use strict";n.r(t),t.default=""},"2ISw":function(e,t,n){"use strict";n.r(t);var r=n("WT9V"),o=n("LoAr"),i=n("DSWM"),a=n("981U"),s=n("E3Fy"),c=n("GovN"),l=n("zZcu"),u=n("wgY5"),d=n("PIN6"),p=n("cF7s"),m=n("cHUu"),f=n("mOXJ"),h=function(e,t,n,r){var o,i=arguments.length,a=i<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},v=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},b=function(e,t,n,r){return new(n||(n=Promise))((function(o,i){function a(e){try{c(r.next(e))}catch(t){i(t)}}function s(e){try{c(r.throw(e))}catch(t){i(t)}}function c(e){e.done?o(e.value):new n((function(t){t(e.value)})).then(a,s)}c((r=r.apply(e,t||[])).next())}))},y=function(e,t){var n,r,o,i,a={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function s(i){return function(s){return function(i){if(n)throw new TypeError("Generator is already executing.");for(;a;)try{if(n=1,r&&(o=2&i[0]?r.return:i[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,i[1])).done)return o;switch(r=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return a.label++,{value:i[1],done:!1};case 5:a.label++,r=i[1],i=[0];continue;case 7:i=a.ops.pop(),a.trys.pop();continue;default:if(!(o=(o=a.trys).length>0&&o[o.length-1])&&(6===i[0]||2===i[0])){a=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){a.label=i[1];break}if(6===i[0]&&a.label<o[1]){a.label=o[1],o=i;break}if(o&&a.label<o[2]){a.label=o[2],a.ops.push(i);break}o[2]&&a.ops.pop(),a.trys.pop();continue}i=t.call(e,a)}catch(s){i=[6,s],r=0}finally{n=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,s])}}},g=function(e){return e&&e.__esModule?e:{default:e}},I=function(){function e(e,t,n,r,o,i,a){this.store=e,this.router=t,this.utilService=n,this.orderService=r,this.userService=o,this.translate=i,this.qrcodeService=a,this.moment=u,this.orderStatus=s.factory.orderStatus,this.environment=Object(d.a)()}return e.prototype.ngOnInit=function(){var e=this;if(this.eventOrders=[],this.error=this.store.pipe(Object(c.j)(f.a)),this.order=this.store.pipe(Object(c.j)(f.d)),this.user=this.store.pipe(Object(c.j)(f.g)),this.order.subscribe((function(t){if(void 0!==t.order){var n=t.order;e.eventOrders=Object(p.t)({order:n})}else e.router.navigate(["/error"])})).unsubscribe(),""!==this.environment.INQUIRY_PRINT_WAIT_TIME){var t=Number(this.environment.INQUIRY_PRINT_WAIT_TIME);this.timer=setTimeout((function(){e.router.navigate(["/inquiry/input"])}),t)}},e.prototype.ngOnDestroy=function(){void 0!==this.timer&&clearTimeout(this.timer)},e.prototype.openQRCodeViewer=function(e){return b(this,void 0,void 0,(function(){var t,n,r,o;return y(this,(function(i){switch(i.label){case 0:return i.trys.push([0,4,,5]),[4,this.orderService.getData()];case 1:if(void 0===(t=i.sent()).order)throw new Error("order undefined");return[4,this.orderService.authorize(t.order)];case 2:return i.sent(),[4,this.orderService.getData()];case 3:if(t=i.sent(),void 0===(n=t.order))throw new Error("authorizeOrder undefined");if(void 0===(r=n.acceptedOffers.find((function(t){return t.itemOffered.typeOf===s.factory.chevre.reservationType.EventReservation&&t.itemOffered.id===e.id}))))throw new Error("itemOffered notfound");if(r.itemOffered.typeOf!==s.factory.chevre.reservationType.EventReservation)throw new Error("itemOffered typeOf missmatch");return this.qrcodeService.openQRCodeViewer({title:this.translate.instant("inquiry.confirm.qrcode.title"),code:r.itemOffered.reservedTicket.ticketToken}),[3,5];case 4:return o=i.sent(),console.error(o),this.utilService.openAlert({title:this.translate.instant("common.error"),body:this.translate.instant("inquiry.confirm.alert.authorize")}),[3,5];case 5:return[2]}}))}))},e.prototype.cancelConfirm=function(){var e=this;this.utilService.openConfirm({title:this.translate.instant("common.confirm"),body:this.translate.instant("inquiry.confirm.confirm.cancel"),cb:function(){return b(e,void 0,void 0,(function(){var e,t,n,r,o;return y(this,(function(i){switch(i.label){case 0:return i.trys.push([0,6,,7]),[4,this.userService.getData()];case 1:return e=i.sent(),[4,this.orderService.getData()];case 2:if(void 0===(t=i.sent()).order)throw new Error("order undefined");return n=[t.order],r=e.language,[4,this.orderService.cancel({orders:n,language:r})];case 3:return i.sent(),[4,this.orderService.getData()];case 4:if(void 0===(t=i.sent()).order)throw new Error("order undefined");return[4,this.orderService.inquiry({confirmationNumber:t.order.confirmationNumber,customer:{telephone:t.order.customer.telephone}})];case 5:return i.sent(),[3,7];case 6:return o=i.sent(),this.utilService.openAlert({title:this.translate.instant("common.error"),body:'\n                        <p class="mb-4">'+this.translate.instant("inquiry.confirm.alert.cancel")+'</p>\n                        <div class="p-3 bg-light-gray select-text error">\n                            <code>'+o+"</code>\n                        </div>"}),[3,7];case 7:return[2]}}))}))}})},e.prototype.print=function(){return b(this,void 0,void 0,(function(){var e,t,n,r,o,i,a,s;return y(this,(function(c){switch(c.label){case 0:if(e=u().format("YYYYMMDD"),t=u(e).add(this.environment.INQUIRY_PRINT_EXPIRED_VALUE,this.environment.INQUIRY_PRINT_EXPIRED_UNIT).format("YYYYMMDD"),void 0!==this.eventOrders.find((function(e){return u(e.event.startDate).format("YYYYMMDD")<t})))return this.utilService.openAlert({title:this.translate.instant("common.error"),body:this.translate.instant("inquiry.confirm.alert.printExpired")}),[2];void 0!==this.timer&&clearTimeout(this.timer),c.label=1;case 1:return c.trys.push([1,5,,6]),[4,this.orderService.getData()];case 2:return n=c.sent(),[4,this.userService.getData()];case 3:return r=c.sent(),void 0===n.order||void 0===r.pos||void 0===r.printer?(this.router.navigate(["/error"]),[2]):(o=[n.order],i=r.pos,a=r.printer,[4,this.orderService.print({orders:o,pos:i,printer:a})]);case 4:return c.sent(),this.router.navigate(["/inquiry/print"]),[3,6];case 5:return s=c.sent(),console.error(s),this.router.navigate(["/error"]),[3,6];case 6:return[2]}}))}))},e.ctorParameters=function(){return[{type:c.b},{type:a.c},{type:m.i},{type:m.d},{type:m.h},{type:l.c},{type:m.f}]},e=h([Object(o.n)({selector:"app-inquiry-confirm",template:g(n("+X77")).default,styles:[g(n("2+OO")).default]}),v("design:paramtypes",[c.b,a.c,m.i,m.d,m.h,l.c,m.f])],e)}(),O=n("IfiR"),w=n("WxsR"),q=function(e,t,n,r){var o,i=arguments.length,a=i<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},R=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},x=function(e,t,n,r){return new(n||(n=Promise))((function(o,i){function a(e){try{c(r.next(e))}catch(t){i(t)}}function s(e){try{c(r.throw(e))}catch(t){i(t)}}function c(e){e.done?o(e.value):new n((function(t){t(e.value)})).then(a,s)}c((r=r.apply(e,t||[])).next())}))},N=function(e,t){var n,r,o,i,a={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function s(i){return function(s){return function(i){if(n)throw new TypeError("Generator is already executing.");for(;a;)try{if(n=1,r&&(o=2&i[0]?r.return:i[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,i[1])).done)return o;switch(r=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return a.label++,{value:i[1],done:!1};case 5:a.label++,r=i[1],i=[0];continue;case 7:i=a.ops.pop(),a.trys.pop();continue;default:if(!(o=(o=a.trys).length>0&&o[o.length-1])&&(6===i[0]||2===i[0])){a=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){a.label=i[1];break}if(6===i[0]&&a.label<o[1]){a.label=o[1],o=i;break}if(o&&a.label<o[2]){a.label=o[2],a.ops.push(i);break}o[2]&&a.ops.pop(),a.trys.pop();continue}i=t.call(e,a)}catch(s){i=[6,s],r=0}finally{n=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,s])}}},S=function(e){return e&&e.__esModule?e:{default:e}},T=function(){function e(e,t,n,r,o,i){this.store=e,this.formBuilder=t,this.utilService=n,this.orderService=r,this.router=o,this.translate=i,this.environment=Object(d.a)()}return e.prototype.ngOnInit=function(){this.isLoading=this.store.pipe(Object(c.j)(f.b)),this.createInquiryForm()},e.prototype.createInquiryForm=function(){this.inquiryForm=this.formBuilder.group({confirmationNumber:["",[O.g.required,O.g.pattern(/^[0-9]+$/)]],telephone:["",[O.g.required,O.g.maxLength(15),O.g.minLength(9),function(e){var t=e.root.get("telephone");if(null!==t){if(""===t.value)return null;var n=new RegExp(/^\+/).test(t.value)?w.c(t.value):w.c(t.value,"JP");if(void 0===n.phone)return{telephone:!0};if(!w.b(n))return{telephone:!0}}return null}]]})},e.prototype.onSubmit=function(){return x(this,void 0,void 0,(function(){var e,t,n,r=this;return N(this,(function(o){switch(o.label){case 0:if(Object.keys(this.inquiryForm.controls).forEach((function(e){r.inquiryForm.controls[e].markAsTouched()})),this.inquiryForm.controls.confirmationNumber.setValue(document.getElementById("confirmationNumber").value),this.inquiryForm.controls.telephone.setValue(document.getElementById("telephone").value),this.inquiryForm.invalid)return[2];e=this.inquiryForm.controls.confirmationNumber.value,t=this.inquiryForm.controls.telephone.value,o.label=1;case 1:return o.trys.push([1,3,,4]),[4,this.orderService.inquiry({confirmationNumber:e,customer:{telephone:t}})];case 2:return o.sent(),this.router.navigate(["/inquiry/confirm"]),[3,4];case 3:return n=o.sent(),console.error(n),this.utilService.openAlert({title:this.translate.instant("common.error"),body:this.translate.instant("inquiry.input.validation")}),[3,4];case 4:return[2]}}))}))},e.prototype.changeConfirmationNumber=function(e){this.inquiryForm.controls.confirmationNumber.setValue(e)},e.prototype.changeTelephone=function(e){this.inquiryForm.controls.telephone.setValue(e)},e.ctorParameters=function(){return[{type:c.b},{type:O.a},{type:m.i},{type:m.d},{type:a.c},{type:l.c}]},e=q([Object(o.n)({selector:"app-inquiry-input",template:S(n("uWiq")).default,styles:[S(n("vcNb")).default]}),R("design:paramtypes",[c.b,O.a,m.i,m.d,a.c,l.c])],e)}(),E=function(e,t,n,r){var o,i=arguments.length,a=i<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},_=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},P=function(e){return e&&e.__esModule?e:{default:e}},k=function(){function e(e){this.router=e,this.environment=Object(d.a)()}return e.prototype.ngOnInit=function(){var e=this;if(""!==this.environment.INQUIRY_PRINT_SUCCESS_WAIT_TIME){var t=Number(this.environment.INQUIRY_PRINT_SUCCESS_WAIT_TIME);this.timer=setTimeout((function(){e.router.navigate(["/inquiry/input"])}),t)}},e.prototype.ngOnDestroy=function(){void 0!==this.timer&&clearTimeout(this.timer)},e.ctorParameters=function(){return[{type:a.c}]},e=E([Object(o.n)({selector:"app-inquiry-print",template:P(n("w++k")).default,styles:[P(n("LlIr")).default]}),_("design:paramtypes",[a.c])],e)}(),j=n("RRjC"),D=function(e,t,n,r){var o,i=arguments.length,a=i<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},L=[{path:"",component:j.a,children:[{path:"input",component:T},{path:"confirm",component:I},{path:"print",component:k}]}],F=function(){function e(){}return e=D([Object(o.I)({imports:[a.d.forChild(L)],exports:[a.d]})],e)}();n.d(t,"InquiryModule",(function(){return U}));var Y=function(e,t,n,r){var o,i=arguments.length,a=i<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},U=function(){function e(){}return e=Y([Object(o.I)({declarations:[T,I,k],imports:[r.b,F,i.a]})],e)}()},LlIr:function(e,t,n){"use strict";n.r(t),t.default=""},uWiq:function(e,t,n){"use strict";n.r(t),t.default='<div class="contents-width mx-auto px-3 py-5">\n    <form [formGroup]="inquiryForm">\n        <div class="mb-4">\n            <h2 class="text-large mb-4 text-center font-weight-bold">{{ \'inquiry.input.title\' | translate }}</h2>\n            <p class="mb-4 text-md-center" [innerHTML]="\'inquiry.input.read\' | translate"></p>\n\n            <div class="inquiry-form mx-auto p-3 bg-white">\n\n                <div class="form-group">\n                    <label class="mb-2" for="">{{ \'common.confirmationNumber\' | translate }}</label>\n                    <app-numeric-keypad *ngIf="environment.INQUIRY_INPUT_KEYPAD" inputType="number"\n                        [inputValue]="inquiryForm.controls.confirmationNumber.value"\n                        (change)="changeConfirmationNumber($event)">\n                        <input type="text" class="form-control" formControlName="confirmationNumber"\n                            id="confirmationNumber" [placeholder]="\'form.placeholder.confirmationNumber\' | translate"\n                            readonly>\n                    </app-numeric-keypad>\n                    <input *ngIf="!environment.INQUIRY_INPUT_KEYPAD" type="text" class="form-control"\n                        formControlName="confirmationNumber" id="confirmationNumber"\n                        [placeholder]="\'form.placeholder.confirmationNumber\' | translate">\n                    <div *ngIf="inquiryForm.controls.confirmationNumber.invalid && inquiryForm.controls.confirmationNumber.touched"\n                        class="mt-2">\n                        <p *ngIf="inquiryForm.controls.confirmationNumber.errors.required" class="text-danger">\n                            {{ \'form.validation.required\' | translate }}</p>\n                        <p *ngIf="inquiryForm.controls.confirmationNumber.errors.pattern" class="text-danger">\n                            {{ \'form.validation.number\' | translate }}</p>\n                    </div>\n                </div>\n                <div class="form-group mb-0">\n                    <label class="mb-2" for="">{{ \'common.telephone\' | translate }}</label>\n                    <app-numeric-keypad *ngIf="environment.INQUIRY_INPUT_KEYPAD" inputType="telephone"\n                        [inputValue]="inquiryForm.controls.telephone.value" (change)="changeTelephone($event)">\n                        <input type="password" class="form-control" formControlName="telephone" id="telephone"\n                            [placeholder]="\'form.placeholder.telephone\' | translate" readonly>\n                    </app-numeric-keypad>\n                    <input *ngIf="!environment.INQUIRY_INPUT_KEYPAD" type="password" class="form-control"\n                        formControlName="telephone" id="telephone"\n                        [placeholder]="\'form.placeholder.telephone\' | translate">\n                    <div *ngIf="inquiryForm.controls.telephone.invalid && inquiryForm.controls.telephone.touched"\n                        class="mt-2">\n                        <p *ngIf="inquiryForm.controls.telephone.errors.required" class="text-danger">\n                            {{ \'form.validation.required\' | translate }}</p>\n                        <p *ngIf="inquiryForm.controls.telephone.errors.minlength" class="text-danger">\n                            {{ \'form.validation.minlength\' | translate: { value: inquiryForm.controls.telephone.errors.minlength.requiredLength } }}\n                        </p>\n                        <p *ngIf="inquiryForm.controls.telephone.errors.maxlength" class="text-danger">\n                            {{ \'form.validation.maxlength\' | translate: { value: inquiryForm.controls.telephone.errors.maxlength.requiredLength } }}\n                        </p>\n                        <p *ngIf="inquiryForm.controls.telephone.errors.pattern" class="text-danger">\n                            {{ \'form.validation.number\' | translate }}</p>\n                        <p *ngIf="inquiryForm.controls.telephone.errors.telephone" class="text-danger">\n                            {{ \'form.validation.telephone\' | translate }}</p>\n                    </div>\n                </div>\n\n            </div>\n        </div>\n\n        <div class="buttons mx-auto text-center">\n            <button type="submit" [disabled]="isLoading | async" class="btn btn-primary btn-block py-3 mb-3"\n                (click)="onSubmit()">{{ \'inquiry.input.next\' | translate }}</button>\n            <a *ngIf="environment.PORTAL_SITE_URL" class="btn btn-link portal-link"\n                [href]="environment.PORTAL_SITE_URL">{{ \'inquiry.input.prev\' | translate }}</a>\n            <button *ngIf="!environment.PORTAL_SITE_URL" type="button" class="btn btn-link"\n                routerLink="/">{{ \'inquiry.input.prev\' | translate }}</button>\n        </div>\n    </form>\n</div>'},vcNb:function(e,t,n){"use strict";n.r(t),t.default=".inquiry-form {\n  max-width: 500px;\n}"},"w++k":function(e,t,n){"use strict";n.r(t),t.default='<div class="contents-width mx-auto px-3 py-5">\n    <div class="mb-4">\n        <h2 class="text-large mb-4 text-center font-weight-bold">{{ \'inquiry.print.title\' | translate }}</h2>\n        <p class="mb-4 text-md-center" [innerHTML]="\'inquiry.print.read\' | translate"></p>\n    </div>\n\n    <div class="buttons mx-auto text-center">\n        <button type="button" class="btn btn-primary btn-block py-3" routerLink="/inquiry/input">\n            {{ \'inquiry.print.prev\' | translate }}\n        </button>\n    </div>\n</div>'}}]);