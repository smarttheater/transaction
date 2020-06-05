function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-auth-auth-module"], {
  /***/
  "./app/modules/auth/auth-routing.module.ts":
  /*!*************************************************!*\
    !*** ./app/modules/auth/auth-routing.module.ts ***!
    \*************************************************/

  /*! exports provided: AuthRoutingModule */

  /***/
  function appModulesAuthAuthRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthRoutingModule", function () {
      return AuthRoutingModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "../../node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _components_pages_auth_index_auth_index_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./components/pages/auth-index/auth-index.component */
    "./app/modules/auth/components/pages/auth-index/auth-index.component.ts");
    /* harmony import */


    var _components_pages_auth_signin_auth_signin_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./components/pages/auth-signin/auth-signin.component */
    "./app/modules/auth/components/pages/auth-signin/auth-signin.component.ts");
    /* harmony import */


    var _components_pages_auth_signout_auth_signout_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./components/pages/auth-signout/auth-signout.component */
    "./app/modules/auth/components/pages/auth-signout/auth-signout.component.ts");

    var routes = [{
      path: '',
      component: _components_pages_auth_index_auth_index_component__WEBPACK_IMPORTED_MODULE_2__["AuthIndexComponent"]
    }, {
      path: 'signin',
      component: _components_pages_auth_signin_auth_signin_component__WEBPACK_IMPORTED_MODULE_3__["AuthSigninComponent"]
    }, {
      path: 'signout',
      component: _components_pages_auth_signout_auth_signout_component__WEBPACK_IMPORTED_MODULE_4__["AuthSignoutComponent"]
    }];

    var AuthRoutingModule = function AuthRoutingModule() {
      _classCallCheck(this, AuthRoutingModule);
    };

    AuthRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: AuthRoutingModule
    });
    AuthRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function AuthRoutingModule_Factory(t) {
        return new (t || AuthRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AuthRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./app/modules/auth/auth.module.ts":
  /*!*****************************************!*\
    !*** ./app/modules/auth/auth.module.ts ***!
    \*****************************************/

  /*! exports provided: AuthModule */

  /***/
  function appModulesAuthAuthModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthModule", function () {
      return AuthModule;
    });
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/common */
    "../../node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../shared/shared.module */
    "./app/modules/shared/shared.module.ts");
    /* harmony import */


    var _auth_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./auth-routing.module */
    "./app/modules/auth/auth-routing.module.ts");
    /* harmony import */


    var _components_pages_auth_index_auth_index_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./components/pages/auth-index/auth-index.component */
    "./app/modules/auth/components/pages/auth-index/auth-index.component.ts");
    /* harmony import */


    var _components_pages_auth_signin_auth_signin_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./components/pages/auth-signin/auth-signin.component */
    "./app/modules/auth/components/pages/auth-signin/auth-signin.component.ts");
    /* harmony import */


    var _components_pages_auth_signout_auth_signout_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./components/pages/auth-signout/auth-signout.component */
    "./app/modules/auth/components/pages/auth-signout/auth-signout.component.ts");

    var AuthModule = function AuthModule() {
      _classCallCheck(this, AuthModule);
    };

    AuthModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: AuthModule
    });
    AuthModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function AuthModule_Factory(t) {
        return new (t || AuthModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _auth_routing_module__WEBPACK_IMPORTED_MODULE_3__["AuthRoutingModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AuthModule, {
        declarations: [_components_pages_auth_index_auth_index_component__WEBPACK_IMPORTED_MODULE_4__["AuthIndexComponent"], _components_pages_auth_signin_auth_signin_component__WEBPACK_IMPORTED_MODULE_5__["AuthSigninComponent"], _components_pages_auth_signout_auth_signout_component__WEBPACK_IMPORTED_MODULE_6__["AuthSignoutComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _auth_routing_module__WEBPACK_IMPORTED_MODULE_3__["AuthRoutingModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AuthModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [_components_pages_auth_index_auth_index_component__WEBPACK_IMPORTED_MODULE_4__["AuthIndexComponent"], _components_pages_auth_signin_auth_signin_component__WEBPACK_IMPORTED_MODULE_5__["AuthSigninComponent"], _components_pages_auth_signout_auth_signout_component__WEBPACK_IMPORTED_MODULE_6__["AuthSignoutComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _auth_routing_module__WEBPACK_IMPORTED_MODULE_3__["AuthRoutingModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./app/modules/auth/components/pages/auth-index/auth-index.component.ts":
  /*!******************************************************************************!*\
    !*** ./app/modules/auth/components/pages/auth-index/auth-index.component.ts ***!
    \******************************************************************************/

  /*! exports provided: AuthIndexComponent */

  /***/
  function appModulesAuthComponentsPagesAuthIndexAuthIndexComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthIndexComponent", function () {
      return AuthIndexComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../../../../services */
    "./app/services/index.ts");
    /* harmony import */


    var _shared_components_parts_loading_loading_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../../shared/components/parts/loading/loading.component */
    "./app/modules/shared/components/parts/loading/loading.component.ts");

    var __awaiter = undefined && undefined.__awaiter || function (thisArg, _arguments, P, generator) {
      function adopt(value) {
        return value instanceof P ? value : new P(function (resolve) {
          resolve(value);
        });
      }

      return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }

        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }

        function step(result) {
          result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }

        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    };

    var AuthIndexComponent = /*#__PURE__*/function () {
      function AuthIndexComponent(cinerino) {
        _classCallCheck(this, AuthIndexComponent);

        this.cinerino = cinerino;
      }
      /**
       * 初期化
       */


      _createClass(AuthIndexComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          return __awaiter(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    _context.next = 2;
                    return this.cinerino.signIn();

                  case 2:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }]);

      return AuthIndexComponent;
    }();

    AuthIndexComponent.ɵfac = function AuthIndexComponent_Factory(t) {
      return new (t || AuthIndexComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services__WEBPACK_IMPORTED_MODULE_1__["CinerinoService"]));
    };

    AuthIndexComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AuthIndexComponent,
      selectors: [["app-auth-index"]],
      decls: 1,
      vars: 1,
      consts: [["process", "process.authAction.CheckLogin", 3, "isLoading"]],
      template: function AuthIndexComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-loading", 0);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("isLoading", true);
        }
      },
      directives: [_shared_components_parts_loading_loading_component__WEBPACK_IMPORTED_MODULE_2__["LoadingComponent"]],
      styles: [""]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthIndexComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-auth-index',
          templateUrl: './auth-index.component.html',
          styleUrls: ['./auth-index.component.scss']
        }]
      }], function () {
        return [{
          type: _services__WEBPACK_IMPORTED_MODULE_1__["CinerinoService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./app/modules/auth/components/pages/auth-signin/auth-signin.component.ts":
  /*!********************************************************************************!*\
    !*** ./app/modules/auth/components/pages/auth-signin/auth-signin.component.ts ***!
    \********************************************************************************/

  /*! exports provided: AuthSigninComponent */

  /***/
  function appModulesAuthComponentsPagesAuthSigninAuthSigninComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthSigninComponent", function () {
      return AuthSigninComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "../../node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ngrx/store */
    "../../node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../../../../../environments/environment */
    "./environments/environment.ts");
    /* harmony import */


    var _services__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../../../../services */
    "./app/services/index.ts");
    /* harmony import */


    var _store_reducers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../../../../store/reducers */
    "./app/store/reducers/index.ts");
    /* harmony import */


    var _shared_components_parts_loading_loading_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../../../shared/components/parts/loading/loading.component */
    "./app/modules/shared/components/parts/loading/loading.component.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/common */
    "../../node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    var __awaiter = undefined && undefined.__awaiter || function (thisArg, _arguments, P, generator) {
      function adopt(value) {
        return value instanceof P ? value : new P(function (resolve) {
          resolve(value);
        });
      }

      return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }

        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }

        function step(result) {
          result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }

        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    };

    var AuthSigninComponent = /*#__PURE__*/function () {
      function AuthSigninComponent(router, purchaseService, userService, orderService, store) {
        _classCallCheck(this, AuthSigninComponent);

        this.router = router;
        this.purchaseService = purchaseService;
        this.userService = userService;
        this.orderService = orderService;
        this.store = store;
        this.environment = Object(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["getEnvironment"])();
      }
      /**
       * 初期化
       */


      _createClass(AuthSigninComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          return __awaiter(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    this.process = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["select"])(_store_reducers__WEBPACK_IMPORTED_MODULE_5__["getProcess"]));
                    this.purchaseService["delete"]();
                    this.userService["delete"]();
                    this.userService.initialize({
                      isMember: true
                    });
                    this.orderService["delete"]();
                    _context2.prev = 5;
                    _context2.next = 8;
                    return this.userService.getProfile();

                  case 8:
                    _context2.next = 10;
                    return this.userService.getCreditCards();

                  case 10:
                    _context2.next = 12;
                    return this.userService.getAccount();

                  case 12:
                    this.router.navigate([this.environment.BASE_URL]);
                    _context2.next = 18;
                    break;

                  case 15:
                    _context2.prev = 15;
                    _context2.t0 = _context2["catch"](5);
                    this.router.navigate(['/error']);

                  case 18:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2, this, [[5, 15]]);
          }));
        }
      }]);

      return AuthSigninComponent;
    }();

    AuthSigninComponent.ɵfac = function AuthSigninComponent_Factory(t) {
      return new (t || AuthSigninComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services__WEBPACK_IMPORTED_MODULE_4__["PurchaseService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services__WEBPACK_IMPORTED_MODULE_4__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services__WEBPACK_IMPORTED_MODULE_4__["OrderService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"]));
    };

    AuthSigninComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AuthSigninComponent,
      selectors: [["app-auth-signin"]],
      decls: 2,
      vars: 4,
      consts: [[3, "isLoading", "process"]],
      template: function AuthSigninComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-loading", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "async");
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("isLoading", true)("process", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](1, 2, ctx.process));
        }
      },
      directives: [_shared_components_parts_loading_loading_component__WEBPACK_IMPORTED_MODULE_6__["LoadingComponent"]],
      pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["AsyncPipe"]],
      styles: [""]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthSigninComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-auth-signin',
          templateUrl: './auth-signin.component.html',
          styleUrls: ['./auth-signin.component.scss']
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
        }, {
          type: _services__WEBPACK_IMPORTED_MODULE_4__["PurchaseService"]
        }, {
          type: _services__WEBPACK_IMPORTED_MODULE_4__["UserService"]
        }, {
          type: _services__WEBPACK_IMPORTED_MODULE_4__["OrderService"]
        }, {
          type: _ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./app/modules/auth/components/pages/auth-signout/auth-signout.component.ts":
  /*!**********************************************************************************!*\
    !*** ./app/modules/auth/components/pages/auth-signout/auth-signout.component.ts ***!
    \**********************************************************************************/

  /*! exports provided: AuthSignoutComponent */

  /***/
  function appModulesAuthComponentsPagesAuthSignoutAuthSignoutComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthSignoutComponent", function () {
      return AuthSignoutComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "../../node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../../../services */
    "./app/services/index.ts");
    /* harmony import */


    var _shared_components_parts_loading_loading_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../../../shared/components/parts/loading/loading.component */
    "./app/modules/shared/components/parts/loading/loading.component.ts");

    var AuthSignoutComponent = /*#__PURE__*/function () {
      function AuthSignoutComponent(router, purchaseService, userService, orderService) {
        _classCallCheck(this, AuthSignoutComponent);

        this.router = router;
        this.purchaseService = purchaseService;
        this.userService = userService;
        this.orderService = orderService;
      }
      /**
       * 初期化
       */


      _createClass(AuthSignoutComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.orderService["delete"]();
          this.purchaseService["delete"]();
          this.userService["delete"]();
          this.router.navigate(['/']);
        }
      }]);

      return AuthSignoutComponent;
    }();

    AuthSignoutComponent.ɵfac = function AuthSignoutComponent_Factory(t) {
      return new (t || AuthSignoutComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services__WEBPACK_IMPORTED_MODULE_2__["PurchaseService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services__WEBPACK_IMPORTED_MODULE_2__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services__WEBPACK_IMPORTED_MODULE_2__["OrderService"]));
    };

    AuthSignoutComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AuthSignoutComponent,
      selectors: [["app-auth-signout"]],
      decls: 1,
      vars: 1,
      consts: [["process", "process.authAction.Logout", 3, "isLoading"]],
      template: function AuthSignoutComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-loading", 0);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("isLoading", true);
        }
      },
      directives: [_shared_components_parts_loading_loading_component__WEBPACK_IMPORTED_MODULE_3__["LoadingComponent"]],
      styles: [""]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthSignoutComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-auth-signout',
          templateUrl: './auth-signout.component.html',
          styleUrls: ['./auth-signout.component.scss']
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
        }, {
          type: _services__WEBPACK_IMPORTED_MODULE_2__["PurchaseService"]
        }, {
          type: _services__WEBPACK_IMPORTED_MODULE_2__["UserService"]
        }, {
          type: _services__WEBPACK_IMPORTED_MODULE_2__["OrderService"]
        }];
      }, null);
    })();
    /***/

  }
}]);