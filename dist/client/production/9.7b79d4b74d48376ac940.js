(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{"+X77":function(e,r,t){"use strict";t.r(r),r.default='<div class="contents-width mx-auto px-3 py-5">\r\n    <h2 class="text-large mb-4 text-center font-weight-bold">{{ \'inquiry.confirm.title\' | translate }}</h2>\r\n    <div *ngIf="(order | async).order.orderStatus === orderStatus.OrderReturned">\r\n        <p class="mb-4 text-md-center" [innerHTML]="\'inquiry.confirm.canceled\' | translate"></p>\r\n    </div>\r\n    <div *ngIf="(order | async).order.orderStatus !== orderStatus.OrderReturned">\r\n        <p class="mb-4 text-md-center" [innerHTML]="\'inquiry.confirm.read\' | translate"></p>\r\n        <div class="mb-4 px-3 py-2 bg-white">\r\n            <div class="row align-items-center">\r\n                <p class="col-4">\r\n                    {{ \'common.confirmationNumber\' | translate }}</p>\r\n                <p class="col-8 text-large text-info font-weight-bold">\r\n                    {{ (order | async).order.confirmationNumber }}\r\n                </p>\r\n            </div>\r\n        </div>\r\n        <div *ngFor="let eventOrder of eventOrders" class="mb-4 bg-white p-3">\r\n            <div class="mb-3">\r\n                <div class="mb-1">\r\n                    <p class="font-weight-bold text-large">{{ eventOrder.event.name | changeLanguage }}</p>\r\n                    <p class="text-small"\r\n                        *ngIf="eventOrder.event.superEvent.headline && (eventOrder.event.superEvent.headline | changeLanguage)">\r\n                        {{ eventOrder.event.superEvent.headline | changeLanguage }}</p>\r\n                    <p class="text-small"\r\n                        *ngIf="eventOrder.event.superEvent.description && (eventOrder.event.superEvent.description | changeLanguage)">{{\r\n                        eventOrder.event.superEvent.description | changeLanguage }}</p>\r\n                </div>\r\n                <p class="mb-1">\r\n                    {{ eventOrder.event.startDate | formatDate: \'MM/DD(ddd) HH:mm\' }}-{{ eventOrder.event.endDate | formatDate: \'HH:mm\' }}\r\n                </p>\r\n                <p class="text-small mb-1">\r\n                    <span class="theatre-name">{{ eventOrder.event.superEvent.location.name | changeLanguage }}</span>\r\n                    <span class="screen-name">&nbsp;/&nbsp;{{ eventOrder.event.location.name | changeLanguage }}</span>\r\n                    <span\r\n                        *ngIf="eventOrder.event.workPerformed?.duration && moment.duration(eventOrder.event.workPerformed?.duration).asMinutes() > 0">\r\n                        &nbsp;/&nbsp;<span\r\n                            class="mr-1">{{ \'common.duration\' | translate }}</span>{{ moment.duration(eventOrder.event.workPerformed?.duration).asMinutes() }}{{ \'common.date.minute\' | translate }}\r\n                    </span>\r\n                </p>\r\n            </div>\r\n            <hr class="mb-3">\r\n            <div *ngIf="environment.DISPLAY_TICKETED_SEAT">\r\n                <div *ngFor="let acceptedOffer of eventOrder.data">\r\n                    <p>\r\n                        <span\r\n                            *ngIf="acceptedOffer.itemOffered.reservedTicket.ticketedSeat && environment.DISPLAY_TICKETED_SEAT">\r\n                            {{ acceptedOffer.itemOffered.reservedTicket.ticketedSeat.seatNumber }}&nbsp;/&nbsp;</span>{{ acceptedOffer.itemOffered.reservedTicket.ticketType.name | changeLanguage }}&nbsp;/&nbsp;{{\r\n                            getTicketPrice(acceptedOffer).single | currency : \'JPY\' }}\r\n                    </p>\r\n                </div>\r\n            </div>\r\n\r\n            <div *ngIf="!environment.DISPLAY_TICKETED_SEAT">\r\n                <div *ngFor="let ticket of changeTicketCountByOrder(eventOrder.data)">\r\n                    <p>\r\n                        {{ ticket.acceptedOffer.itemOffered.reservedTicket.ticketType.name | changeLanguage }}&nbsp;/&nbsp;{{\r\n                            getTicketPrice(ticket.acceptedOffer).single | currency : \'JPY\' }}&nbsp;×&nbsp;{{ ticket.count }}\r\n                    </p>\r\n                </div>\r\n            </div>\r\n        </div>\r\n\r\n\r\n        <div class="mb-4 px-3 bg-white">\r\n            <div class="py-3 border-bottom border-gray customer-name">\r\n                <div class="row align-items-center">\r\n                    <p class="mb-2 mb-md-0 col-md-4">{{ \'common.customerName\' | translate }}</p>\r\n                    <p class="col-md-8">{{ (order | async).order.customer.familyName }}\r\n                        {{ (order | async).order.customer.givenName }}</p>\r\n                </div>\r\n            </div>\r\n            <div class="py-3 border-bottom border-gray email">\r\n                <div class="row align-items-center">\r\n                    <p class="mb-2 mb-md-0 col-md-4">{{ \'common.email\' | translate }}</p>\r\n                    <p class="col-md-8">{{ (order | async).order.customer.email }}</p>\r\n                </div>\r\n            </div>\r\n            <div class="py-3 telephone">\r\n                <div class="row align-items-center">\r\n                    <p class="mb-2 mb-md-0 col-md-4">{{ \'common.telephone\' | translate }}</p>\r\n                    <p class="col-md-8">{{ (order | async).order.customer.telephone | libphonenumberFormat }}</p>\r\n                </div>\r\n            </div>\r\n            \x3c!-- <div class="py-3" *ngIf="(order | async).order.price > 0">\r\n                <div class="row align-items-center">\r\n                    <p class="mb-2 mb-md-0 col-md-4">{{ \'common.paymentMethod\' | translate }}</p>\r\n                    <p class="col-md-8">クレジットカード</p>\r\n                </div>\r\n            </div> --\x3e\r\n        </div>\r\n    </div>\r\n\r\n\r\n    <div class="buttons mx-auto text-center">\r\n        <div *ngIf="(order | async).order.orderStatus !== orderStatus.OrderReturned">\r\n            <button *ngIf="environment.INQUIRY_QRCODE"\r\n                [disabled]="(order | async).order.orderStatus !== orderStatus.OrderDelivered" type="button"\r\n                class="btn btn-primary btn-block py-3 mb-3"\r\n                (click)="showQrCode()">{{ \'inquiry.confirm.next\' | translate }}</button>\r\n            <button *ngIf="environment.INQUIRY_PRINT"\r\n                [disabled]="(order | async).order.orderStatus !== orderStatus.OrderDelivered" type="button"\r\n                class="btn btn-primary btn-block py-3 mb-3" (click)="print()"\r\n                [disabled]="isLoading | async">{{ \'inquiry.confirm.print\' | translate }}</button>\r\n            <button *ngIf="environment.INQUIRY_CANCEL"\r\n                [disabled]="(order | async).order.orderStatus !== orderStatus.OrderDelivered" type="button"\r\n                class="btn btn-danger btn-block py-3 mb-3"\r\n                (click)="cancelConfirm()">{{ \'inquiry.confirm.cancel\' | translate }}</button>\r\n        </div>\r\n        <button type="button" class="btn btn-link"\r\n            routerLink="/inquiry/input">{{ \'inquiry.confirm.prev\' | translate }}</button>\r\n    </div>\r\n</div>'},"2+OO":function(e,r,t){"use strict";t.r(r),r.default=""},"2ISw":function(e,r,t){"use strict";t.r(r);var n=t("WT9V"),o=t("LoAr"),i=t("DSWM"),a=t("981U"),s=t("E3Fy"),c=t("GovN"),l=t("zZcu"),u=t("wgY5"),d=t("aroP"),p=t("PIN6"),m=t("cF7s"),f=t("cHUu"),h=t("mOXJ"),v=t("/nds"),b=function(e,r,t,n){var o,i=arguments.length,a=i<3?r:null===n?n=Object.getOwnPropertyDescriptor(r,t):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,r,t,n);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(r,t,a):o(r,t))||a);return i>3&&a&&Object.defineProperty(r,t,a),a},y=function(e,r){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,r)},g=function(e,r,t,n){return new(t||(t=Promise))(function(o,i){function a(e){try{c(n.next(e))}catch(r){i(r)}}function s(e){try{c(n.throw(e))}catch(r){i(r)}}function c(e){e.done?o(e.value):new t(function(r){r(e.value)}).then(a,s)}c((n=n.apply(e,r||[])).next())})},I=function(e,r){var t,n,o,i,a={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function s(i){return function(s){return function(i){if(t)throw new TypeError("Generator is already executing.");for(;a;)try{if(t=1,n&&(o=2&i[0]?n.return:i[0]?n.throw||((o=n.return)&&o.call(n),0):n.next)&&!(o=o.call(n,i[1])).done)return o;switch(n=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return a.label++,{value:i[1],done:!1};case 5:a.label++,n=i[1],i=[0];continue;case 7:i=a.ops.pop(),a.trys.pop();continue;default:if(!(o=(o=a.trys).length>0&&o[o.length-1])&&(6===i[0]||2===i[0])){a=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){a.label=i[1];break}if(6===i[0]&&a.label<o[1]){a.label=o[1],o=i;break}if(o&&a.label<o[2]){a.label=o[2],a.ops.push(i);break}o[2]&&a.ops.pop(),a.trys.pop();continue}i=r.call(e,a)}catch(s){i=[6,s],n=0}finally{t=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,s])}}},O=function(e){return e&&e.__esModule?e:{default:e}},w=function(){function e(e,r,t,n,o,i,a){this.store=e,this.router=r,this.modal=t,this.utilService=n,this.orderService=o,this.userService=i,this.translate=a,this.moment=u,this.getTicketPrice=m.k,this.changeTicketCountByOrder=m.c,this.orderStatus=s.factory.orderStatus,this.environment=p.a}return e.prototype.ngOnInit=function(){var e=this;if(this.eventOrders=[],this.error=this.store.pipe(Object(c.i)(h.a)),this.order=this.store.pipe(Object(c.i)(h.d)),this.user=this.store.pipe(Object(c.i)(h.g)),this.order.subscribe(function(r){if(void 0!==r.order){var t=r.order;e.eventOrders=Object(m.r)({order:t})}else e.router.navigate(["/error"])}).unsubscribe(),""!==p.a.INQUIRY_PRINT_WAIT_TIME){var r=Number(p.a.INQUIRY_PRINT_WAIT_TIME);this.timer=setTimeout(function(){e.router.navigate(["/inquiry/input"])},r)}},e.prototype.ngOnDestroy=function(){void 0!==this.timer&&clearTimeout(this.timer)},e.prototype.showQrCode=function(){return g(this,void 0,void 0,function(){var e,r,t;return I(this,function(n){switch(n.label){case 0:return n.trys.push([0,4,,5]),[4,this.orderService.getData()];case 1:if(void 0===(e=n.sent()).order)throw new Error("order undefined");return[4,this.orderService.authorize(e.order)];case 2:return n.sent(),[4,this.orderService.getData()];case 3:if(e=n.sent(),void 0===(r=e.order))throw new Error("authorizeOrder undefined");return this.modal.show(v.a,{initialState:{order:r},class:"modal-dialog-centered"}),[3,5];case 4:return t=n.sent(),console.error(t),this.utilService.openAlert({title:this.translate.instant("common.error"),body:this.translate.instant("inquiry.confirm.alert.authorize")}),[3,5];case 5:return[2]}})})},e.prototype.cancelConfirm=function(){var e=this;this.utilService.openConfirm({title:this.translate.instant("common.confirm"),body:this.translate.instant("inquiry.confirm.confirm.cancel"),cb:function(){return g(e,void 0,void 0,function(){var e,r,t,n,o;return I(this,function(i){switch(i.label){case 0:return i.trys.push([0,6,,7]),[4,this.userService.getData()];case 1:return e=i.sent(),[4,this.orderService.getData()];case 2:if(void 0===(r=i.sent()).order)throw new Error("order undefined");return t=[r.order],n=e.language,[4,this.orderService.cancel({orders:t,language:n})];case 3:return i.sent(),[4,this.orderService.getData()];case 4:if(void 0===(r=i.sent()).order)throw new Error("order undefined");return[4,this.orderService.inquiry({confirmationNumber:r.order.confirmationNumber,customer:{telephone:r.order.customer.telephone}})];case 5:return i.sent(),[3,7];case 6:return o=i.sent(),this.utilService.openAlert({title:this.translate.instant("common.error"),body:'\n                        <p class="mb-4">'+this.translate.instant("inquiry.confirm.alert.cancel")+'</p>\n                        <div class="p-3 bg-light-gray select-text error">\n                            <code>'+o+"</code>\n                        </div>"}),[3,7];case 7:return[2]}})})}})},e.prototype.print=function(){return g(this,void 0,void 0,function(){var e,r,t,n,o,i,a,s;return I(this,function(c){switch(c.label){case 0:if(e=u().format("YYYYMMDD"),r=u(e).add(p.a.INQUIRY_PRINT_EXPIRED_VALUE,p.a.INQUIRY_PRINT_EXPIRED_UNIT).format("YYYYMMDD"),void 0!==this.eventOrders.find(function(e){return u(e.event.startDate).format("YYYYMMDD")<r}))return this.utilService.openAlert({title:this.translate.instant("common.error"),body:this.translate.instant("inquiry.confirm.alert.printExpired")}),[2];void 0!==this.timer&&clearTimeout(this.timer),c.label=1;case 1:return c.trys.push([1,5,,6]),[4,this.orderService.getData()];case 2:return t=c.sent(),[4,this.userService.getData()];case 3:return n=c.sent(),void 0===t.order||void 0===n.pos||void 0===n.printer?(this.router.navigate(["/error"]),[2]):(o=[t.order],i=n.pos,a=n.printer,[4,this.orderService.print({orders:o,pos:i,printer:a})]);case 4:return c.sent(),this.router.navigate(["/inquiry/print"]),[3,6];case 5:return s=c.sent(),console.error(s),this.router.navigate(["/error"]),[3,6];case 6:return[2]}})})},e.ctorParameters=function(){return[{type:c.b},{type:a.c},{type:d.e},{type:f.i},{type:f.d},{type:f.h},{type:l.c}]},e=b([Object(o.n)({selector:"app-inquiry-confirm",template:O(t("+X77")).default,styles:[O(t("2+OO")).default]}),y("design:paramtypes",[c.b,a.c,d.e,f.i,f.d,f.h,l.c])],e)}(),q=t("IfiR"),x=t("WxsR"),N=function(e,r,t,n){var o,i=arguments.length,a=i<3?r:null===n?n=Object.getOwnPropertyDescriptor(r,t):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,r,t,n);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(r,t,a):o(r,t))||a);return i>3&&a&&Object.defineProperty(r,t,a),a},T=function(e,r){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,r)},S=function(e,r,t,n){return new(t||(t=Promise))(function(o,i){function a(e){try{c(n.next(e))}catch(r){i(r)}}function s(e){try{c(n.throw(e))}catch(r){i(r)}}function c(e){e.done?o(e.value):new t(function(r){r(e.value)}).then(a,s)}c((n=n.apply(e,r||[])).next())})},R=function(e,r){var t,n,o,i,a={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function s(i){return function(s){return function(i){if(t)throw new TypeError("Generator is already executing.");for(;a;)try{if(t=1,n&&(o=2&i[0]?n.return:i[0]?n.throw||((o=n.return)&&o.call(n),0):n.next)&&!(o=o.call(n,i[1])).done)return o;switch(n=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return a.label++,{value:i[1],done:!1};case 5:a.label++,n=i[1],i=[0];continue;case 7:i=a.ops.pop(),a.trys.pop();continue;default:if(!(o=(o=a.trys).length>0&&o[o.length-1])&&(6===i[0]||2===i[0])){a=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){a.label=i[1];break}if(6===i[0]&&a.label<o[1]){a.label=o[1],o=i;break}if(o&&a.label<o[2]){a.label=o[2],a.ops.push(i);break}o[2]&&a.ops.pop(),a.trys.pop();continue}i=r.call(e,a)}catch(s){i=[6,s],n=0}finally{t=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,s])}}},k=function(e){return e&&e.__esModule?e:{default:e}},P=function(){function e(e,r,t,n,o,i){this.store=e,this.formBuilder=r,this.utilService=t,this.orderService=n,this.router=o,this.translate=i,this.environment=p.a}return e.prototype.ngOnInit=function(){this.isLoading=this.store.pipe(Object(c.i)(h.b)),this.createInquiryForm()},e.prototype.createInquiryForm=function(){this.inquiryForm=this.formBuilder.group({confirmationNumber:["",[q.f.required,q.f.pattern(/^[0-9]+$/)]],telephone:["",[q.f.required,q.f.maxLength(15),q.f.minLength(9),function(e){var r=e.root.get("telephone");if(null!==r){if(""===r.value)return null;var t=new RegExp(/^\+/).test(r.value)?x.c(r.value):x.c(r.value,"JP");if(void 0===t.phone)return{telephone:!0};if(!x.b(t))return{telephone:!0}}return null}]]})},e.prototype.onSubmit=function(){return S(this,void 0,void 0,function(){var e,r,t,n=this;return R(this,function(o){switch(o.label){case 0:if(Object.keys(this.inquiryForm.controls).forEach(function(e){n.inquiryForm.controls[e].markAsTouched()}),this.inquiryForm.controls.confirmationNumber.setValue(document.getElementById("confirmationNumber").value),this.inquiryForm.controls.telephone.setValue(document.getElementById("telephone").value),this.inquiryForm.invalid)return[2];e=this.inquiryForm.controls.confirmationNumber.value,r=this.inquiryForm.controls.telephone.value,o.label=1;case 1:return o.trys.push([1,3,,4]),[4,this.orderService.inquiry({confirmationNumber:e,customer:{telephone:r}})];case 2:return o.sent(),this.router.navigate(["/inquiry/confirm"]),[3,4];case 3:return t=o.sent(),console.error(t),this.utilService.openAlert({title:this.translate.instant("common.error"),body:this.translate.instant("inquiry.input.validation")}),[3,4];case 4:return[2]}})})},e.prototype.changeConfirmationNumber=function(e){this.inquiryForm.controls.confirmationNumber.setValue(e)},e.prototype.changeTelephone=function(e){this.inquiryForm.controls.telephone.setValue(e)},e.ctorParameters=function(){return[{type:c.b},{type:q.a},{type:f.i},{type:f.d},{type:a.c},{type:l.c}]},e=N([Object(o.n)({selector:"app-inquiry-input",template:k(t("uWiq")).default,styles:[k(t("vcNb")).default]}),T("design:paramtypes",[c.b,q.a,f.i,f.d,a.c,l.c])],e)}(),_=function(e,r,t,n){var o,i=arguments.length,a=i<3?r:null===n?n=Object.getOwnPropertyDescriptor(r,t):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,r,t,n);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(r,t,a):o(r,t))||a);return i>3&&a&&Object.defineProperty(r,t,a),a},E=function(e,r){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,r)},D=function(e){return e&&e.__esModule?e:{default:e}},L=function(){function e(e){this.router=e}return e.prototype.ngOnInit=function(){var e=this;if(""!==p.a.INQUIRY_PRINT_SUCCESS_WAIT_TIME){var r=Number(p.a.INQUIRY_PRINT_SUCCESS_WAIT_TIME);this.timer=setTimeout(function(){e.router.navigate(["/inquiry/input"])},r)}},e.prototype.ngOnDestroy=function(){void 0!==this.timer&&clearTimeout(this.timer)},e.ctorParameters=function(){return[{type:a.c}]},e=_([Object(o.n)({selector:"app-inquiry-print",template:D(t("w++k")).default,styles:[D(t("LlIr")).default]}),E("design:paramtypes",[a.c])],e)}(),Y=t("RRjC"),F=function(e,r,t,n){var o,i=arguments.length,a=i<3?r:null===n?n=Object.getOwnPropertyDescriptor(r,t):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,r,t,n);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(r,t,a):o(r,t))||a);return i>3&&a&&Object.defineProperty(r,t,a),a},j=[{path:"",component:Y.a,children:[{path:"input",component:P},{path:"confirm",component:w},{path:"print",component:L}]}],U=function(){function e(){}return e=F([Object(o.I)({imports:[a.d.forChild(j)],exports:[a.d]})],e)}();t.d(r,"InquiryModule",function(){return C});var A=function(e,r,t,n){var o,i=arguments.length,a=i<3?r:null===n?n=Object.getOwnPropertyDescriptor(r,t):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,r,t,n);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(r,t,a):o(r,t))||a);return i>3&&a&&Object.defineProperty(r,t,a),a},C=function(){function e(){}return e=A([Object(o.I)({declarations:[P,w,L],imports:[n.b,U,i.a]})],e)}()},LlIr:function(e,r,t){"use strict";t.r(r),r.default=""},uWiq:function(e,r,t){"use strict";t.r(r),r.default='<div class="contents-width mx-auto px-3 py-5">\r\n    <form [formGroup]="inquiryForm">\r\n        <div class="mb-4">\r\n            <h2 class="text-large mb-4 text-center font-weight-bold">{{ \'inquiry.input.title\' | translate }}</h2>\r\n            <p class="mb-4 text-md-center" [innerHTML]="\'inquiry.input.read\' | translate"></p>\r\n\r\n            <div class="inquiry-form mx-auto p-3 bg-white">\r\n\r\n                <div class="form-group">\r\n                    <label class="mb-2" for="">{{ \'common.confirmationNumber\' | translate }}</label>\r\n                    <app-numeric-keypad *ngIf="environment.INQUIRY_INPUT_KEYPAD" inputType="number"\r\n                        [inputValue]="inquiryForm.controls.confirmationNumber.value"\r\n                        (change)="changeConfirmationNumber($event)">\r\n                        <input type="text" class="form-control" formControlName="confirmationNumber"\r\n                            id="confirmationNumber" [placeholder]="\'form.placeholder.confirmationNumber\' | translate"\r\n                            readonly>\r\n                    </app-numeric-keypad>\r\n                    <input *ngIf="!environment.INQUIRY_INPUT_KEYPAD" type="text" class="form-control"\r\n                        formControlName="confirmationNumber" id="confirmationNumber"\r\n                        [placeholder]="\'form.placeholder.confirmationNumber\' | translate">\r\n                    <div *ngIf="inquiryForm.controls.confirmationNumber.invalid && inquiryForm.controls.confirmationNumber.touched"\r\n                        class="mt-2">\r\n                        <p *ngIf="inquiryForm.controls.confirmationNumber.errors.required" class="text-danger">\r\n                            {{ \'form.validation.required\' | translate }}</p>\r\n                        <p *ngIf="inquiryForm.controls.confirmationNumber.errors.pattern" class="text-danger">\r\n                            {{ \'form.validation.number\' | translate }}</p>\r\n                    </div>\r\n                </div>\r\n                <div class="form-group mb-0">\r\n                    <label class="mb-2" for="">{{ \'common.telephone\' | translate }}</label>\r\n                    <app-numeric-keypad *ngIf="environment.INQUIRY_INPUT_KEYPAD" inputType="telephone"\r\n                        [inputValue]="inquiryForm.controls.telephone.value" (change)="changeTelephone($event)">\r\n                        <input type="password" class="form-control" formControlName="telephone" id="telephone"\r\n                            [placeholder]="\'form.placeholder.telephone\' | translate" readonly>\r\n                    </app-numeric-keypad>\r\n                    <input *ngIf="!environment.INQUIRY_INPUT_KEYPAD" type="password" class="form-control"\r\n                        formControlName="telephone" id="telephone"\r\n                        [placeholder]="\'form.placeholder.telephone\' | translate">\r\n                    <div *ngIf="inquiryForm.controls.telephone.invalid && inquiryForm.controls.telephone.touched"\r\n                        class="mt-2">\r\n                        <p *ngIf="inquiryForm.controls.telephone.errors.required" class="text-danger">\r\n                            {{ \'form.validation.required\' | translate }}</p>\r\n                        <p *ngIf="inquiryForm.controls.telephone.errors.minlength" class="text-danger">\r\n                            {{ \'form.validation.minlength\' | translate: { value: inquiryForm.controls.telephone.errors.minlength.requiredLength } }}\r\n                        </p>\r\n                        <p *ngIf="inquiryForm.controls.telephone.errors.maxlength" class="text-danger">\r\n                            {{ \'form.validation.maxlength\' | translate: { value: inquiryForm.controls.telephone.errors.maxlength.requiredLength } }}\r\n                        </p>\r\n                        <p *ngIf="inquiryForm.controls.telephone.errors.pattern" class="text-danger">\r\n                            {{ \'form.validation.number\' | translate }}</p>\r\n                        <p *ngIf="inquiryForm.controls.telephone.errors.telephone" class="text-danger">\r\n                            {{ \'form.validation.telephone\' | translate }}</p>\r\n                    </div>\r\n                </div>\r\n\r\n            </div>\r\n        </div>\r\n\r\n        <div class="buttons mx-auto text-center">\r\n            <button type="submit" [disabled]="isLoading | async" class="btn btn-primary btn-block py-3 mb-3"\r\n                (click)="onSubmit()">{{ \'inquiry.input.next\' | translate }}</button>\r\n            <a *ngIf="environment.PORTAL_SITE_URL" class="btn btn-link portal-link"\r\n                [href]="environment.PORTAL_SITE_URL">{{ \'inquiry.input.prev\' | translate }}</a>\r\n            <button *ngIf="!environment.PORTAL_SITE_URL" type="button" class="btn btn-link"\r\n                routerLink="/">{{ \'inquiry.input.prev\' | translate }}</button>\r\n        </div>\r\n    </form>\r\n</div>'},vcNb:function(e,r,t){"use strict";t.r(r),r.default=".inquiry-form {\n  max-width: 500px;\n}"},"w++k":function(e,r,t){"use strict";t.r(r),r.default='<div class="contents-width mx-auto px-3 py-5">\r\n    <div class="mb-4">\r\n        <h2 class="text-large mb-4 text-center font-weight-bold">{{ \'inquiry.print.title\' | translate }}</h2>\r\n        <p class="mb-4 text-md-center" [innerHTML]="\'inquiry.print.read\' | translate"></p>\r\n    </div>\r\n\r\n    <div class="buttons mx-auto text-center">\r\n        <button type="button" class="btn btn-primary btn-block py-3" routerLink="/inquiry/input">\r\n            {{ \'inquiry.print.prev\' | translate }}\r\n        </button>\r\n    </div>\r\n</div>'}}]);