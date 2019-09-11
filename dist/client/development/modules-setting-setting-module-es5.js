(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["modules-setting-setting-module"],{/***/"../../node_modules/raw-loader/dist/cjs.js!./app/modules/setting/pages/setting/setting.component.html":/*!*************************************************************************************************************************************************************!*\
  !*** C:/Users/hataguchi/Desktop/workspace/Cinerino/frontend/node_modules/raw-loader/dist/cjs.js!./app/modules/setting/pages/setting/setting.component.html ***!
  \*************************************************************************************************************************************************************/ /*! exports provided: default */ /***/function node_modulesRawLoaderDistCjsJsAppModulesSettingPagesSettingSettingComponentHtml(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);/* harmony default export */__webpack_exports__["default"]="<div class=\"contents-width mx-auto px-3 py-5\">\n    <h2 class=\"text-large mb-4 text-center font-weight-bold\">{{ 'setting.title' | translate }}</h2>\n    <p class=\"mb-4 text-md-center\" [innerHTML]=\"'setting.read' | translate\"></p>\n\n    <div class=\"mb-4 p-3 bg-white\">\n        <form *ngIf=\"baseForm\" [formGroup]=\"baseForm\">\n            <div class=\"form-group\">\n                <div class=\"row align-items-center\">\n                    <p class=\"col-md-4 py-2 text-md-right\">{{ 'common.theater' | translate }}</p>\n                    <div class=\"col-md-8\">\n                        <select class=\"form-control\" formControlName=\"sellerBranchCode\" (change)=\"changePosList()\">\n                            <option value=\"\">{{ 'setting.unselected' | translate }}</option>\n                            <option *ngFor=\"let seller of (master | async).sellers\"\n                                [value]=\"seller.location.branchCode\">{{ seller.name.ja }}</option>\n                        </select>\n                        <!-- <div *ngIf=\"baseForm.controls.sellerBranchCode.invalid && baseForm.controls.sellerBranchCode.touched\"\n                            class=\"mt-2\">\n                            <p *ngIf=\"baseForm.controls.sellerBranchCode.errors.required\" class=\"text-danger\">\n                                {{ 'form.validation.unselected' | translate }}</p>\n                        </div> -->\n                    </div>\n                </div>\n            </div>\n            <div class=\"form-group\">\n                <div class=\"row align-items-center\">\n                    <p class=\"col-md-4 py-2 text-md-right\">{{ 'setting.pos' | translate }}</p>\n                    <div class=\"col-md-8\">\n                        <select class=\"form-control\" formControlName=\"posId\">\n                            <option value=\"\">{{ 'setting.unselected' | translate }}</option>\n                            <option *ngFor=\"let pos of posList\" [value]=\"pos.id\">{{ pos.name }}</option>\n                        </select>\n                        <!-- <div *ngIf=\"baseForm.controls.posId.invalid && baseForm.controls.posId.touched\"\n                            class=\"mt-2\">\n                            <p *ngIf=\"baseForm.controls.posId.errors.required\" class=\"text-danger\">\n                                {{ 'form.validation.unselected' | translate }}</p>\n                        </div> -->\n                    </div>\n                </div>\n            </div>\n            <div class=\"form-group\">\n                <div class=\"row align-items-center\">\n                    <p class=\"col-md-4 py-2 text-md-right\">{{ 'setting.printer' | translate }}</p>\n                    <div class=\"col-md-8\">\n                        <select class=\"form-control\" formControlName=\"printerType\">\n                            <option value=\"\">{{ 'setting.unselected' | translate }}</option>\n                            <option *ngFor=\"let printer of printers\" [value]=\"printer.connectionType\">\n                                {{ printer.name | translate }}</option>\n                        </select>\n                        <button\n                            *ngIf=\"this.baseForm.controls.printerType.value && this.baseForm.controls.printerType.value !== connectionType.None\"\n                            type=\"button\" class=\"btn btn-sm btn-primary py-2 mt-2\"\n                            (click)=\"print()\">{{ 'setting.testPrinting' | translate }}</button>\n                    </div>\n                </div>\n            </div>\n            <div class=\"form-group\">\n                <div class=\"row align-items-center\">\n                    <p class=\"col-md-4 py-2 text-md-right\">{{ 'setting.printerIpAddress' | translate }}</p>\n                    <div class=\"col-md-8\">\n                        <input type=\"text\" class=\"form-control\" formControlName=\"printerIpAddress\"\n                            placeholder=\"0.0.0.0\">\n                        <div *ngIf=\"baseForm.controls.printerIpAddress.invalid && baseForm.controls.printerIpAddress.touched\"\n                            class=\"mt-2\">\n                            <p *ngIf=\"baseForm.controls.printerIpAddress.errors.required\" class=\"text-danger\">\n                                {{ 'form.validation.required' | translate }}</p>\n                        </div>\n                        <p class=\"text-small mt-2\">\n                            {{ 'setting.printerIpAddressDescription' | translate }}\n                        </p>\n                    </div>\n                </div>\n            </div>\n            <div *ngIf=\"environment.SETTING_DEVELOP_OPTION\">\n                <div class=\"form-group\">\n                    <div class=\"row align-items-center\">\n                        <p class=\"col-md-4 py-2 text-md-right\"> {{ 'setting.isPurchaseCart' | translate }}\n                        </p>\n                        <div class=\"col-md-8\">\n                            <select type=\"text\" class=\"form-control\" formControlName=\"isPurchaseCart\"\n                                id=\"isPurchaseCart\" placeholder=\"\">\n                                <option value=\"0\">{{ 'common.off' | translate }}</option>\n                                <option value=\"1\">{{ 'common.on' | translate }}</option>\n                            </select>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"form-group mb-0\">\n                    <div class=\"row align-items-center\">\n                        <p class=\"col-md-4 py-2 text-md-right\"> {{ 'setting.viewType' | translate }}</p>\n                        <div class=\"col-md-8\">\n                            <select class=\"form-control\" id=\"viewType\" formControlName=\"viewType\">\n                                <option [value]=\"viewType.Cinema\">{{ viewType.Cinema }}</option>\n                                <option [value]=\"viewType.Event\">{{ viewType.Event }}</option>\n                            </select>\n                            <div *ngIf=\"baseForm.controls.viewType.invalid && baseForm.controls.viewType.touched\"\n                                class=\"mt-2\">\n                                <p *ngIf=\"baseForm.controls.viewType.errors.required\" class=\"text-danger\">\n                                    {{ 'form.validation.required' | translate }}\n                                </p>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n\n        </form>\n    </div>\n    <div class=\"buttons mx-auto text-center\">\n        <button type=\"button\" class=\"btn btn-primary btn-block py-3 mb-3\" [disabled]=\"isLoading | async\"\n            (click)=\"updateBase()\">{{ 'setting.next' | translate }}</button>\n        <button type=\"button\" class=\"btn btn-link\"\n            [routerLink]=\"environment.BASE_URL\">{{ 'setting.prev' | translate }}</button>\n    </div>\n\n</div>";/***/},/***/"./app/modules/setting/pages/setting/setting.component.scss":/*!******************************************************************!*\
  !*** ./app/modules/setting/pages/setting/setting.component.scss ***!
  \******************************************************************/ /*! exports provided: default */ /***/function appModulesSettingPagesSettingSettingComponentScss(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);/* harmony default export */__webpack_exports__["default"]="\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvY2xpZW50L2FwcC9tb2R1bGVzL3NldHRpbmcvcGFnZXMvc2V0dGluZy9zZXR0aW5nLmNvbXBvbmVudC5zY3NzIn0= */";/***/},/***/"./app/modules/setting/pages/setting/setting.component.ts":/*!****************************************************************!*\
  !*** ./app/modules/setting/pages/setting/setting.component.ts ***!
  \****************************************************************/ /*! exports provided: SettingComponent */ /***/function appModulesSettingPagesSettingSettingComponentTs(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"SettingComponent",function(){return SettingComponent});/* harmony import */var _angular_core__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(/*! @angular/core */"../../node_modules/@angular/core/fesm2015/core.js");/* harmony import */var _angular_forms__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(/*! @angular/forms */"../../node_modules/@angular/forms/fesm2015/forms.js");/* harmony import */var _angular_router__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(/*! @angular/router */"../../node_modules/@angular/router/fesm2015/router.js");/* harmony import */var _ngrx_store__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(/*! @ngrx/store */"../../node_modules/@ngrx/store/fesm2015/store.js");/* harmony import */var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(/*! @ngx-translate/core */"../../node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");/* harmony import */var _environments_environment__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(/*! ../../../../../environments/environment */"./environments/environment.ts");/* harmony import */var _models__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(/*! ../../../../models */"./app/models/index.ts");/* harmony import */var _services__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__(/*! ../../../../services */"./app/services/index.ts");/* harmony import */var _store_reducers__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__(/*! ../../../../store/reducers */"./app/store/reducers/index.ts");var __decorate=undefined&&undefined.__decorate||function(decorators,target,key,desc){var c=arguments.length,r=c<3?target:desc===null?desc=Object.getOwnPropertyDescriptor(target,key):desc,d;if(typeof Reflect==="object"&&typeof Reflect.decorate==="function")r=Reflect.decorate(decorators,target,key,desc);else for(var i=decorators.length-1;i>=0;i--){if(d=decorators[i])r=(c<3?d(r):c>3?d(target,key,r):d(target,key))||r}return c>3&&r&&Object.defineProperty(target,key,r),r};var __metadata=undefined&&undefined.__metadata||function(k,v){if(typeof Reflect==="object"&&typeof Reflect.metadata==="function")return Reflect.metadata(k,v)};var __awaiter=undefined&&undefined.__awaiter||function(thisArg,_arguments,P,generator){return new(P||(P=Promise))(function(resolve,reject){function fulfilled(value){try{step(generator.next(value))}catch(e){reject(e)}}function rejected(value){try{step(generator["throw"](value))}catch(e){reject(e)}}function step(result){result.done?resolve(result.value):new P(function(resolve){resolve(result.value)}).then(fulfilled,rejected)}step((generator=generator.apply(thisArg,_arguments||[])).next())})};var __importDefault=undefined&&undefined.__importDefault||function(mod){return mod&&mod.__esModule?mod:{"default":mod}};var SettingComponent=/*#__PURE__*/function(){function SettingComponent(store,utilService,masterService,userService,formBuilder,translate,orderService,router){this.store=store;this.utilService=utilService;this.masterService=masterService;this.userService=userService;this.formBuilder=formBuilder;this.translate=translate;this.orderService=orderService;this.router=router;this.viewType=_models__WEBPACK_IMPORTED_MODULE_6__["ViewType"];this.printers=_models__WEBPACK_IMPORTED_MODULE_6__["printers"];this.connectionType=_models__WEBPACK_IMPORTED_MODULE_6__["connectionType"];this.environment=_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"]}var _proto=SettingComponent.prototype;_proto.ngOnInit=function ngOnInit(){return __awaiter(this,void 0,void 0,/*#__PURE__*/regeneratorRuntime.mark(function _callee(){return regeneratorRuntime.wrap(function _callee$(_context){while(1){switch(_context.prev=_context.next){case 0:this.isLoading=this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_3__["select"])(_store_reducers__WEBPACK_IMPORTED_MODULE_8__["getLoading"]));this.user=this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_3__["select"])(_store_reducers__WEBPACK_IMPORTED_MODULE_8__["getUser"]));this.master=this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_3__["select"])(_store_reducers__WEBPACK_IMPORTED_MODULE_8__["getMaster"]));this.error=this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_3__["select"])(_store_reducers__WEBPACK_IMPORTED_MODULE_8__["getError"]));_context.prev=4;_context.next=7;return this.masterService.getSellers();case 7:_context.next=9;return this.createBaseForm();case 9:_context.next=15;break;case 11:_context.prev=11;_context.t0=_context["catch"](4);console.error(_context.t0);this.router.navigate(["/error"]);case 15:case"end":return _context.stop();}}},_callee,this,[[4,11]])}))};_proto.createBaseForm=function createBaseForm(){return __awaiter(this,void 0,void 0,/*#__PURE__*/regeneratorRuntime.mark(function _callee2(){var user;return regeneratorRuntime.wrap(function _callee2$(_context2){while(1){switch(_context2.prev=_context2.next){case 0:this.baseForm=this.formBuilder.group({sellerBranchCode:["",[_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],posId:["",[_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],printerType:["",[_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],printerIpAddress:[""],isPurchaseCart:["0",[_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern(/^[0-9]+$/)]],viewType:["",[_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]]});_context2.next=3;return this.userService.getData();case 3:user=_context2.sent;if(user.seller!==undefined&&user.seller.location!==undefined){this.baseForm.controls.sellerBranchCode.setValue(user.seller.location.branchCode)}if(user.pos!==undefined){this.changePosList();this.baseForm.controls.posId.setValue(user.pos.id)}if(user.printer!==undefined){this.baseForm.controls.printerType.setValue(user.printer.connectionType);this.baseForm.controls.printerIpAddress.setValue(user.printer.ipAddress)}this.baseForm.controls.isPurchaseCart.setValue(user.isPurchaseCart?"1":"0");this.baseForm.controls.viewType.setValue(user.viewType);case 9:case"end":return _context2.stop();}}},_callee2,this)}))}/**
     * 端末情報変更
     */;_proto.changePosList=function changePosList(){var _this=this;this.baseForm.controls.posId.setValue("");var sellerBranchCode=this.baseForm.controls.sellerBranchCode.value;if(sellerBranchCode===""){this.posList=[];return}this.master.subscribe(function(master){var findTheater=master.sellers.find(function(theater){return theater.location!==undefined&&theater.location.branchCode===sellerBranchCode});if(findTheater===undefined){_this.posList=[];return}_this.posList=findTheater.hasPOS===undefined?[]:findTheater.hasPOS}).unsubscribe()}/**
     * 更新
     */;_proto.updateBase=function updateBase(){return __awaiter(this,void 0,void 0,/*#__PURE__*/regeneratorRuntime.mark(function _callee3(){var _this2=this;var master,findSeller,findPos,isPurchaseCart,viewType;return regeneratorRuntime.wrap(function _callee3$(_context3){while(1){switch(_context3.prev=_context3.next){case 0:Object.keys(this.baseForm.controls).forEach(function(key){_this2.baseForm.controls[key].markAsTouched()});if(!this.baseForm.invalid){_context3.next=4;break}this.utilService.openAlert({title:this.translate.instant("common.error"),body:this.translate.instant("setting.alert.validation")});return _context3.abrupt("return");case 4:_context3.next=6;return this.masterService.getData();case 6:master=_context3.sent;findSeller=master.sellers.find(function(s){return s.location!==undefined&&s.location.branchCode===_this2.baseForm.controls.sellerBranchCode.value});if(!(findSeller!==undefined&&findSeller.hasPOS!==undefined)){_context3.next=12;break}findPos=findSeller.hasPOS.find(function(pos){return pos.id===_this2.baseForm.controls.posId.value});if(!(findPos===undefined)){_context3.next=12;break}return _context3.abrupt("return");case 12:isPurchaseCart=this.baseForm.controls.isPurchaseCart.value==="1"?true:false;viewType=this.baseForm.controls.viewType.value;this.userService.updateBaseSetting({seller:findSeller,pos:findPos,printer:{ipAddress:this.baseForm.controls.printerIpAddress.value,connectionType:this.baseForm.controls.printerType.value},isPurchaseCart:isPurchaseCart,viewType:viewType});this.utilService.openAlert({title:this.translate.instant("common.complete"),body:this.translate.instant("setting.alert.success")});case 16:case"end":return _context3.stop();}}},_callee3,this)}))};_proto.print=function print(){return __awaiter(this,void 0,void 0,/*#__PURE__*/regeneratorRuntime.mark(function _callee4(){var printer;return regeneratorRuntime.wrap(function _callee4$(_context4){while(1){switch(_context4.prev=_context4.next){case 0:_context4.prev=0;printer={connectionType:this.baseForm.controls.printerType.value,ipAddress:this.baseForm.controls.printerIpAddress.value};_context4.next=4;return this.orderService.print({orders:[],printer:printer});case 4:_context4.next=10;break;case 6:_context4.prev=6;_context4.t0=_context4["catch"](0);console.error(_context4.t0);this.utilService.openAlert({title:this.translate.instant("common.error"),body:"\n                <p class=\"mb-4\">"+this.translate.instant("setting.alert.print")+"</p>\n                <div class=\"p-3 bg-light-gray select-text error\">\n                    <code>"+_context4.t0+"</code>\n                </div>"});case 10:case"end":return _context4.stop();}}},_callee4,this,[[0,6]])}))}/**
     * プリンター変更
     */;_proto.changePrinterType=function changePrinterType(){if(this.baseForm.controls.printerType.value===_models__WEBPACK_IMPORTED_MODULE_6__["connectionType"].StarBluetooth){this.baseForm.controls.printerIpAddress.setValue(this.translate.instant("setting.starBluetoothAddress"))}};return SettingComponent}();SettingComponent.ctorParameters=function(){return[{type:_ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"]},{type:_services__WEBPACK_IMPORTED_MODULE_7__["UtilService"]},{type:_services__WEBPACK_IMPORTED_MODULE_7__["MasterService"]},{type:_services__WEBPACK_IMPORTED_MODULE_7__["UserService"]},{type:_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]},{type:_ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateService"]},{type:_services__WEBPACK_IMPORTED_MODULE_7__["OrderService"]},{type:_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]}]};SettingComponent=__decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({selector:"app-setting",template:__importDefault(__webpack_require__(/*! raw-loader!./setting.component.html */"../../node_modules/raw-loader/dist/cjs.js!./app/modules/setting/pages/setting/setting.component.html"))["default"],styles:[__importDefault(__webpack_require__(/*! ./setting.component.scss */"./app/modules/setting/pages/setting/setting.component.scss"))["default"]]}),__metadata("design:paramtypes",[_ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"],_services__WEBPACK_IMPORTED_MODULE_7__["UtilService"],_services__WEBPACK_IMPORTED_MODULE_7__["MasterService"],_services__WEBPACK_IMPORTED_MODULE_7__["UserService"],_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],_ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateService"],_services__WEBPACK_IMPORTED_MODULE_7__["OrderService"],_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])],SettingComponent);/***/},/***/"./app/modules/setting/setting-routing.module.ts":/*!*******************************************************!*\
  !*** ./app/modules/setting/setting-routing.module.ts ***!
  \*******************************************************/ /*! exports provided: SettingRoutingModule */ /***/function appModulesSettingSettingRoutingModuleTs(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"SettingRoutingModule",function(){return SettingRoutingModule});/* harmony import */var _angular_core__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(/*! @angular/core */"../../node_modules/@angular/core/fesm2015/core.js");/* harmony import */var _angular_router__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(/*! @angular/router */"../../node_modules/@angular/router/fesm2015/router.js");/* harmony import */var _shared_components_pages_base_base_component__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(/*! ../shared/components/pages/base/base.component */"./app/modules/shared/components/pages/base/base.component.ts");/* harmony import */var _pages_setting_setting_component__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(/*! ./pages/setting/setting.component */"./app/modules/setting/pages/setting/setting.component.ts");var __decorate=undefined&&undefined.__decorate||function(decorators,target,key,desc){var c=arguments.length,r=c<3?target:desc===null?desc=Object.getOwnPropertyDescriptor(target,key):desc,d;if(typeof Reflect==="object"&&typeof Reflect.decorate==="function")r=Reflect.decorate(decorators,target,key,desc);else for(var i=decorators.length-1;i>=0;i--){if(d=decorators[i])r=(c<3?d(r):c>3?d(target,key,r):d(target,key))||r}return c>3&&r&&Object.defineProperty(target,key,r),r};var __importDefault=undefined&&undefined.__importDefault||function(mod){return mod&&mod.__esModule?mod:{"default":mod}};var routes=[{path:"",component:_shared_components_pages_base_base_component__WEBPACK_IMPORTED_MODULE_2__["BaseComponent"],children:[{path:"",component:_pages_setting_setting_component__WEBPACK_IMPORTED_MODULE_3__["SettingComponent"]}]}];var SettingRoutingModule=function SettingRoutingModule(){};SettingRoutingModule=__decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({imports:[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],exports:[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]})],SettingRoutingModule);/***/},/***/"./app/modules/setting/setting.module.ts":/*!***********************************************!*\
  !*** ./app/modules/setting/setting.module.ts ***!
  \***********************************************/ /*! exports provided: SettingModule */ /***/function appModulesSettingSettingModuleTs(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"SettingModule",function(){return SettingModule});/* harmony import */var _angular_common__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(/*! @angular/common */"../../node_modules/@angular/common/fesm2015/common.js");/* harmony import */var _angular_core__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(/*! @angular/core */"../../node_modules/@angular/core/fesm2015/core.js");/* harmony import */var _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(/*! ../shared/shared.module */"./app/modules/shared/shared.module.ts");/* harmony import */var _pages_setting_setting_component__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(/*! ./pages/setting/setting.component */"./app/modules/setting/pages/setting/setting.component.ts");/* harmony import */var _setting_routing_module__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(/*! ./setting-routing.module */"./app/modules/setting/setting-routing.module.ts");var __decorate=undefined&&undefined.__decorate||function(decorators,target,key,desc){var c=arguments.length,r=c<3?target:desc===null?desc=Object.getOwnPropertyDescriptor(target,key):desc,d;if(typeof Reflect==="object"&&typeof Reflect.decorate==="function")r=Reflect.decorate(decorators,target,key,desc);else for(var i=decorators.length-1;i>=0;i--){if(d=decorators[i])r=(c<3?d(r):c>3?d(target,key,r):d(target,key))||r}return c>3&&r&&Object.defineProperty(target,key,r),r};var __importDefault=undefined&&undefined.__importDefault||function(mod){return mod&&mod.__esModule?mod:{"default":mod}};var SettingModule=function SettingModule(){};SettingModule=__decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({declarations:[_pages_setting_setting_component__WEBPACK_IMPORTED_MODULE_3__["SettingComponent"]],imports:[_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],_setting_routing_module__WEBPACK_IMPORTED_MODULE_4__["SettingRoutingModule"],_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"]]})],SettingModule);/***/}}]);//# sourceMappingURL=modules-setting-setting-module-es2015.js.map
//# sourceMappingURL=modules-setting-setting-module-es5.js.map