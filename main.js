(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/about-modal/about-modal.component.css":
/*!*******************************************************!*\
  !*** ./src/app/about-modal/about-modal.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/about-modal/about-modal.component.html":
/*!********************************************************!*\
  !*** ./src/app/about-modal/about-modal.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"modal-header\">\n  <h4 class=\"modal-title\">About</h4>\n  <button type=\"button\" class=\"close\" (click)=\"activeModal.dismiss()\"><span aria-hidden=\"true\">&times;</span></button>\n</div>\n<div class=\"modal-body\">\n    <div><b>Total Drive Quota:</b> {{info.quotaBytesTotal | bytes}}</div>\n    <div><b>Drive Quota Used:</b> {{info.quotaBytesUsed | bytes}}</div>\n</div>\n<div class=\"modal-footer\">\n  <button type=\"button\" class=\"btn btn-outline-dark\" (click)=\"activeModal.close()\">Close</button>\n</div>"

/***/ }),

/***/ "./src/app/about-modal/about-modal.component.ts":
/*!******************************************************!*\
  !*** ./src/app/about-modal/about-modal.component.ts ***!
  \******************************************************/
/*! exports provided: AboutModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutModalComponent", function() { return AboutModalComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AboutModalComponent = /** @class */ (function () {
    function AboutModalComponent(activeModal) {
        this.activeModal = activeModal;
        this.info = {
            quotaBytesTotal: 1000,
            quotaBytesUsed: 400
        };
    }
    AboutModalComponent.prototype.ngOnInit = function () {
    };
    AboutModalComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-about-modal',
            template: __webpack_require__(/*! ./about-modal.component.html */ "./src/app/about-modal/about-modal.component.html"),
            styles: [__webpack_require__(/*! ./about-modal.component.css */ "./src/app/about-modal/about-modal.component.css")]
        }),
        __metadata("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbActiveModal"]])
    ], AboutModalComponent);
    return AboutModalComponent;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<app-navbar></app-navbar>\n\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'graphit-ui';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "./node_modules/@fortawesome/angular-fontawesome/fesm5/angular-fontawesome.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./navbar/navbar.component */ "./src/app/navbar/navbar.component.ts");
/* harmony import */ var _editor_editor_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./editor/editor.component */ "./src/app/editor/editor.component.ts");
/* harmony import */ var _save_state_formatter_pipe__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./save-state-formatter.pipe */ "./src/app/save-state-formatter.pipe.ts");
/* harmony import */ var _bytes_pipe__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./bytes.pipe */ "./src/app/bytes.pipe.ts");
/* harmony import */ var _graph_canvas_graph_canvas_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./graph-canvas/graph-canvas.component */ "./src/app/graph-canvas/graph-canvas.component.ts");
/* harmony import */ var _about_modal_about_modal_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./about-modal/about-modal.component */ "./src/app/about-modal/about-modal.component.ts");
/* harmony import */ var _inline_edit_inline_edit_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./inline-edit/inline-edit.component */ "./src/app/inline-edit/inline-edit.component.ts");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};















var appRoutes = [
    { path: 'edit', component: _editor_editor_component__WEBPACK_IMPORTED_MODULE_8__["EditorComponent"] },
    { path: 'edit/:id?', component: _editor_editor_component__WEBPACK_IMPORTED_MODULE_8__["EditorComponent"] },
    { path: '',
        redirectTo: '/edit/',
        pathMatch: 'full'
    }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
                _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_7__["NavbarComponent"],
                _editor_editor_component__WEBPACK_IMPORTED_MODULE_8__["EditorComponent"],
                _save_state_formatter_pipe__WEBPACK_IMPORTED_MODULE_9__["SaveStateFormatterPipe"],
                _bytes_pipe__WEBPACK_IMPORTED_MODULE_10__["BytesPipe"],
                _graph_canvas_graph_canvas_component__WEBPACK_IMPORTED_MODULE_11__["GraphCanvasComponent"],
                _about_modal_about_modal_component__WEBPACK_IMPORTED_MODULE_12__["AboutModalComponent"],
                _inline_edit_inline_edit_component__WEBPACK_IMPORTED_MODULE_13__["InlineEditComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forRoot(appRoutes),
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModule"],
                _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_5__["FontAwesomeModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_http__WEBPACK_IMPORTED_MODULE_14__["HttpModule"]
            ],
            entryComponents: [
                _about_modal_about_modal_component__WEBPACK_IMPORTED_MODULE_12__["AboutModalComponent"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/bytes.pipe.ts":
/*!*******************************!*\
  !*** ./src/app/bytes.pipe.ts ***!
  \*******************************/
/*! exports provided: BytesPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BytesPipe", function() { return BytesPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var BytesPipe = /** @class */ (function () {
    function BytesPipe() {
    }
    BytesPipe.prototype.transform = function (value, args) {
        var bytes = parseInt(value);
        if (isNaN(bytes)) {
            return "...";
        }
        var units = [' bytes', ' KB', ' MB', ' GB', ' TB', ' PB', ' EB', ' ZB', ' YB'];
        var p = bytes > 0 ? Math.floor(Math.log(bytes) / Math.LN2 / 10) : 0;
        var u = Math.round(bytes / Math.pow(2, 10 * p));
        return u + units[p];
    };
    BytesPipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'bytes'
        })
    ], BytesPipe);
    return BytesPipe;
}());



/***/ }),

/***/ "./src/app/editor/editor.component.css":
/*!*********************************************!*\
  !*** ./src/app/editor/editor.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n.doc-info {\n    margin: 10px;\n}\n\n.doc-title {\n    font-size: 30px;\n}\n\n.doc-state {\n    font-size: 15px;\n    color: gray;\n}"

/***/ }),

/***/ "./src/app/editor/editor.component.html":
/*!**********************************************!*\
  !*** ./src/app/editor/editor.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<main role=\"main\" class=\"container-fluid\">\n\n\t<div class=\"doc-info\">\n\t\t<app-inline-edit [(ngModel)]=\"doc && doc.info && doc.info.title\" (ngModelChange)=\"doc.change(true)\" class=\"doc-title\"></app-inline-edit>\n\t\t<div class=\"doc-state\">{{ state() | saveStateFormatter }}</div>\n\t</div>\n\n\t<div class=\"row\">\n\n\t\t<div class=\"col-md-9\">\n\n\t\t\t<div class=\"card\">\n\t\t\t\t<div class=\"card-header\">\n\t\t\t\t\t<div class=\"btn-toolbar\" role=\"toolbar\">\n\t\t\t\t\t\t<div class=\"btn-group\">\n\t\t\t\t\t\t\t<button type=\"button\" class=\"btn btn-primary\" (click)=\"addNode()\"\n\t\t\t\t\t\t\t\t\tdata-toggle=\"tooltip\" data-placement=\"top\" title=\"Create a new node\">\n\t\t\t\t\t\t\t\t<fa-icon [icon]=\"faPlus\"></fa-icon>\n\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"card-body\">\n            \t\t<app-graph-canvas (selection)=\"setSelection($event)\" [document]=\"doc\"></app-graph-canvas>\n\t\t\t\t</div>\n\t\t\t</div>\n\n\t\t</div>\n\n\t\t<div class=\"col-md-3\">\n\t\t\t<div class=\"card\">\n\t\t\t\t<h4 class=\"card-header\">Node Information</h4>\n\t\t\t\t<div class=\"card-body\">\n\t\t\t\t\tLabel: <app-inline-edit [(ngModel)]=\"graphSelection && graphSelection.label\" (ngModelChange)=\"doc.change(true)\"></app-inline-edit>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\n\t</div>\n\n</main> <!-- /.container -->\n"

/***/ }),

/***/ "./src/app/editor/editor.component.ts":
/*!********************************************!*\
  !*** ./src/app/editor/editor.component.ts ***!
  \********************************************/
/*! exports provided: EditorState, EditorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditorState", function() { return EditorState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditorComponent", function() { return EditorComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* harmony import */ var _graphDocument__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../graphDocument */ "./src/app/graphDocument.ts");
/* harmony import */ var _store_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../store.service */ "./src/app/store.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var EditorState;
(function (EditorState) {
    EditorState[EditorState["CLEAN"] = 0] = "CLEAN";
    EditorState[EditorState["DIRTY"] = 1] = "DIRTY";
    EditorState[EditorState["SAVE"] = 2] = "SAVE";
    EditorState[EditorState["LOAD"] = 3] = "LOAD";
    EditorState[EditorState["READONLY"] = 4] = "READONLY";
})(EditorState || (EditorState = {}));
;
var EditorComponent = /** @class */ (function () {
    function EditorComponent(storeService) {
        this.storeService = storeService;
        this.doc = new _graphDocument__WEBPACK_IMPORTED_MODULE_2__["GraphDocument"]();
        this.graphSelection = null;
        this.faPlus = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faPlus"];
        this.loading = false;
        this.saving = false;
    }
    EditorComponent.prototype.ngOnInit = function () {
    };
    EditorComponent.prototype.setSelection = function (node) {
        this.graphSelection = node;
    };
    EditorComponent.prototype.addNode = function () {
        this.doc.addNode();
    };
    EditorComponent.prototype.state = function () {
        if (this.loading) {
            return EditorState.LOAD;
        }
        else if (this.saving) {
            return EditorState.SAVE;
        }
        else if (this.doc.dirty) {
            return EditorState.DIRTY;
        }
        else if (this.doc.info != null && !this.doc.info.editable) {
            return EditorState.READONLY;
        }
        return EditorState.CLEAN;
    };
    EditorComponent.prototype.create = function () {
        this.updateEditor({
            editable: true,
            title: 'Untitled document',
            description: '',
            mimeType: 'application/graphit',
            resource_id: null
        });
    };
    EditorComponent.prototype.load = function (id, reload) {
        /*
        if (!reload && this.doc.info && id == this.doc.resource_id) {
          return $q.when(this.doc.info);
        }
        this.loading = true;
        return this.storeService.load(id).then(result => {
          this.loading = false;
          this.updateEditor(result.data);
          $rootScope.$broadcast('loaded', doc.info);
          return result;
        }, result => {
          this.loading = false;
          $rootScope.$broadcast('error', {
            action: 'load',
            message: "An error occured while loading the file"
          });
          return result;
        });
        */
    };
    EditorComponent.prototype.save = function (newRevision) {
        /*
        if (this.saving || this.loading) {
          throw 'Save called from incorrect state';
        }
        this.saving = true;
        this.doc.dirty = false;
        const file = this.snapshot();
    
        //newRevision = newRevision || doc.timeSinceLastSave() > ONE_HOUR_IN_MS;
        const promise = this.storeService.save(file, newRevision);
        promise.then(result => {
            this.saving = false;
            this.doc.resource_id = result.data;
            this.doc.lastSave = new Date().getTime();
            $rootScope.$broadcast('saved', this.doc.info);
            return this.doc.info;
          }, result => {
            this.saving = false;
            this.doc.dirty = true;
            $rootScope.$broadcast('error', {
              action: 'save',
              message: "An error occured while saving the file"
            });
            return result;
          });
        return promise;
        */
    };
    EditorComponent.prototype.updateEditor = function (fileInfo) {
        /*
        this.doc.lastSave = 0;
        this.doc.info = fileInfo;
        this.doc.resource_id = fileInfo.id;
        if (fileInfo.content != null) {
          this.doc.setGraph(angular.fromJson(fileInfo.content));
        }
        */
    };
    EditorComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-editor',
            template: __webpack_require__(/*! ./editor.component.html */ "./src/app/editor/editor.component.html"),
            styles: [__webpack_require__(/*! ./editor.component.css */ "./src/app/editor/editor.component.css")]
        }),
        __metadata("design:paramtypes", [_store_service__WEBPACK_IMPORTED_MODULE_3__["StoreService"]])
    ], EditorComponent);
    return EditorComponent;
}());



/***/ }),

/***/ "./src/app/geometry.ts":
/*!*****************************!*\
  !*** ./src/app/geometry.ts ***!
  \*****************************/
/*! exports provided: Point, Rectangle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Point", function() { return Point; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Rectangle", function() { return Rectangle; });
var Point = /** @class */ (function () {
    function Point(x, y) {
        this.x = x;
        this.y = y;
    }
    Point.prototype.cornerTo = function (other) {
        return new Rectangle(Math.min(this.x, other.x), Math.min(this.y, other.y), Math.abs(this.x - other.x), Math.abs(this.y - other.y));
    };
    Point.prototype.rect = function (width, height) {
        return new Rectangle(this.x, this.y, width, height);
    };
    return Point;
}());

var Rectangle = /** @class */ (function () {
    function Rectangle(x, y, width, height) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
    }
    Rectangle.prototype.getMaxX = function () {
        return this.x + this.width;
    };
    Rectangle.prototype.getMaxY = function () {
        return this.y + this.height;
    };
    Rectangle.prototype.getCenterX = function () {
        return this.x + Math.floor(this.width / 2);
    };
    Rectangle.prototype.getCenterY = function () {
        return this.y + Math.floor(this.height / 2);
    };
    Rectangle.prototype.contains = function (point) {
        return this.x <= point.x && point.x < (this.x + this.width)
            && this.y <= point.y && point.y < (this.y + this.height);
    };
    Rectangle.prototype.expand = function (amount) {
        return new Rectangle(this.x - amount, this.y - amount, this.width + amount * 2, this.height + amount * 2);
    };
    return Rectangle;
}());



/***/ }),

/***/ "./src/app/graph-canvas/graph-canvas.component.css":
/*!*********************************************************!*\
  !*** ./src/app/graph-canvas/graph-canvas.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n.node rect {\n\tstroke-width: 1px;\n\tstroke: #ccc;\n\tfill: url(#rect-gradient);\n\t-webkit-filter: url(#drop-shadow);\n\t        filter: url(#drop-shadow);\n}\n\n.node text {\n\ttext-anchor: middle;\n}\n\n.node {\n\t-webkit-touch-callout: none;\n\t-webkit-user-select: none;\n\t-moz-user-select: none;\n\t-ms-user-select: none;\n\tuser-select: none;\n}\n\n#node-CLOSED rect {\n\tstroke-width: 1px;\n\tfill: #f88;\n}\n\n.node:hover {\n\tcursor: pointer;\n\topacity: 0.6;\n}\n\n.node-selected rect {\n\tfill: url(#rect-select-gradient);\n}\n\n.node-highlight rect {\n\tfill: url(#rect-highlight-gradient);\n}\n\npath.edge {\n\tfill: none;\n\tstroke: #640a50;\n\tstroke-width: 3px;\n\tmarker-end: url(#arrowhead);\n}\n\npath.edge.edge-selected {\n\tstroke: #6464cc;\n}\n\n.edge:hover {\n\tcursor: pointer;\n\topacity: 0.4;\n}"

/***/ }),

/***/ "./src/app/graph-canvas/graph-canvas.component.html":
/*!**********************************************************!*\
  !*** ./src/app/graph-canvas/graph-canvas.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n    <svg id=\"graphCanvas\" width=\"100%\" height=\"100%\">\n        <defs>\n            <marker id=\"arrowhead\" viewBox=\"0 0 10 10\" refX=\"8\" refY=\"5\" markerUnits=\"strokeWidth\" markerWidth=\"8\"\n                markerHeight=\"5\" orient=\"auto\" style=\"fill: #640a50\">\n                <path d=\"M 0 0 L 10 5 L 0 10 z\" />\n            </marker>\n\n            <filter id=\"drop-shadow\" width=\"150%\" height=\"150%\">\n                <feGaussianBlur in=\"SourceAlpha\" result=\"blur-out\" stdDeviation=\"2\" />\n                <feOffset in=\"blur-out\" result=\"the-shadow\" dx=\"2\" dy=\"2\" />\n                <feBlend in=\"SourceGraphic\" in2=\"the-shadow\" mode=\"normal\" />\n            </filter>\n\n            <linearGradient id=\"rect-gradient\" x1=\"0%\" y1=\"0%\" x2=\"0%\" y2=\"100%\">\n                <stop offset=\"0%\" style=\"stop-color: rgb(254,254,255); stop-opacity:1\" />\n                <stop offset=\"100%\" style=\"stop-color: rgb(247,247,255); stop-opacity:1\" />\n            </linearGradient>\n\n            <linearGradient id=\"rect-select-gradient\" x1=\"0%\" y1=\"0%\" x2=\"0%\" y2=\"100%\">\n                <stop offset=\"0%\" style=\"stop-color: #d9edf7; stop-opacity:1\" />\n                <stop offset=\"100%\" style=\"stop-color: #c9ddf7; stop-opacity:1\" />\n            </linearGradient>\n\n            <linearGradient id=\"rect-highlight-gradient\" x1=\"0%\" y1=\"0%\" x2=\"0%\" y2=\"100%\">\n                <stop offset=\"0%\" style=\"stop-color: #77ee77; stop-opacity:1\" />\n                <stop offset=\"100%\" style=\"stop-color: #67de67; stop-opacity:1\" />\n            </linearGradient>\n        </defs>\n\n        <g id=\"eventRect\">\n            <rect width=\"100%\" height=\"100%\" style=\"fill: white\" />\n            <g id=\"edges\" />\n            <g id=\"nodes\" />\n            <g id=\"tools\" />\n            <g id=\"feedback\" />\n        </g>\n    </svg>\n</div>"

/***/ }),

/***/ "./src/app/graph-canvas/graph-canvas.component.ts":
/*!********************************************************!*\
  !*** ./src/app/graph-canvas/graph-canvas.component.ts ***!
  \********************************************************/
/*! exports provided: GraphCanvasComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GraphCanvasComponent", function() { return GraphCanvasComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _graph__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../graph */ "./src/app/graph.ts");
/* harmony import */ var _graphlayout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../graphlayout */ "./src/app/graphlayout.ts");
/* harmony import */ var _geometry__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../geometry */ "./src/app/geometry.ts");
/* harmony import */ var _graph_controller_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./graph-controller.service */ "./src/app/graph-canvas/graph-controller.service.ts");
/* harmony import */ var _graphDocument__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../graphDocument */ "./src/app/graphDocument.ts");
/* harmony import */ var _svg_utils__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./svg-utils */ "./src/app/graph-canvas/svg-utils.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var SvgNode = /** @class */ (function () {
    function SvgNode(nodeSpec) {
        this.nodeSpec = nodeSpec;
    }
    SvgNode.prototype.getWeight = function () {
        return this.nodeSpec.id;
    };
    return SvgNode;
}());
var SvgEdge = /** @class */ (function (_super) {
    __extends(SvgEdge, _super);
    function SvgEdge(fromNode, toNode) {
        return _super.call(this, fromNode, toNode) || this;
    }
    return SvgEdge;
}(_graph__WEBPACK_IMPORTED_MODULE_3__["Edge"]));
var GraphProperties;
(function (GraphProperties) {
    GraphProperties[GraphProperties["minLabelWidth"] = 50] = "minLabelWidth";
    GraphProperties[GraphProperties["nodePadding"] = 10] = "nodePadding";
    GraphProperties[GraphProperties["verticalMargin"] = 50] = "verticalMargin";
    GraphProperties[GraphProperties["horizontalMargin"] = 50] = "horizontalMargin";
})(GraphProperties || (GraphProperties = {}));
var NodeSizeProvider = /** @class */ (function () {
    function NodeSizeProvider() {
    }
    NodeSizeProvider.prototype.getWidth = function (node) {
        return node.bounds.width;
    };
    NodeSizeProvider.prototype.getHeight = function (node) {
        return node.bounds.height;
    };
    NodeSizeProvider.prototype.getVerticalMargin = function () {
        return GraphProperties.verticalMargin;
    };
    NodeSizeProvider.prototype.getHorizontalMargin = function () {
        return GraphProperties.horizontalMargin;
    };
    return NodeSizeProvider;
}());
var SvgDrawContext = /** @class */ (function () {
    function SvgDrawContext(svg, selectionObserver, document) {
        var _this = this;
        this.svg = svg;
        this.selectionObserver = selectionObserver;
        this.document = document;
        this.sizeProvider = new NodeSizeProvider();
        this.document.onChange.subscribe(function (data) {
            _this.render(data);
        });
        this.render(this.document.graph);
    }
    SvgDrawContext.prototype.findNode = function (point) {
        return this.nodes.find(function (node) { return node.bounds.contains(point); });
    };
    SvgDrawContext.prototype.resolveNode = function (node) {
        var oldNode = node;
        return this.nodes.find(function (node) { return node.nodeSpec.id == oldNode.nodeSpec.id; });
    };
    SvgDrawContext.prototype.findEdge = function (point) {
        return this.edges.find(function (node) { return node.contains(point); });
    };
    SvgDrawContext.prototype.removeTools = function () {
        this.svg.selectAll("g#tools g").remove();
    };
    SvgDrawContext.prototype.displayTool = function (tool) {
        var rect = this.svg.rect(tool.origin.x, tool.origin.y, 20, 20, 3, 3)
            .attr({
            rx: "3",
            ry: "3",
            stroke: "#999",
            "stroke-width": "2px",
            fill: "white"
        });
        var image = this.svg.image(tool.imgURL, tool.origin.x + 2, tool.origin.y + 2, 16, 16);
        var group = this.svg.g(rect, image).attr({ class: "tool" });
        this.svg.select("g#tools").append(group);
    };
    SvgDrawContext.prototype.nodesClass = function (name, func) {
        this.nodes.forEach(function (node) {
            node.svgElement.toggleClass(name, func(node));
        });
    };
    SvgDrawContext.prototype.edgesClass = function (name, func) {
        this.edges.forEach(function (edge) {
            edge.getOriginalEdge().svgElement.toggleClass(name, func(edge));
        });
    };
    SvgDrawContext.prototype.displayGhostNode = function (node) {
        var ghost = this.svg.rect()
            .attr({
            rx: "5",
            ry: "5",
            x: node.bounds.x,
            y: node.bounds.y,
            width: node.bounds.width,
            height: node.bounds.height,
            stroke: "#CCC",
            "stroke-width": "2px",
            "fill-opacity": "0.5"
        });
        this.svg.select("g#feedback").append(ghost);
        return new SvgGhostNode(ghost);
    };
    SvgDrawContext.prototype.displayGhostLine = function (from, to) {
        var pendingLine = this.svg.line(from.x, from.y, to.x, to.y)
            .attr({
            stroke: "blue",
            "stroke-width": "2px"
        });
        this.svg.select("g#feedback").append(pendingLine);
        return new SvgGhostLine(pendingLine);
    };
    SvgDrawContext.prototype.connect = function (from, to) {
        this.document.connectNodes(from.nodeSpec, to.nodeSpec);
    };
    SvgDrawContext.prototype.swap = function (node, other) {
        console.log("Swap: ", node, other);
    };
    SvgDrawContext.prototype.removeNode = function (node) {
        this.document.removeNode(node.nodeSpec);
    };
    SvgDrawContext.prototype.removeEdge = function (edge) {
        var originalEdge = edge.getOriginalEdge();
        this.document.removeEdge({
            from: originalEdge.getFromNode().nodeSpec.id,
            to: originalEdge.getToNode().nodeSpec.id
        });
    };
    SvgDrawContext.prototype.render = function (graph) {
        var _this = this;
        var svgNodes = this.svg.select("g#nodes");
        var svgEdges = this.svg.select("g#edges");
        // clear svg
        svgNodes.selectAll("g").remove();
        svgEdges.selectAll("path").remove();
        var g = this.buildGraph(graph);
        // build svg nodes
        g.getNodes()
            .forEach(function (node) {
            var rect = _this.svg.rect(0, 0, 0, 0, 5, 5);
            var label = _this.svg.text(0, 0, node.nodeSpec.label)
                .attr({ dy: 25 });
            var nodeGroup = _this.svg.group(rect, label)
                .attr({
                class: "node",
                id: "node-" + node.nodeSpec.id
            });
            // compute node size
            var bbox = label.getBBox();
            bbox.width = Math.max(bbox.width, GraphProperties.minLabelWidth);
            node.bounds = new _geometry__WEBPACK_IMPORTED_MODULE_5__["Rectangle"](0, 0, bbox.width + 2 * GraphProperties.nodePadding, bbox.height + 2 * GraphProperties.nodePadding);
            rect.attr({
                width: node.bounds.width,
                height: node.bounds.height
            });
            label.attr({
                x: node.bounds.width / 2
            });
            node.svgElement = nodeGroup;
            svgNodes.append(nodeGroup);
        });
        // layout graph
        var graphLayout = new _graphlayout__WEBPACK_IMPORTED_MODULE_4__["GraphLayout"](g);
        graphLayout.layout();
        graphLayout.setSizes(this.sizeProvider);
        // place nodes
        g.getNodes().forEach(function (node) {
            node.svgElement.attr({ transform: "translate(" + node.bounds.x + "," + node.bounds.y + ")" });
            node.svgElement.select("rect").attr({
                width: node.bounds.width,
                height: node.bounds.height
            });
            node.svgElement.select("text").attr({
                x: node.bounds.width / 2
            });
        });
        // draw edges
        graphLayout.getEdges().forEach(function (edge) {
            var svgElement = _this.svg.path(Object(_svg_utils__WEBPACK_IMPORTED_MODULE_8__["edgeLine"])(edge.getPoints(), 15))
                .attr({ class: "edge" });
            edge.getOriginalEdge().svgElement = svgElement;
            svgEdges.append(svgElement);
        });
        this.svg.attr({ "height": graphLayout.getHeight() });
        this.nodes = g.getNodes();
        this.edges = graphLayout.getEdges();
    };
    SvgDrawContext.prototype.buildGraph = function (graph) {
        var g = new _graph__WEBPACK_IMPORTED_MODULE_3__["Graph"]();
        var nodeMap = {};
        graph.nodes.forEach(function (nodeSpec) {
            var node = new SvgNode(nodeSpec);
            nodeMap[nodeSpec.id] = node;
            g.addNode(node);
        });
        graph.edges.forEach(function (edge) {
            g.addEdge(new _graph__WEBPACK_IMPORTED_MODULE_3__["Edge"](nodeMap[edge.from], nodeMap[edge.to]));
        });
        return g;
    };
    return SvgDrawContext;
}());
var SvgGhostNode = /** @class */ (function () {
    function SvgGhostNode(svgElement) {
        this.svgElement = svgElement;
    }
    SvgGhostNode.prototype.moveTo = function (position) {
        this.svgElement.attr({
            x: position.x,
            y: position.y
        });
    };
    SvgGhostNode.prototype.remove = function () {
        this.svgElement.remove();
    };
    return SvgGhostNode;
}());
var SvgGhostLine = /** @class */ (function () {
    function SvgGhostLine(svgElement) {
        this.svgElement = svgElement;
    }
    SvgGhostLine.prototype.moveEnd = function (position) {
        this.svgElement.attr({
            x2: position.x,
            y2: position.y
        });
    };
    SvgGhostLine.prototype.remove = function () {
        this.svgElement.remove();
    };
    return SvgGhostLine;
}());
var GraphCanvasComponent = /** @class */ (function () {
    function GraphCanvasComponent(graphController) {
        this.graphController = graphController;
        this.selectionSubject = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.selection = this.selectionSubject.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (node) {
            if (node) {
                return node.nodeSpec;
            }
            return null;
        }));
    }
    GraphCanvasComponent.prototype.ngOnInit = function () {
        this.svg = Snap("#graphCanvas");
        this.svg.select("#eventRect")
            .mousedown(this.mouseDown.bind(this))
            .mouseup(this.mouseUp.bind(this))
            .mousemove(this.mouseMove.bind(this));
        // TODO render on window resize
        this.state = this.graphController.create(new SvgDrawContext(this.svg, this.selectionSubject, this.document));
    };
    GraphCanvasComponent.prototype.mouseDown = function (event, x, y) {
        this.state = this.state.mouseDown(Object(_svg_utils__WEBPACK_IMPORTED_MODULE_8__["toPoint"])(event));
    };
    GraphCanvasComponent.prototype.mouseUp = function (event, x, y) {
        this.state = this.state.mouseUp(Object(_svg_utils__WEBPACK_IMPORTED_MODULE_8__["toPoint"])(event));
    };
    GraphCanvasComponent.prototype.mouseMove = function (event, x, y) {
        this.state = this.state.mouseMove(Object(_svg_utils__WEBPACK_IMPORTED_MODULE_8__["toPoint"])(event));
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _graphDocument__WEBPACK_IMPORTED_MODULE_7__["GraphDocument"])
    ], GraphCanvasComponent.prototype, "document", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", rxjs__WEBPACK_IMPORTED_MODULE_1__["Observable"])
    ], GraphCanvasComponent.prototype, "selection", void 0);
    GraphCanvasComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-graph-canvas',
            template: __webpack_require__(/*! ./graph-canvas.component.html */ "./src/app/graph-canvas/graph-canvas.component.html"),
            styles: [__webpack_require__(/*! ./graph-canvas.component.css */ "./src/app/graph-canvas/graph-canvas.component.css")],
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
        }),
        __metadata("design:paramtypes", [_graph_controller_service__WEBPACK_IMPORTED_MODULE_6__["GraphControllerService"]])
    ], GraphCanvasComponent);
    return GraphCanvasComponent;
}());



/***/ }),

/***/ "./src/app/graph-canvas/graph-controller.service.ts":
/*!**********************************************************!*\
  !*** ./src/app/graph-canvas/graph-controller.service.ts ***!
  \**********************************************************/
/*! exports provided: GraphControllerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GraphControllerService", function() { return GraphControllerService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _geometry__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../geometry */ "./src/app/geometry.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var Context = /** @class */ (function () {
    function Context(drawContext) {
        this.drawContext = drawContext;
        this.tools = [];
    }
    Context.prototype.clearSelection = function () {
        this.eraseTools();
        this.tools = [];
        this.nodeSelection = null;
        this.edgeSelection = null;
        this.drawContext.nodesClass("node-selected", function (d) { return false; });
        this.drawContext.edgesClass("edge-selected", function (d) { return false; });
        this.drawContext.selectionObserver.next(null);
    };
    Context.prototype.selectNode = function (node) {
        var _this = this;
        this.edgeSelection = null;
        this.nodeSelection = this.drawContext.resolveNode(node);
        this.drawContext.nodesClass("node-selected", function (d) { return d == _this.nodeSelection; });
        this.drawContext.edgesClass("edge-selected", function (d) { return false; });
        this.drawContext.selectionObserver.next(this.nodeSelection);
        this.tools = [
            { imgURL: "assets/connect.png", state: function (point) { return new ConnectNodesState(_this, point); } },
            { imgURL: "assets/remove.png", state: function (point) { return new RemoveNodeState(_this); } }
        ];
        this.placeTools(this.nodeSelection.bounds.getMaxX() + 10, this.nodeSelection.bounds.y, this.tools);
    };
    Context.prototype.selectEdge = function (edge) {
        var _this = this;
        this.nodeSelection = null;
        this.edgeSelection = edge;
        this.drawContext.edgesClass("edge-selected", function (d) { return d == edge; });
        this.drawContext.nodesClass("node-selected", function (d) { return false; });
        this.tools = [
            { imgURL: "assets/remove.png", state: function (point) { return new RemoveEdgeState(_this); } }
        ];
        var fromPoint = edge.getPoints()[0];
        this.placeTools(fromPoint.x + 10, fromPoint.y + 10, this.tools);
    };
    Context.prototype.eraseTools = function () {
        this.drawContext.removeTools();
    };
    Context.prototype.findTool = function (point) {
        return this.tools.find(function (tool) { return tool.origin.rect(20, 20).contains(point); });
    };
    Context.prototype.placeTools = function (x, y, tools) {
        var _this = this;
        this.tools.forEach(function (tool) {
            tool.origin = new _geometry__WEBPACK_IMPORTED_MODULE_1__["Point"](x, y);
            y += 25;
        });
        this.eraseTools();
        // create tools visual
        this.tools.forEach(function (tool) {
            _this.drawContext.displayTool(tool);
        });
    };
    Context.prototype.findSwapCandidates = function (node) {
        var candidateNodes = [];
        //const edges = this.svgContext.graphLayout.workGraph.getIncomings(node);
        //if (edges.length == 0) {
        //  this.svgContext.graphLayout.ranks[0].nodes.forEach(n => {
        //    if (n != node) {
        //      candidateNodes.push(n);
        //    }
        //  });
        //}
        return candidateNodes;
    };
    return Context;
}());
var IdleState = /** @class */ (function () {
    function IdleState(context) {
        this.context = context;
    }
    IdleState.prototype.mouseDown = function (point) {
        var selectedTool = this.context.findTool(point);
        if (selectedTool != null) {
            this.context.eraseTools();
            return selectedTool.state(point);
        }
        var selectedNode = this.context.drawContext.findNode(point);
        if (selectedNode != null) {
            return new NodeDragStartState(this.context, selectedNode);
        }
        var selectedEdge = this.context.drawContext.findEdge(point);
        if (selectedEdge != null) {
            return new EdgeDragStartState(this.context, selectedEdge);
        }
        this.context.clearSelection();
        return this;
    };
    ;
    IdleState.prototype.mouseMove = function (point) {
        return this;
    };
    IdleState.prototype.mouseUp = function (point) {
        return this;
    };
    return IdleState;
}());
var NodeDragStartState = /** @class */ (function () {
    function NodeDragStartState(context, node) {
        this.context = context;
        this.node = node;
    }
    NodeDragStartState.prototype.mouseDown = function (point) {
        return this;
    };
    NodeDragStartState.prototype.mouseMove = function (point) {
        return new NodeDragState(this.context, this.node, point);
    };
    NodeDragStartState.prototype.mouseUp = function (point) {
        this.context.selectNode(this.node);
        return new IdleState(this.context);
    };
    return NodeDragStartState;
}());
var NodeDragState = /** @class */ (function () {
    function NodeDragState(context, node, point) {
        var _this = this;
        this.context = context;
        this.node = node;
        this.node = node;
        this.context.clearSelection();
        this.candidateNodes = this.context.findSwapCandidates(node);
        this.ghost = this.context.drawContext.displayGhostNode(node);
        this.offset = { dx: point.x - node.bounds.x, dy: point.y - node.bounds.y };
        this.context.drawContext.nodesClass("node-highlight", function (d) { return d == node || _this.candidateNodes.indexOf(d) >= 0; });
    }
    NodeDragState.prototype.mouseDown = function (point) {
        return this;
    };
    NodeDragState.prototype.mouseMove = function (point) {
        var _this = this;
        this.ghost.moveTo(new _geometry__WEBPACK_IMPORTED_MODULE_1__["Point"](point.x - this.offset.dx, point.y - this.offset.dy));
        this.candidate = this.candidateNodes.find(function (d) { return d.bounds.contains(point); });
        this.context.drawContext.nodesClass("node-highlight", function (d) {
            return d == _this.node || _this.candidateNodes.indexOf(d) >= 0 && d != _this.candidate;
        });
        this.context.drawContext.nodesClass("node-selected", function (d) { return d == _this.candidate; });
        return this;
    };
    ;
    NodeDragState.prototype.mouseUp = function (point) {
        this.ghost.remove();
        this.context.drawContext.nodesClass("node-highlight", function (d) { return false; });
        if (this.candidate != null) {
            this.context.drawContext.swap(this.node, this.candidate);
        }
        this.context.selectNode(this.node);
        return new IdleState(this.context);
    };
    return NodeDragState;
}());
var EdgeDragStartState = /** @class */ (function () {
    function EdgeDragStartState(context, edge) {
        this.context = context;
        this.edge = edge;
    }
    EdgeDragStartState.prototype.mouseDown = function (point) {
        return this;
    };
    EdgeDragStartState.prototype.mouseMove = function (point) {
        return this;
    };
    EdgeDragStartState.prototype.mouseUp = function (point) {
        this.context.selectEdge(this.edge);
        return new IdleState(this.context);
    };
    return EdgeDragStartState;
}());
var ConnectNodesState = /** @class */ (function () {
    function ConnectNodesState(context, point) {
        this.context = context;
        this.pendingLine = this.context.drawContext.displayGhostLine(new _geometry__WEBPACK_IMPORTED_MODULE_1__["Point"](this.context.nodeSelection.bounds.x + this.context.nodeSelection.bounds.width / 2, this.context.nodeSelection.bounds.y + this.context.nodeSelection.bounds.height / 2), point);
    }
    ConnectNodesState.prototype.mouseDown = function (point) {
        return this;
    };
    ConnectNodesState.prototype.mouseMove = function (point) {
        var _this = this;
        this.pendingLine.moveEnd(point);
        this.destinationNode = this.context.drawContext.findNode(point);
        this.context.drawContext.nodesClass("node-highlight", function (d) { return d == _this.destinationNode; });
        return this;
    };
    ;
    ConnectNodesState.prototype.mouseUp = function (point) {
        this.pendingLine.remove();
        this.context.drawContext.nodesClass("node-highlight", function (d) { return false; });
        if (this.destinationNode != null && this.destinationNode != this.context.nodeSelection) {
            this.context.drawContext.connect(this.context.nodeSelection, this.destinationNode);
        }
        this.context.selectNode(this.context.nodeSelection);
        return new IdleState(this.context);
    };
    return ConnectNodesState;
}());
var RemoveNodeState = /** @class */ (function () {
    function RemoveNodeState(context) {
        this.context = context;
    }
    RemoveNodeState.prototype.mouseDown = function (point) {
        return this;
    };
    ;
    RemoveNodeState.prototype.mouseMove = function (point) {
        return this;
    };
    ;
    RemoveNodeState.prototype.mouseUp = function (point) {
        this.context.drawContext.removeNode(this.context.nodeSelection);
        this.context.clearSelection();
        return new IdleState(this.context);
    };
    return RemoveNodeState;
}());
var RemoveEdgeState = /** @class */ (function () {
    function RemoveEdgeState(context) {
        this.context = context;
    }
    RemoveEdgeState.prototype.mouseDown = function (point) {
        return this;
    };
    RemoveEdgeState.prototype.mouseMove = function (point) {
        return this;
    };
    RemoveEdgeState.prototype.mouseUp = function (point) {
        this.context.drawContext.removeEdge(this.context.edgeSelection);
        this.context.clearSelection();
        return new IdleState(this.context);
    };
    return RemoveEdgeState;
}());
var GraphControllerService = /** @class */ (function () {
    function GraphControllerService() {
    }
    GraphControllerService.prototype.create = function (drawContext) {
        return new IdleState(new Context(drawContext));
    };
    GraphControllerService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], GraphControllerService);
    return GraphControllerService;
}());



/***/ }),

/***/ "./src/app/graph-canvas/svg-utils.ts":
/*!*******************************************!*\
  !*** ./src/app/graph-canvas/svg-utils.ts ***!
  \*******************************************/
/*! exports provided: toPoint, edgeLine */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toPoint", function() { return toPoint; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "edgeLine", function() { return edgeLine; });
/* harmony import */ var _geometry__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../geometry */ "./src/app/geometry.ts");

function toPoint(event) {
    var pt = event.target.ownerSVGElement.createSVGPoint();
    pt.x = event.clientX;
    pt.y = event.clientY;
    var transformed = pt.matrixTransform(event.target.ownerSVGElement.getScreenCTM().inverse());
    return new _geometry__WEBPACK_IMPORTED_MODULE_0__["Point"](transformed.x, transformed.y);
}
function midPoint(p1, p2, t) {
    return new _geometry__WEBPACK_IMPORTED_MODULE_0__["Point"](p2.x + Math.sign(p1.x - p2.x) * t, p2.y + Math.sign(p1.y - p2.y) * t);
}
function edgeLine(points, radius) {
    function pointCoords(point) {
        return point.x + "," + point.y;
    }
    var path = "M";
    path += pointCoords(points[0]);
    for (var i = 1; i < points.length - 1; i++) {
        path += "L";
        path += pointCoords(midPoint(points[i - 1], points[i], radius));
        path += "Q";
        path += pointCoords(points[i]);
        path += " ";
        path += pointCoords(midPoint(points[i + 1], points[i], radius));
    }
    path += "L";
    // offset the end point because of arrowhead
    path += pointCoords(midPoint(points[points.length - 2], points[points.length - 1], 2));
    return path;
}


/***/ }),

/***/ "./src/app/graph.ts":
/*!**************************!*\
  !*** ./src/app/graph.ts ***!
  \**************************/
/*! exports provided: Graph, Edge */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Graph", function() { return Graph; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Edge", function() { return Edge; });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ "./src/app/utils.ts");

var Graph = /** @class */ (function () {
    function Graph(graph) {
        var _this = this;
        this.nodes = new _utils__WEBPACK_IMPORTED_MODULE_0__["GMap"]();
        this.edges = [];
        if (graph != null) {
            graph.getNodes().forEach(function (node) {
                _this.addNode(node);
            });
            graph.getEdges().forEach(function (edge) {
                _this.addEdge(edge);
            });
        }
    }
    Graph.prototype.addNode = function (node) {
        this.nodes.put(node, new NodeWrapper());
    };
    Graph.prototype.addEdge = function (edge) {
        this.edges.push(edge);
        this.nodes.get(edge.getFromNode()).edges.push(edge);
        this.nodes.get(edge.getToNode()).edges.push(edge);
        this.nodes.get(edge.getFromNode()).outgoings.push(edge);
        this.nodes.get(edge.getToNode()).incomings.push(edge);
    };
    Graph.prototype.removeNode = function (node) {
        var _this = this;
        var wrapper = this.nodes.remove(node);
        wrapper.incomings.forEach(function (edge) {
            Object(_utils__WEBPACK_IMPORTED_MODULE_0__["remove"])(_this.edges, edge);
            Object(_utils__WEBPACK_IMPORTED_MODULE_0__["remove"])(_this.getOutgoings(edge.getFromNode()), edge);
            Object(_utils__WEBPACK_IMPORTED_MODULE_0__["remove"])(_this.getEdges(edge.getFromNode()), edge);
        });
        wrapper.outgoings.forEach(function (edge) {
            Object(_utils__WEBPACK_IMPORTED_MODULE_0__["remove"])(_this.edges, edge);
            Object(_utils__WEBPACK_IMPORTED_MODULE_0__["remove"])(_this.getIncomings(edge.getToNode()), edge);
            Object(_utils__WEBPACK_IMPORTED_MODULE_0__["remove"])(_this.getEdges(edge.getToNode()), edge);
        });
    };
    ;
    Graph.prototype.getNodes = function () {
        return this.nodes.keys();
    };
    Graph.prototype.getEdges = function (node) {
        if (node != null) {
            return this.nodes.get(node).edges;
        }
        return this.edges;
    };
    Graph.prototype.getIncomings = function (node) {
        return this.nodes.get(node).incomings;
    };
    Graph.prototype.getOutgoings = function (node) {
        return this.nodes.get(node).outgoings;
    };
    Graph.prototype.getSink = function () {
        var _this = this;
        return this.getNodes().find(function (node) { return _this.nodes.get(node).outgoings.length == 0; });
    };
    Graph.prototype.getSource = function () {
        var _this = this;
        return this.getNodes().find(function (node) { return _this.nodes.get(node).incomings.length == 0; });
    };
    ;
    Graph.prototype.getIsolated = function () {
        var _this = this;
        return this.getNodes().find(function (node) {
            return _this.nodes.get(node).incomings.length == 0
                && _this.nodes.get(node).outgoings.length == 0;
        });
    };
    Graph.prototype.replaceEdgeBy = function (edge, fromEdge, toEdge) {
        Object(_utils__WEBPACK_IMPORTED_MODULE_0__["remove"])(this.edges, edge);
        this.replaceOutgoingEdge(edge, fromEdge);
        this.replaceIncomingEdge(edge, toEdge);
    };
    Graph.prototype.replaceOutgoingEdge = function (edge, newEdge) {
        this.edges.push(newEdge);
        this.getIncomings(newEdge.getToNode()).push(newEdge);
        this.replaceEdge(this.getOutgoings(edge.getFromNode()), edge, newEdge);
        this.replaceEdge(this.getEdges(edge.getFromNode()), edge, newEdge);
    };
    Graph.prototype.replaceIncomingEdge = function (edge, newEdge) {
        this.edges.push(newEdge);
        this.getOutgoings(newEdge.getFromNode()).push(newEdge);
        this.replaceEdge(this.getIncomings(edge.getToNode()), edge, newEdge);
        this.replaceEdge(this.getEdges(edge.getToNode()), edge, newEdge);
    };
    Graph.prototype.replaceEdge = function (edges, oldEdge, newEdge) {
        for (var i = 0; i < edges.length; ++i) {
            if (edges[i] == oldEdge) {
                edges[i] = newEdge;
                return;
            }
        }
        throw new Error("edge not found");
    };
    return Graph;
}());

var NodeWrapper = /** @class */ (function () {
    function NodeWrapper() {
        this.edges = [];
        this.incomings = [];
        this.outgoings = [];
    }
    return NodeWrapper;
}());
var Edge = /** @class */ (function () {
    function Edge(fromNode, toNode) {
        this.fromNode = fromNode;
        this.toNode = toNode;
    }
    Edge.prototype.getFromNode = function () {
        return this.fromNode;
    };
    Edge.prototype.getToNode = function () {
        return this.toNode;
    };
    Edge.prototype.getOpposite = function (node) {
        if (node == this.fromNode) {
            return this.toNode;
        }
        return this.fromNode;
    };
    return Edge;
}());



/***/ }),

/***/ "./src/app/graphDocument.ts":
/*!**********************************!*\
  !*** ./src/app/graphDocument.ts ***!
  \**********************************/
/*! exports provided: GraphDocument */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GraphDocument", function() { return GraphDocument; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");

var GraphDocument = /** @class */ (function () {
    function GraphDocument() {
        this.dirty = false;
        this.lastSave = 0;
        this.resource_id = null;
        this.onChange = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Subject"]();
        this.info = {
            title: "Mon Doc",
            editable: true,
            resource_id: null
        };
        this.graph = {
            nodes: [
                { id: 1, label: "Accepted" },
                { id: 2, label: "Removed" },
                { id: 3, label: "Transfered" },
                { id: 4, label: "Canceled" },
                { id: 5, label: "Changed" },
                { id: 6, label: "Abandonned" }
            ],
            edges: [
                { from: 1, to: 3 },
                { from: 1, to: 2 },
                { from: 2, to: 3 },
                { from: 3, to: 5 },
                { from: 5, to: 6 },
                { from: 3, to: 6 },
                { from: 3, to: 6 },
                { from: 4, to: 2 }
            ]
        };
    }
    GraphDocument.prototype.timeSinceLastSave = function () {
        return new Date().getTime() - this.lastSave;
    };
    GraphDocument.prototype.snapshot = function () {
        this.dirty = false;
        var data = Object.assign({}, this.info);
        data.resource_id = this.resource_id;
        if (this.info.editable) {
            data.content = JSON.stringify(this.graph);
        }
        return data;
    };
    /*
    doc.$watch('info',
        function (newValue, oldValue) {
            if (oldValue != null && newValue === oldValue) {
                doc.dirty = true;
            }
        },
        true);
    */
    GraphDocument.prototype.change = function (isDirty) {
        this.dirty = isDirty;
        this.onChange.next(this.graph);
    };
    ;
    GraphDocument.prototype.setGraph = function (graph) {
        this.graph = graph;
        this.change(false);
    };
    GraphDocument.prototype.addNode = function () {
        var newId = 0;
        if (this.graph.nodes.length > 0) {
            newId = Math.max.apply(Math, this.graph.nodes.map(function (node) { return node.id; })) + 1;
        }
        this.graph.nodes.push({ id: newId, label: "Unnamed", weight: newId });
        this.change(true);
    };
    GraphDocument.prototype.connectNodes = function (from, to) {
        this.graph.edges.push({ from: from.id, to: to.id });
        this.change(true);
    };
    GraphDocument.prototype.removeNode = function (removedNode) {
        this.graph.edges = this.graph.edges.filter(function (edge) { return edge.from != removedNode.id && edge.to != removedNode.id; });
        this.graph.nodes = this.graph.nodes.filter(function (node) { return node.id != removedNode.id; });
        this.change(true);
    };
    GraphDocument.prototype.removeEdge = function (removedEdge) {
        this.graph.edges = this.graph.edges.filter(function (edge) { return edge.from != removedEdge.from || edge.to != removedEdge.to; });
        this.change(true);
    };
    return GraphDocument;
}());



/***/ }),

/***/ "./src/app/graphlayout.ts":
/*!********************************!*\
  !*** ./src/app/graphlayout.ts ***!
  \********************************/
/*! exports provided: GraphLayout */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GraphLayout", function() { return GraphLayout; });
/* harmony import */ var _geometry__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./geometry */ "./src/app/geometry.ts");
/* harmony import */ var _graph__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./graph */ "./src/app/graph.ts");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils */ "./src/app/utils.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();



var Side;
(function (Side) {
    Side[Side["TOP"] = 0] = "TOP";
    Side[Side["BOTTOM"] = 1] = "BOTTOM";
    Side[Side["LEFT"] = 2] = "LEFT";
    Side[Side["RIGHT"] = 3] = "RIGHT";
})(Side || (Side = {}));
var EdgePositionAdjuster = /** @class */ (function () {
    function EdgePositionAdjuster(side, node) {
        this.side = side;
        this.node = node;
    }
    EdgePositionAdjuster.prototype.reset = function () {
        this.outgoings = [];
        this.incomings = [];
        this.straightEdge = null;
    };
    EdgePositionAdjuster.prototype.add = function (edge) {
        if (edge.getFromNode() == this.node) {
            this.outgoings.push(edge);
        }
        else {
            this.incomings.push(edge);
        }
        if (edge.getFromLine() == edge.getToLine()) {
            this.straightEdge = edge;
        }
    };
    ;
    EdgePositionAdjuster.prototype.adjust = function (edge) {
        var _this = this;
        var point = this.node.getPoint(this.side);
        if (this.incomings.length <= 1 && this.outgoings.length <= 1
            || this.straightEdge == edge) {
            return point;
        }
        this.incomings.sort(function (o1, o2) {
            var o1Opposite = o1.getOpposite(_this.node);
            var o2Opposite = o2.getOpposite(_this.node);
            if (_this.side == Side.LEFT) {
                return o2Opposite.rankNumber - o1Opposite.rankNumber;
            }
            return o1Opposite.line - o2Opposite.line;
        });
        this.outgoings.sort(function (o1, o2) {
            var o1Opposite = o1.getOpposite(_this.node);
            var o2Opposite = o2.getOpposite(_this.node);
            if (_this.side == Side.RIGHT) {
                return o1Opposite.rankNumber - o2Opposite.rankNumber;
            }
            return o2Opposite.line - o1Opposite.line;
        });
        var edges = this.incomings.concat(this.outgoings);
        var size = this.getSize();
        var pos = edges.indexOf(edge) + 1;
        var total = edges.length + 1;
        if (this.straightEdge != null) {
            size -= size / 2;
            var straightPos = edges.indexOf(this.straightEdge);
            if (straightPos > pos) {
                total = straightPos;
            }
            else {
                pos -= straightPos;
                total -= straightPos;
            }
        }
        var offset = Math.floor((size * pos) / total - size / 2);
        if (this.side == Side.LEFT || this.side == Side.RIGHT) {
            return new _geometry__WEBPACK_IMPORTED_MODULE_0__["Point"](point.x, point.y + offset);
        }
        return new _geometry__WEBPACK_IMPORTED_MODULE_0__["Point"](point.x + offset, point.y);
    };
    ;
    EdgePositionAdjuster.prototype.getSize = function () {
        return this.side == Side.LEFT || this.side == Side.RIGHT ?
            this.node.bounds.height
            : this.node.bounds.width;
    };
    ;
    return EdgePositionAdjuster;
}());
var GraphicalNode = /** @class */ (function () {
    function GraphicalNode(node, weight) {
        if (node) {
            this.node = node;
            this.weight = 0; // node.getWeight();
            this.isDummy = false;
        }
        else {
            this.node = null;
            this.weight = weight;
            this.isDummy = true;
        }
        this.rankNumber = -1;
        this.adjusters = [
            new EdgePositionAdjuster(Side.TOP, this),
            new EdgePositionAdjuster(Side.BOTTOM, this),
            new EdgePositionAdjuster(Side.LEFT, this),
            new EdgePositionAdjuster(Side.RIGHT, this)
        ];
    }
    GraphicalNode.prototype.hasLine = function () {
        return this.line >= 0;
    };
    GraphicalNode.prototype.getWeight = function () {
        return this.weight;
    };
    GraphicalNode.prototype.computeSideInfo = function (graph) {
        var _this = this;
        for (var _i = 0, _a = this.adjusters; _i < _a.length; _i++) {
            var adjuster = _a[_i];
            adjuster.reset();
        }
        graph.getOutgoings(this).forEach(function (edge) {
            _this.adjusters[edge.getFromSide()].add(edge);
        });
        graph.getIncomings(this).forEach(function (edge) {
            _this.adjusters[edge.getToSide()].add(edge);
        });
    };
    GraphicalNode.prototype.getAdjustedPoint = function (edge) {
        return this.adjusters[edge.getFromNode() == this ?
            edge.getFromSide() : edge.getToSide()].adjust(edge);
    };
    GraphicalNode.prototype.getPoint = function (side) {
        if (this.isDummy) {
            return new _geometry__WEBPACK_IMPORTED_MODULE_0__["Point"](this.bounds.getCenterX(), this.bounds.getCenterY());
        }
        if (side == Side.LEFT) {
            return new _geometry__WEBPACK_IMPORTED_MODULE_0__["Point"](this.bounds.x, this.bounds.getCenterY());
        }
        if (side == Side.RIGHT) {
            return new _geometry__WEBPACK_IMPORTED_MODULE_0__["Point"](this.bounds.getMaxX(), this.bounds.getCenterY());
        }
        if (side == Side.TOP) {
            return new _geometry__WEBPACK_IMPORTED_MODULE_0__["Point"](this.bounds.getCenterX(), this.bounds.y);
        }
        if (side == Side.BOTTOM) {
            return new _geometry__WEBPACK_IMPORTED_MODULE_0__["Point"](this.bounds.getCenterX(), this.bounds.getMaxY());
        }
        throw new Error();
    };
    GraphicalNode.prototype.setBounds = function (bounds) {
        this.bounds = bounds;
        if (this.node != null) {
            this.node.bounds = bounds;
        }
    };
    return GraphicalNode;
}());
var EdgePart = /** @class */ (function (_super) {
    __extends(EdgePart, _super);
    function EdgePart(fromNode, toNode, originalEdge) {
        var _this = _super.call(this, fromNode, toNode) || this;
        _this.originalEdge = originalEdge;
        return _this;
    }
    EdgePart.prototype.getFromLine = function () {
        return this.getFromNode().line;
    };
    ;
    EdgePart.prototype.getToLine = function () {
        return this.getToNode().line;
    };
    ;
    EdgePart.prototype.getFromSide = function () {
        if (this.getFromNode().line < this.getToNode().line) {
            return Side.BOTTOM;
        }
        return Side.RIGHT;
    };
    ;
    EdgePart.prototype.getToSide = function () {
        if (this.getFromNode().line > this.getToNode().line) {
            return Side.BOTTOM;
        }
        return Side.LEFT;
    };
    return EdgePart;
}(_graph__WEBPACK_IMPORTED_MODULE_1__["Edge"]));
var GraphicalEdge = /** @class */ (function () {
    function GraphicalEdge(edge) {
        this.originalEdge = edge.originalEdge;
        this.firstEdge = edge;
    }
    GraphicalEdge.prototype.getOriginalEdge = function () {
        return this.originalEdge;
    };
    GraphicalEdge.prototype.update = function (fromEdge, toEdge) {
        this.firstEdge = fromEdge;
        this.secondEdge = toEdge;
    };
    GraphicalEdge.prototype.getPoints = function () {
        var points = [];
        var fromNode = this.firstEdge.getFromNode();
        var fromPoint = fromNode.getAdjustedPoint(this.firstEdge);
        points.push(fromPoint);
        var toNode = this.firstEdge.getToNode();
        var toPoint = toNode.getAdjustedPoint(this.firstEdge);
        this.addCornerPoint(fromNode, toNode, fromPoint, toPoint, points);
        if (this.secondEdge != null) {
            fromNode = toNode;
            fromPoint = toPoint;
            toNode = this.secondEdge.getToNode();
            toPoint = toNode.getAdjustedPoint(this.secondEdge);
            this.addCornerPoint(fromNode, toNode, fromPoint, toPoint, points);
        }
        points.push(toPoint);
        return points;
    };
    GraphicalEdge.prototype.addCornerPoint = function (fromNode, toNode, fromPoint, toPoint, points) {
        if (fromNode.line < toNode.line) {
            // go down first then right
            points.push(new _geometry__WEBPACK_IMPORTED_MODULE_0__["Point"](fromPoint.x, toPoint.y));
        }
        else if (fromNode.line > toNode.line) {
            // go right then go up
            points.push(new _geometry__WEBPACK_IMPORTED_MODULE_0__["Point"](toPoint.x, fromPoint.y));
        }
    };
    GraphicalEdge.prototype.contains = function (point) {
        var previous = null;
        for (var _i = 0, _a = this.getPoints(); _i < _a.length; _i++) {
            var p = _a[_i];
            if (previous != null) {
                if (previous.cornerTo(p).expand(5).contains(point)) {
                    return true;
                }
            }
            previous = p;
        }
        return false;
    };
    GraphicalEdge.prototype.reverse = function () {
        throw new Error();
    };
    return GraphicalEdge;
}());
var Rank = /** @class */ (function () {
    function Rank(index) {
        this.index = index;
        this.nodes = [];
    }
    Rank.prototype.addNode = function (node) {
        this.nodes.push(node);
        node.rank = this;
    };
    ;
    Rank.prototype.computeSize = function (sizeProvider) {
        var _this = this;
        this.width = 0;
        this.nodes.forEach(function (node) {
            if (node.node != null) {
                _this.width = Math.max(_this.width, sizeProvider.getWidth(node.node));
            }
        });
    };
    ;
    Rank.prototype.getNodeAt = function (line) {
        for (var i = 0; i < this.nodes.length; ++i) {
            if (this.nodes[i].line == line) {
                return this.nodes[i];
            }
        }
        return null;
    };
    return Rank;
}());
var WEIGHT_COMPARATOR = function (o1, o2) {
    return o1.getWeight() - o2.getWeight();
};
var LINE_COMPARATOR = function (o1, o2) {
    return o1.line - o2.line;
};
var GraphLayout = /** @class */ (function () {
    function GraphLayout(graph) {
        this.graph = graph;
        this.edgeMap = new _utils__WEBPACK_IMPORTED_MODULE_2__["GMap"]();
    }
    GraphLayout.prototype.layout = function () {
        this.createWorkGraph(this.graph);
        this.makeAcyclic();
        this.rankNodes();
        this.makeLines();
        //this.correctEdgeOverlap();
        this.computeSideInfo();
    };
    GraphLayout.prototype.createWorkGraph = function (graph) {
        var _this = this;
        this.workGraph = new _graph__WEBPACK_IMPORTED_MODULE_1__["Graph"]();
        var nodeMap = new _utils__WEBPACK_IMPORTED_MODULE_2__["GMap"]();
        graph.getNodes().forEach(function (node) {
            var graphicalNode = new GraphicalNode(node);
            nodeMap.put(node, graphicalNode);
            _this.workGraph.addNode(graphicalNode);
        });
        this.edgeMap.clear();
        graph.getEdges().forEach(function (e) {
            var edge = new EdgePart(nodeMap.get(e.getFromNode()), nodeMap.get(e.getToNode()), e);
            _this.workGraph.addEdge(edge);
            _this.edgeMap.put(edge, new GraphicalEdge(edge));
        });
    };
    GraphLayout.prototype.makeAcyclic = function () {
        var _this = this;
        var g = new _graph__WEBPACK_IMPORTED_MODULE_1__["Graph"](this.workGraph);
        var edges = [];
        while (g.getNodes().length > 0) {
            var v = null;
            while ((v = g.getSink()) != null) {
                edges.push.apply(edges, g.getIncomings(v));
                g.removeNode(v);
            }
            while ((v = g.getIsolated()) != null) {
                g.removeNode(v);
            }
            while ((v = g.getSource()) != null) {
                edges.push.apply(edges, g.getOutgoings(v));
                g.removeNode(v);
            }
            if (g.getNodes().length != 0) {
                var maxNodes = [];
                var maxValue = 0;
                g.getNodes().forEach(function (n) {
                    var value = Math.max(g.getOutgoings(n).length, g.getIncomings(n).length);
                    if (maxNodes.length == 0 || maxValue <= value) {
                        if (maxValue < value) {
                            maxNodes = [];
                            maxValue = value;
                        }
                        maxNodes.push(n);
                    }
                });
                // use weight to make algorithm deterministic
                maxNodes.sort(WEIGHT_COMPARATOR);
                var maxNode = maxNodes[0];
                edges.push.apply(edges, g.getOutgoings(maxNode));
                g.removeNode(maxNode);
            }
        }
        this.workGraph.getEdges().slice().forEach(function (edge) {
            if (edges.indexOf(edge) < 0) {
                var gEdge = _this.edgeMap.remove(edge);
                var newEdge = gEdge.reverse();
                _this.edgeMap.put(newEdge, gEdge);
                // this.workGraph.replaceEdgeBy(edge, newEdge);
                throw new Error();
            }
        });
    };
    GraphLayout.prototype.rankNodes = function () {
        var _this = this;
        var maxRank = 0;
        var work = this.workGraph.getNodes().slice();
        this.ranks = [];
        var _loop_1 = function () {
            var node = work.shift();
            var rank = 0;
            this_1.workGraph.getIncomings(node).forEach(function (edge) {
                var fromNode = edge.getFromNode();
                if (fromNode.rankNumber < 0) {
                    rank = -1;
                    return true;
                }
                rank = Math.max(rank, fromNode.rankNumber + 1);
            });
            if (rank < 0) {
                work.push(node);
            }
            else {
                node.rankNumber = rank;
                maxRank = Math.max(maxRank, rank);
            }
        };
        var this_1 = this;
        while (work.length > 0) {
            _loop_1();
        }
        for (var i = 0; i <= maxRank; ++i) {
            this.ranks.push(new Rank(i));
        }
        this.workGraph.getNodes().forEach(function (node) {
            _this.ranks[node.rankNumber].addNode(node);
        });
    };
    GraphLayout.prototype.makeLines = function () {
        var _this = this;
        this.workGraph.getNodes().forEach(function (node) {
            node.line = -1;
        });
        var line = 0;
        this.ranks[0].nodes.sort(WEIGHT_COMPARATOR);
        this.ranks[0].nodes.forEach(function (node) {
            line = _this.assignNodeLine(node, line) + 1;
        });
        for (var i = 1; i < this.ranks.length; ++i) {
            this.ranks[i].nodes.sort(LINE_COMPARATOR);
        }
    };
    ;
    GraphLayout.prototype.assignNodeLine = function (node, line) {
        var _this = this;
        node.line = line;
        this.workGraph.getOutgoings(node).slice().forEach(function (edge) {
            var toNode = edge.getToNode();
            if (!toNode.hasLine()) {
                if (_this.hasOtherNodeOnLine(edge, line, false)) {
                    ++line;
                }
                line = _this.assignNodeLine(edge.getToNode(), line);
            }
            else {
                if (_this.hasOtherNodeOnLine(edge, edge.getFromLine(), true)) {
                    ++line;
                    _this.insertDummyNode(edge, line);
                }
            }
        });
        return line;
    };
    ;
    GraphLayout.prototype.hasOtherNodeOnLine = function (edge, line, testSameLine) {
        return this.workGraph.getOutgoings(edge.getFromNode()).find(function (e) {
            return e != edge && e.getToNode().hasLine() && e.getFromSide() == Side.RIGHT
                && (!testSameLine || e.getToLine() == line);
        }) != undefined;
    };
    ;
    GraphLayout.prototype.insertDummyNode = function (edge, line) {
        var newRankNumber = edge.getFromNode().rankNumber + 1;
        var newNode = new GraphicalNode(null, this.workGraph.getNodes().length);
        newNode.line = line;
        newNode.rankNumber = newRankNumber;
        this.workGraph.addNode(newNode);
        this.ranks[newRankNumber].addNode(newNode);
        var fromEdge = new EdgePart(edge.getFromNode(), newNode, edge.originalEdge);
        var toEdge = new EdgePart(newNode, edge.getToNode(), edge.originalEdge);
        this.workGraph.replaceEdgeBy(edge, fromEdge, toEdge);
        var graphicalEdge = this.edgeMap.remove(edge);
        graphicalEdge.update(fromEdge, toEdge);
        this.edgeMap.put(fromEdge, graphicalEdge);
        this.edgeMap.put(toEdge, graphicalEdge);
    };
    ;
    GraphLayout.prototype.computeSideInfo = function () {
        var _this = this;
        this.workGraph.getNodes().forEach(function (node) {
            node.computeSideInfo(_this.workGraph);
        });
    };
    ;
    GraphLayout.prototype.setSizes = function (sizeProvider) {
        var maxLine = 0;
        this.ranks.forEach(function (rank) {
            rank.computeSize(sizeProvider);
            rank.nodes.forEach(function (node) {
                maxLine = Math.max(maxLine, node.line);
            });
        });
        var heights = [];
        var _loop_2 = function (line) {
            var height = 0;
            this_2.ranks.forEach(function (rank) {
                var node = rank.getNodeAt(line);
                if (node != null && node.node != null) {
                    height = Math.max(height, sizeProvider.getHeight(node.node));
                }
            });
            heights.push(height);
        };
        var this_2 = this;
        for (var line = 0; line <= maxLine; ++line) {
            _loop_2(line);
        }
        var y = sizeProvider.getVerticalMargin();
        this.maxWidth = 0;
        this.maxHeight = 0;
        var _loop_3 = function (line) {
            var x = sizeProvider.getHorizontalMargin();
            this_3.ranks.forEach(function (rank) {
                var node = rank.getNodeAt(line);
                if (node != null) {
                    node.setBounds(new _geometry__WEBPACK_IMPORTED_MODULE_0__["Rectangle"](x, y, rank.width, heights[line]));
                }
                x += rank.width + sizeProvider.getHorizontalMargin();
            });
            this_3.maxWidth = Math.max(this_3.maxWidth, x);
            y += heights[line] + sizeProvider.getVerticalMargin();
        };
        var this_3 = this;
        for (var line = 0; line < heights.length; ++line) {
            _loop_3(line);
        }
        this.maxHeight = y;
    };
    GraphLayout.prototype.getEdges = function () {
        return this.edgeMap.values();
    };
    GraphLayout.prototype.getWidth = function () {
        return this.maxWidth;
    };
    GraphLayout.prototype.getHeight = function () {
        return this.maxHeight;
    };
    return GraphLayout;
}());



/***/ }),

/***/ "./src/app/inline-edit/inline-edit.component.css":
/*!*******************************************************!*\
  !*** ./src/app/inline-edit/inline-edit.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n#inlineEditWrapper {\n    display: inline-block;\n}\n  \ndiv.inline-edit {\n    padding: 2px;\n    text-decoration: none;\n    border: 1px solid transparent;\n    text-align: left;\n    width: auto;\n}\n  \ndiv.inline-edit:hover {\n    border: 1px solid #A8B9CE;\n    cursor: pointer;\n}\n  \ninput {\n    display: inline-block;\n    border: 1px solid #A8B9CE;\n    outline: 0px;\n    padding: 2px;\n}"

/***/ }),

/***/ "./src/app/inline-edit/inline-edit.component.html":
/*!********************************************************!*\
  !*** ./src/app/inline-edit/inline-edit.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"inlineEditWrapper\">\n    <div *ngIf=\"editing\">\n      <input #inlineEditControl (blur)=\"onBlur($event)\" (keydown.enter)=\"onKeyDownEnter($event)\" [(ngModel)]=\"value\" type=\"text\" />\n    </div>\n    <div *ngIf=\"!editing\">\n      <div title=\"Click to edit\" (click)=\"edit(value)\" (focus)=\"edit(value);\" tabindex=\"0\" class=\"inline-edit\">{{value}}&nbsp;</div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/inline-edit/inline-edit.component.ts":
/*!******************************************************!*\
  !*** ./src/app/inline-edit/inline-edit.component.ts ***!
  \******************************************************/
/*! exports provided: InlineEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InlineEditComponent", function() { return InlineEditComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// https://github.com/gottsohn/inline-edit-tutorial/blob/master/src/app/components/custom/inline-edit/inline-edit.component.ts
// https://medium.com/@majdasab/implementing-control-value-accessor-in-angular-1b89f2f84ebf
var InlineEditComponent = /** @class */ (function () {
    function InlineEditComponent() {
        this._value = '';
        this.preValue = '';
        this.onChange = function () { };
        this.editing = false;
    }
    InlineEditComponent_1 = InlineEditComponent;
    InlineEditComponent.prototype.ngOnInit = function () {
    };
    Object.defineProperty(InlineEditComponent.prototype, "value", {
        get: function () { return this._value; },
        set: function (v) {
            if (v !== undefined && v !== this._value) {
                this._value = v;
            }
        },
        enumerable: true,
        configurable: true
    });
    InlineEditComponent.prototype.writeValue = function (value) {
        this._value = value;
    };
    InlineEditComponent.prototype.registerOnChange = function (fn) {
        this.onChange = fn;
    };
    InlineEditComponent.prototype.registerOnTouched = function (fn) {
    };
    InlineEditComponent.prototype.onBlur = function ($event) {
        this.editing = false;
        this.onChange(this._value);
    };
    InlineEditComponent.prototype.onKeyDownEnter = function ($event) {
        this.editing = false;
    };
    InlineEditComponent.prototype.edit = function (value) {
        var _this = this;
        this.preValue = value;
        this.editing = true;
        setTimeout(function () { return _this.inlineEditControl.nativeElement.focus(); });
    };
    InlineEditComponent.prototype.cancel = function () {
        this.value = this.preValue;
        this.editing = false;
    };
    var InlineEditComponent_1;
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('inlineEditControl'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], InlineEditComponent.prototype, "inlineEditControl", void 0);
    InlineEditComponent = InlineEditComponent_1 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-inline-edit',
            template: __webpack_require__(/*! ./inline-edit.component.html */ "./src/app/inline-edit/inline-edit.component.html"),
            styles: [__webpack_require__(/*! ./inline-edit.component.css */ "./src/app/inline-edit/inline-edit.component.css")],
            providers: [
                {
                    provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NG_VALUE_ACCESSOR"],
                    useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(function () { return InlineEditComponent_1; }),
                    multi: true
                }
            ]
        }),
        __metadata("design:paramtypes", [])
    ], InlineEditComponent);
    return InlineEditComponent;
}());



/***/ }),

/***/ "./src/app/navbar/navbar.component.css":
/*!*********************************************!*\
  !*** ./src/app/navbar/navbar.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/navbar/navbar.component.html":
/*!**********************************************!*\
  !*** ./src/app/navbar/navbar.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-md navbar-dark bg-dark fixed-top\">\n  <a class=\"navbar-brand\" href=\"#\">GraphIt</a>\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarsExampleDefault\" aria-controls=\"navbarsExampleDefault\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n\n  <div class=\"collapse navbar-collapse\" id=\"navbarsExampleDefault\">\n    <ul class=\"navbar-nav mr-auto\">\n      <li class=\"nav-item dropdown\" ngbDropdown>\n        <a class=\"nav-link dropdown-toggle\" ngbDropdownToggle>File</a>\n        <ul class=\"dropdown-menu\" aria-labelledby=\"dropdownMenuFile\" ngbDropdownMenu>\n          <li class=\"dropdown-item\"><a target=\"_blank\" href=\"#/edit\">New</a></li>\n          <li class=\"dropdown-item\"><a (click)=\"open()\">Open</a></li>\n          <li class=\"dropdown-item\"><a (click)=\"save()\">Save</a></li>\n        </ul>\n      </li>\n      <li class=\"nav-item\"><a class=\"nav-link\" (click)=\"about()\">About</a></li>\n    </ul>\n    <form class=\"form-inline my-2 my-lg-0\">\n      <button class=\"btn btn-outline-success my-2 my-sm-0\" type=\"button\" (click)=\"signIn()\">Sign-In</button>\n    </form>\n  </div>\n</nav>"

/***/ }),

/***/ "./src/app/navbar/navbar.component.ts":
/*!********************************************!*\
  !*** ./src/app/navbar/navbar.component.ts ***!
  \********************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _about_modal_about_modal_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../about-modal/about-modal.component */ "./src/app/about-modal/about-modal.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var NavbarComponent = /** @class */ (function () {
    function NavbarComponent(modalService) {
        this.modalService = modalService;
    }
    NavbarComponent.prototype.ngOnInit = function () {
    };
    NavbarComponent.prototype.open = function () {
        console.log("Open");
    };
    NavbarComponent.prototype.save = function () {
        console.log("Save");
    };
    NavbarComponent.prototype.about = function () {
        this.modalService.open(_about_modal_about_modal_component__WEBPACK_IMPORTED_MODULE_2__["AboutModalComponent"]);
    };
    NavbarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__(/*! ./navbar.component.html */ "./src/app/navbar/navbar.component.html"),
            styles: [__webpack_require__(/*! ./navbar.component.css */ "./src/app/navbar/navbar.component.css")]
        }),
        __metadata("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbModal"]])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/app/save-state-formatter.pipe.ts":
/*!**********************************************!*\
  !*** ./src/app/save-state-formatter.pipe.ts ***!
  \**********************************************/
/*! exports provided: SaveStateFormatterPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SaveStateFormatterPipe", function() { return SaveStateFormatterPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _editor_editor_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./editor/editor.component */ "./src/app/editor/editor.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var SaveStateFormatterPipe = /** @class */ (function () {
    function SaveStateFormatterPipe() {
    }
    SaveStateFormatterPipe.prototype.transform = function (value, args) {
        if (value == _editor_editor_component__WEBPACK_IMPORTED_MODULE_1__["EditorState"].DIRTY) {
            return 'You have unsaved changes';
        }
        else if (value == _editor_editor_component__WEBPACK_IMPORTED_MODULE_1__["EditorState"].SAVE) {
            return 'Saving...';
        }
        else if (value == _editor_editor_component__WEBPACK_IMPORTED_MODULE_1__["EditorState"].LOAD) {
            return 'Loading...';
        }
        else if (value == _editor_editor_component__WEBPACK_IMPORTED_MODULE_1__["EditorState"].READONLY) {
            return "Read only";
        }
        else {
            return 'All changes saved';
        }
    };
    SaveStateFormatterPipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'saveStateFormatter'
        })
    ], SaveStateFormatterPipe);
    return SaveStateFormatterPipe;
}());



/***/ }),

/***/ "./src/app/store.service.ts":
/*!**********************************!*\
  !*** ./src/app/store.service.ts ***!
  \**********************************/
/*! exports provided: StoreService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StoreService", function() { return StoreService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var StoreService = /** @class */ (function () {
    function StoreService(http) {
        this.http = http;
    }
    StoreService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"]])
    ], StoreService);
    return StoreService;
}());



/***/ }),

/***/ "./src/app/utils.ts":
/*!**************************!*\
  !*** ./src/app/utils.ts ***!
  \**************************/
/*! exports provided: GMap, remove */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GMap", function() { return GMap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "remove", function() { return remove; });
var GMap = /** @class */ (function () {
    function GMap() {
        this.clear();
    }
    GMap.prototype.put = function (key, value) {
        var index = this._keys.indexOf(key);
        if (index >= 0) {
            this._values[index] = value;
        }
        else {
            this._keys.push(key);
            this._values.push(value);
        }
    };
    GMap.prototype.keys = function () {
        return this._keys;
    };
    GMap.prototype.values = function () {
        return this._values;
    };
    GMap.prototype.get = function (key) {
        var i = this._keys.indexOf(key);
        if (i < 0) {
            return null;
        }
        return this._values[i];
    };
    GMap.prototype.remove = function (key) {
        var i = this._keys.indexOf(key);
        if (i < 0) {
            return null;
        }
        var value = this._values[i];
        this._keys.splice(i, 1);
        this._values.splice(i, 1);
        return value;
    };
    GMap.prototype.clear = function () {
        this._keys = [];
        this._values = [];
    };
    return GMap;
}());

function remove(list, value) {
    list.splice(list.indexOf(value), 1);
}


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/travis/build/madbrain/graphit/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map