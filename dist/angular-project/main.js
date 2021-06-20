(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "+l3c":
/*!*************************************************************!*\
  !*** ./src/app/game/stand-button/stand-button.component.ts ***!
  \*************************************************************/
/*! exports provided: StandButtonComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StandButtonComponent", function() { return StandButtonComponent; });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/animations */ "R0Ic");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");


class StandButtonComponent {
    constructor() {
        this.currentState = 'default';
    }
    rotate(thisState) {
        this.currentState = thisState;
    }
    ngOnInit() { }
}
StandButtonComponent.ɵfac = function StandButtonComponent_Factory(t) { return new (t || StandButtonComponent)(); };
StandButtonComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: StandButtonComponent, selectors: [["app-stand-button"]], decls: 2, vars: 1, consts: [["id", "standBtn", 3, "mouseover", "mouseout"]], template: function StandButtonComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("mouseover", function StandButtonComponent_Template_button_mouseover_0_listener() { return ctx.rotate("rotated"); })("mouseout", function StandButtonComponent_Template_button_mouseout_0_listener() { return ctx.rotate("default"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Stand");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("@rotatedState", ctx.currentState);
    } }, styles: ["#standBtn[_ngcontent-%COMP%] {\n  box-shadow: 2px 2px 8px #333;\n  margin: 4px;\n  border: 4px dashed #FFFBFF;\n  background-color: #2B59C3;\n  color: #FFFBFF;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxzdGFuZC1idXR0b24uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBR0E7RUFDRSw0QkFBQTtFQUNBLFdBQUE7RUFDQSwwQkFBQTtFQUNBLHlCQVBLO0VBUUwsY0FQSztBQUtQIiwiZmlsZSI6InN0YW5kLWJ1dHRvbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiRibHVlOiAjMkI1OUMzO1xyXG4kc25vdzogI0ZGRkJGRjtcclxuXHJcbiNzdGFuZEJ0bntcclxuICBib3gtc2hhZG93OiAycHggMnB4IDhweCAjMzMzO1xyXG4gIG1hcmdpbjogNHB4O1xyXG4gIGJvcmRlcjogNHB4IGRhc2hlZCAkc25vdztcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkYmx1ZTtcclxuICBjb2xvcjogJHNub3c7XHJcbn1cclxuIl19 */"], data: { animation: [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('rotatedState', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('default', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'rotate(0)' })),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('rotated', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'rotate(60deg)' })),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('rotated => default', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('2000ms ease-out')),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('default => rotated', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('2000ms ease-out')),
            ]),
        ] } });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\frontend\blackjack\angular-project-2021\src\main.ts */"zUnb");


/***/ }),

/***/ "38kq":
/*!******************************!*\
  !*** ./src/app/animation.ts ***!
  \******************************/
/*! exports provided: moveLeft */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "moveLeft", function() { return moveLeft; });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/animations */ "R0Ic");

const moveLeft = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('routeAnimations', [
    // route 'enter' transition
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(':enter', [
        // css styles at start of transition
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 0 }),
        // animation and styles at end of transition
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('3s', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 1 })),
    ]),
]);


/***/ }),

/***/ "4K+e":
/*!******************************************!*\
  !*** ./src/app/game/new-deck.service.ts ***!
  \******************************************/
/*! exports provided: NewDeckService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewDeckService", function() { return NewDeckService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class NewDeckService {
    constructor() {
        this.cards = [];
    }
    newDeck() {
        for (let i = 0; i < 4; i++) {
            this.cards[i] = [];
            for (let j = 0; j < 13; j++) {
                this.cards[i][j] = { id: j + 1, value: j + 1, colour: i, copiesLeft: 3, isAce: false };
            }
            this.cards[i][0].isAce = true;
            for (let j = 10; j < 13; j++) {
                this.cards[i][j].value = 10;
            }
        }
        console.log(this.cards);
        return this.cards;
    }
    drawACard(cards) {
        let card;
        do {
            console.log('this is a feature, not a bug');
            const rndClr = this.random(4);
            const rndId = this.random(13);
            card = this.cards[rndClr][rndId];
            card.copiesLeft--;
        } while (card.copiesLeft <= 0);
        return card;
    }
    random(max) {
        return Math.floor(Math.random() * max);
    }
}
NewDeckService.ɵfac = function NewDeckService_Factory(t) { return new (t || NewDeckService)(); };
NewDeckService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: NewDeckService, factory: NewDeckService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "9vUh":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _start_button_start_button_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./start-button/start-button.component */ "LGu4");


class HomeComponent {
    constructor() { }
    ngOnInit() { }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(); };
HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["app-home"]], decls: 7, vars: 0, consts: [["id", "start"], ["id", "game"], ["id", "croupier"], ["id", "midSection"], ["id", "player"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "nav");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "main", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "section", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "section", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "app-start-button");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "section", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_start_button_start_button_component__WEBPACK_IMPORTED_MODULE_1__["StartButtonComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJob21lLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ "AytR":
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
const environment = {
    production: false,
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

/***/ "LAIK":
/*!******************************************************!*\
  !*** ./src/app/home-button/home-button.component.ts ***!
  \******************************************************/
/*! exports provided: HomeButtonComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeButtonComponent", function() { return HomeButtonComponent; });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/animations */ "R0Ic");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");



class HomeButtonComponent {
    constructor() {
        this.currentState = 'default';
    }
    rotate(thisState) {
        this.currentState = thisState;
    }
    ngOnInit() { }
}
HomeButtonComponent.ɵfac = function HomeButtonComponent_Factory(t) { return new (t || HomeButtonComponent)(); };
HomeButtonComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: HomeButtonComponent, selectors: [["app-home-button"]], decls: 2, vars: 1, consts: [["id", "homeBtn", "routerLink", "/", 1, "home", 3, "mouseover", "mouseout"]], template: function HomeButtonComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("mouseover", function HomeButtonComponent_Template_button_mouseover_0_listener() { return ctx.rotate("rotated"); })("mouseout", function HomeButtonComponent_Template_button_mouseout_0_listener() { return ctx.rotate("default"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("@rotatedState", ctx.currentState);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLink"]], styles: [".home[_ngcontent-%COMP%] {\n  background-color: #333;\n  color: #bfae48;\n  border-color: #bfae48;\n  position: fixed;\n  bottom: 20px;\n  right: 20px;\n  background-image: url(\"data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' rx='100' ry='100' stroke='%23BFAE48FF' stroke-width='25' stroke-dasharray='44' stroke-dashoffset='62' stroke-linecap='square'/%3e%3c/svg%3e\");\n  border-radius: 100px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXGhvbWUtYnV0dG9uLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0Usc0JBQUE7RUFDQSxjQUpLO0VBS0wscUJBTEs7RUFNTCxlQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxxVEFBQTtFQUNGLG9CQUFBO0FBREEiLCJmaWxlIjoiaG9tZS1idXR0b24uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIkZ29sZDogI2JmYWU0ODtcclxuXHJcbi5ob21lIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzMzO1xyXG4gIGNvbG9yOiAkZ29sZDtcclxuICBib3JkZXItY29sb3I6ICRnb2xkO1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICBib3R0b206IDIwcHg7XHJcbiAgcmlnaHQ6IDIwcHg7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiZGF0YTppbWFnZS9zdmcreG1sLCUzY3N2ZyB3aWR0aD0nMTAwJTI1JyBoZWlnaHQ9JzEwMCUyNScgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyUzZSUzY3JlY3Qgd2lkdGg9JzEwMCUyNScgaGVpZ2h0PScxMDAlMjUnIGZpbGw9J25vbmUnIHJ4PScxMDAnIHJ5PScxMDAnIHN0cm9rZT0nJTIzQkZBRTQ4RkYnIHN0cm9rZS13aWR0aD0nMjUnIHN0cm9rZS1kYXNoYXJyYXk9JzQ0JyBzdHJva2UtZGFzaG9mZnNldD0nNjInIHN0cm9rZS1saW5lY2FwPSdzcXVhcmUnLyUzZSUzYy9zdmclM2VcIik7XHJcbmJvcmRlci1yYWRpdXM6IDEwMHB4O1xyXG59XHJcbiJdfQ== */"], data: { animation: [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('rotatedState', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('default', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'rotate(0)' })),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('rotated', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'rotate(60deg)' })),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('rotated => default', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('2000ms ease-out')),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('default => rotated', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('2000ms ease-out')),
            ]),
        ] } });


/***/ }),

/***/ "LGu4":
/*!*************************************************************!*\
  !*** ./src/app/home/start-button/start-button.component.ts ***!
  \*************************************************************/
/*! exports provided: StartButtonComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StartButtonComponent", function() { return StartButtonComponent; });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/animations */ "R0Ic");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");



class StartButtonComponent {
    constructor() {
        this.currentState = 'default';
    }
    rotate(thisState) {
        this.currentState = thisState;
    }
    ngOnInit() { }
}
StartButtonComponent.ɵfac = function StartButtonComponent_Factory(t) { return new (t || StartButtonComponent)(); };
StartButtonComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: StartButtonComponent, selectors: [["app-start-button"]], decls: 2, vars: 1, consts: [["id", "startBtn", "routerLink", "game", 3, "mouseover", "mouseout"]], template: function StartButtonComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("mouseover", function StartButtonComponent_Template_button_mouseover_0_listener() { return ctx.rotate("rotated"); })("mouseout", function StartButtonComponent_Template_button_mouseout_0_listener() { return ctx.rotate("default"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Start game");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("@rotatedState", ctx.currentState);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLink"]], styles: ["button[_ngcontent-%COMP%] {\n  align-self: center;\n  width: 33vw;\n  height: 33vw;\n  font-size: xxx-large;\n  margin-top: 100px;\n  border: 16px dashed #000;\n  min-width: 175px;\n  min-height: 175px;\n}\n\n@media (max-width: 640px) {\n  button[_ngcontent-%COMP%] {\n    font-size: xx-large;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxzdGFydC1idXR0b24uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esb0JBQUE7RUFDQSxpQkFBQTtFQUNBLHdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtBQUNGOztBQUVBO0VBQ0E7SUFDRSxtQkFBQTtFQUNBO0FBQ0YiLCJmaWxlIjoic3RhcnQtYnV0dG9uLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYnV0dG9ue1xyXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcclxuICB3aWR0aDogMzN2dztcclxuICBoZWlnaHQ6IDMzdnc7XHJcbiAgZm9udC1zaXplOiB4eHgtbGFyZ2U7XHJcbiAgbWFyZ2luLXRvcDogMTAwcHg7XHJcbiAgYm9yZGVyOiAxNnB4IGRhc2hlZCAjMDAwO1xyXG4gIG1pbi13aWR0aDogMTc1cHg7XHJcbiAgbWluLWhlaWdodDogMTc1cHg7XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA2NDBweCkge1xyXG5idXR0b257XHJcbiAgZm9udC1zaXplOiB4eC1sYXJnZTt9XHJcbn1cclxuIl19 */"], data: { animation: [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('rotatedState', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('default', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'rotate(0)' })),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('rotated', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'rotate(60deg)' })),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('rotated => default', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('2000ms ease-out')),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('default => rotated', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('2000ms ease-out')),
            ]),
        ] } });


/***/ }),

/***/ "Sq7d":
/*!****************************************************!*\
  !*** ./src/app/hit-button/hit-button.component.ts ***!
  \****************************************************/
/*! exports provided: HitButtonComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HitButtonComponent", function() { return HitButtonComponent; });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/animations */ "R0Ic");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");


class HitButtonComponent {
    constructor() {
        this.currentState = 'default';
    }
    rotate(thisState) {
        this.currentState = thisState;
    }
    ngOnInit() { }
}
HitButtonComponent.ɵfac = function HitButtonComponent_Factory(t) { return new (t || HitButtonComponent)(); };
HitButtonComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: HitButtonComponent, selectors: [["app-hit-button"]], decls: 2, vars: 1, consts: [["id", "hitBtn", 3, "mouseover", "mouseout"]], template: function HitButtonComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("mouseover", function HitButtonComponent_Template_button_mouseover_0_listener() { return ctx.rotate("rotated"); })("mouseout", function HitButtonComponent_Template_button_mouseout_0_listener() { return ctx.rotate("default"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Hit");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("@rotatedState", ctx.currentState);
    } }, styles: ["#hitBtn[_ngcontent-%COMP%] {\n  box-shadow: 2px 2px 8px #333;\n  margin: 4px;\n  border: 4px dashed #bfae48;\n  background-color: #561f37;\n  color: #bfae48;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXGhpdC1idXR0b24uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBR0E7RUFDRSw0QkFBQTtFQUNBLFdBQUE7RUFDQSwwQkFBQTtFQUNBLHlCQVBPO0VBUVAsY0FQSztBQUtQIiwiZmlsZSI6ImhpdC1idXR0b24uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIkbWFyb29uOiAjNTYxZjM3O1xyXG4kZ29sZDogI2JmYWU0ODtcclxuXHJcbiNoaXRCdG57XHJcbiAgYm94LXNoYWRvdzogMnB4IDJweCA4cHggIzMzMztcclxuICBtYXJnaW46IDRweDtcclxuICBib3JkZXI6IDRweCBkYXNoZWQgJGdvbGQ7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogJG1hcm9vbjtcclxuICBjb2xvcjogJGdvbGQ7XHJcbn1cclxuIl19 */"], data: { animation: [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('rotatedState', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('default', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'rotate(0)' })),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('rotated', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'rotate(60deg)' })),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('rotated => default', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('2000ms ease-out')),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('default => rotated', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('2000ms ease-out')),
            ]),
        ] } });


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _animation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./animation */ "38kq");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _home_button_home_button_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home-button/home-button.component */ "LAIK");




class AppComponent {
    constructor() {
        this.title = 'Black Jack';
    }
    ngOnInit() { }
    animateRoute(outlet) {
        return outlet && outlet.activatedRouteData && outlet.activatedRouteData.animation;
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 8, vars: 2, consts: [[2, "font-size", "xxx-large"], ["outlet", "outlet"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "header");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "h1", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "router-outlet", null, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "app-home-button");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("@routeAnimations", ctx.animateRoute(_r0));
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"], _home_button_home_button_component__WEBPACK_IMPORTED_MODULE_3__["HomeButtonComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MifQ== */"], data: { animation: [_animation__WEBPACK_IMPORTED_MODULE_0__["moveLeft"]] } });


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home/home.component */ "9vUh");
/* harmony import */ var _game_game_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./game/game.component */ "jBAD");
/* harmony import */ var _game_card_card_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./game/card/card.component */ "tj0Q");
/* harmony import */ var _home_button_home_button_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./home-button/home-button.component */ "LAIK");
/* harmony import */ var _hit_button_hit_button_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./hit-button/hit-button.component */ "Sq7d");
/* harmony import */ var _game_stand_button_stand_button_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./game/stand-button/stand-button.component */ "+l3c");
/* harmony import */ var _home_start_button_start_button_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./home/start-button/start-button.component */ "LGu4");
/* harmony import */ var _dialog_dialog_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./dialog/dialog.component */ "ZYp2");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _bye_bye_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./bye/bye.component */ "jnk9");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/core */ "fXoL");
















class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdefineInjector"]({ providers: [], imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_1__["AppRoutingModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_13__["MatDialogModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"]]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
        _home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"],
        _game_game_component__WEBPACK_IMPORTED_MODULE_6__["GameComponent"],
        _game_card_card_component__WEBPACK_IMPORTED_MODULE_7__["CardComponent"],
        _home_button_home_button_component__WEBPACK_IMPORTED_MODULE_8__["HomeButtonComponent"],
        _hit_button_hit_button_component__WEBPACK_IMPORTED_MODULE_9__["HitButtonComponent"],
        _game_stand_button_stand_button_component__WEBPACK_IMPORTED_MODULE_10__["StandButtonComponent"],
        _home_start_button_start_button_component__WEBPACK_IMPORTED_MODULE_11__["StartButtonComponent"],
        _bye_bye_component__WEBPACK_IMPORTED_MODULE_14__["ByeComponent"],
        _dialog_dialog_component__WEBPACK_IMPORTED_MODULE_12__["DialogComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_1__["AppRoutingModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_13__["MatDialogModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"]] }); })();


/***/ }),

/***/ "ZYp2":
/*!********************************************!*\
  !*** ./src/app/dialog/dialog.component.ts ***!
  \********************************************/
/*! exports provided: DialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DialogComponent", function() { return DialogComponent; });
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");




class DialogComponent {
    // message: string;
    constructor(message, dialogRef) {
        this.message = message;
        this.dialogRef = dialogRef;
        if (message) {
            this.message = message;
        }
        this.dialogRef.updateSize('300vw', '300vw');
    }
    close() {
        this.dialogRef.close();
    }
}
DialogComponent.ɵfac = function DialogComponent_Factory(t) { return new (t || DialogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MAT_DIALOG_DATA"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MatDialogRef"])); };
DialogComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: DialogComponent, selectors: [["app-dialog"]], decls: 9, vars: 1, consts: [[1, "score"], ["routerLink", "bye", 1, "dialButton", 3, "click"], ["routerLink", "game", 1, "dialButton", 3, "click"]], template: function DialogComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Do you want to play again?");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function DialogComponent_Template_button_click_5_listener() { return ctx.close(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "No");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function DialogComponent_Template_button_click_7_listener() { return ctx.close(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "Yes");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.message);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLink"]], styles: [".score {\n  background: #333;\n  color: #bfae48;\n  border: 5px #bfae48 groove;\n  margin: 20px auto;\n  padding: 5px;\n}\n\n.dialButton {\n  font-size: larger;\n  color: #561f37;\n  margin: 16px;\n}\n\n.dialButton:hover {\n  color: #bfae48;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXGRpYWxvZy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNFLGdCQUFBO0VBQ0EsY0FKSztFQUtMLDBCQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0FBREY7O0FBR0E7RUFDRSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxZQUFBO0FBQUY7O0FBQ0E7RUFDRSxjQUFBO0FBQ0YiLCJmaWxlIjoiZGlhbG9nLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiJGdvbGQ6ICNiZmFlNDg7XHJcblxyXG4uc2NvcmV7XHJcbiAgYmFja2dyb3VuZDogIzMzMztcclxuICBjb2xvcjogJGdvbGQ7XHJcbiAgYm9yZGVyOiA1cHggJGdvbGQgZ3Jvb3ZlO1xyXG4gIG1hcmdpbjogMjBweCBhdXRvO1xyXG4gIHBhZGRpbmc6IDVweDtcclxufVxyXG4uZGlhbEJ1dHRvbntcclxuICBmb250LXNpemU6IGxhcmdlcjtcclxuICBjb2xvcjogIzU2MWYzNztcclxuICBtYXJnaW46IDE2cHg7XHJcbiY6aG92ZXJ7XHJcbiAgY29sb3I6ICNiZmFlNDg7XHJcbn0gfVxyXG5cclxuIl19 */"], encapsulation: 2 });


/***/ }),

/***/ "jBAD":
/*!****************************************!*\
  !*** ./src/app/game/game.component.ts ***!
  \****************************************/
/*! exports provided: GameComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GameComponent", function() { return GameComponent; });
/* harmony import */ var _new_deck_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./new-deck.service */ "4K+e");
/* harmony import */ var _dialog_dialog_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../dialog/dialog.component */ "ZYp2");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _card_card_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./card/card.component */ "tj0Q");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _hit_button_hit_button_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../hit-button/hit-button.component */ "Sq7d");
/* harmony import */ var _stand_button_stand_button_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./stand-button/stand-button.component */ "+l3c");











function GameComponent_app_card_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "app-card", 3);
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("card", ctx_r0.dealersHand[1]);
} }
function GameComponent_ng_template_8_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "div", 8);
} }
function GameComponent_ng_template_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](0, GameComponent_ng_template_8_div_0_Template, 1, 0, "div", 7);
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r1.dealersHand < 2);
} }
function GameComponent_app_card_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "app-card", 3);
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("card", ctx_r2.dealersHand[2]);
} }
function GameComponent_app_card_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "app-card", 3);
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("card", ctx_r3.dealersHand[3]);
} }
function GameComponent_app_card_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "app-card", 3);
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("card", ctx_r4.dealersHand[4]);
} }
function GameComponent_app_card_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "app-card", 3);
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("card", ctx_r5.dealersHand[5]);
} }
function GameComponent_app_card_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "app-card", 3);
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("card", ctx_r6.playersHand[2]);
} }
function GameComponent_app_card_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "app-card", 3);
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("card", ctx_r7.playersHand[3]);
} }
function GameComponent_app_card_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "app-card", 3);
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("card", ctx_r8.playersHand[4]);
} }
class GameComponent {
    constructor(deck, dialog, router) {
        this.deck = deck;
        this.dialog = dialog;
        this.router = router;
        this.dealersHand = [];
        this.playersHand = [];
        this.naviSub = this.router.events.subscribe((e) => {
            if (e instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationEnd"]) {
                this.initialiseInvites();
            }
        });
    }
    ngOnInit() {
        const cards = this.deck.newDeck();
        this.dealersHand[0] = this.deck.drawACard(cards);
        this.dealerCounter = 1;
        this.playersHand[0] = this.deck.drawACard(cards);
        this.playersHand[1] = this.deck.drawACard(cards);
        this.playerCounter = 2;
        if (this.sum(this.playersHand) === 21) {
            this.dealersHand[1] = this.deck.drawACard(cards);
            this.sum(this.dealersHand) === 21 ? console.log(this.openDialog('Draw!')) : console.log(this.openDialog('Blackjack! You win!'));
        }
    }
    sum(array) {
        let sum = 0;
        let aceCounter = 0;
        // tslint:disable-next-line:prefer-for-of
        for (let i = 0; i < array.length; i++) {
            sum += array[i].value;
            if (array[i].isAce && sum < 12 && aceCounter === 0) {
                aceCounter++;
                sum += 10;
            }
        }
        if (aceCounter === 1 && sum > 21) {
            sum -= 10;
        }
        return sum;
    }
    playerHits() {
        this.playersHand[this.playerCounter] = this.deck.drawACard(this.cards);
        console.log(this.playerCounter++);
        const total = this.sum(this.playersHand);
        console.log(total);
        if (this.playersHand.length === 5 && total < 22) {
            this.openDialog('Five Card Charlie! You win!');
        }
        if (total > 21) {
            console.log('You have just lost the game');
            this.openDialog('Bust! You lose!');
        }
    }
    playerStands() {
        while (this.sum(this.dealersHand) < 17) {
            this.dealersHand[this.dealerCounter] = this.deck.drawACard(this.cards);
            this.dealerCounter++;
        }
        if (this.sum(this.dealersHand) > 21) {
            console.log('Winner, winner, chicken dinner');
            return this.openDialog('Dealer busts! You win!');
        }
        else if (this.sum(this.dealersHand) < this.sum(this.playersHand)) {
            console.log('You win!');
            return this.openDialog('Your hand is higher - you win!');
        }
        else {
            console.log('You lose!');
            return this.openDialog(`Dealer's hand is higher - you lose!`);
        }
    }
    openDialog(message) {
        this.dialog.open(_dialog_dialog_component__WEBPACK_IMPORTED_MODULE_1__["DialogComponent"], { data: message, disableClose: true, position: { left: '20', bottom: '20' } });
    }
    initialiseInvites() {
        this.dealersHand = [];
        this.playersHand = [];
        this.playerCounter = 0;
        this.dealerCounter = 0;
        this.ngOnInit();
    }
    ngOnDestroy() {
        if (this.naviSub) {
            this.naviSub.unsubscribe();
        }
    }
}
GameComponent.ɵfac = function GameComponent_Factory(t) { return new (t || GameComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_new_deck_service__WEBPACK_IMPORTED_MODULE_0__["NewDeckService"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
GameComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: GameComponent, selectors: [["app-game"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵProvidersFeature"]([_new_deck_service__WEBPACK_IMPORTED_MODULE_0__["NewDeckService"]])], decls: 25, vars: 13, consts: [["id", "game"], ["id", "croupier"], [1, "score"], [3, "card"], [3, "card", 4, "ngIf"], ["id", "player"], [3, "click"], ["class", "reverse", 4, "ngIf"], [1, "reverse"]], template: function GameComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "main", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "section", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "Dealer's hand: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](6, "app-card", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](7, GameComponent_app_card_7_Template, 1, 1, "app-card", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](8, GameComponent_ng_template_8_Template, 1, 1, "ng-template");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](9, GameComponent_app_card_9_Template, 1, 1, "app-card", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](10, GameComponent_app_card_10_Template, 1, 1, "app-card", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](11, GameComponent_app_card_11_Template, 1, 1, "app-card", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](12, GameComponent_app_card_12_Template, 1, 1, "app-card", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "section", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](15, "Player's hand: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](18, "app-card", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](19, "app-card", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](20, GameComponent_app_card_20_Template, 1, 1, "app-card", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](21, GameComponent_app_card_21_Template, 1, 1, "app-card", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](22, GameComponent_app_card_22_Template, 1, 1, "app-card", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](23, "app-hit-button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function GameComponent_Template_app_hit_button_click_23_listener() { return ctx.playerHits(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](24, "app-stand-button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function GameComponent_Template_app_stand_button_click_24_listener() { return ctx.playerStands(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx.sum(ctx.dealersHand));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("card", ctx.dealersHand[0]);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.dealersHand.length > 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.dealersHand.length > 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.dealersHand.length > 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.dealersHand.length > 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.dealersHand.length > 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx.sum(ctx.playersHand));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("card", ctx.playersHand[0]);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("card", ctx.playersHand[1]);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.playersHand.length >= 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.playersHand.length >= 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.playersHand.length >= 5);
    } }, directives: [_card_card_component__WEBPACK_IMPORTED_MODULE_5__["CardComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _hit_button_hit_button_component__WEBPACK_IMPORTED_MODULE_7__["HitButtonComponent"], _stand_button_stand_button_component__WEBPACK_IMPORTED_MODULE_8__["StandButtonComponent"]], styles: ["section[_ngcontent-%COMP%] {\n  margin: 16px;\n}\n\nstrong[_ngcontent-%COMP%] {\n  color: #FFFBFF;\n  font-size: larger;\n}\n\n.score[_ngcontent-%COMP%] {\n  font-size: x-large;\n  background: #333;\n  color: #bfae48;\n  border: 5px #bfae48 groove;\n  margin: 20px auto;\n  padding: 5px;\n}\n\n#standBtn[_ngcontent-%COMP%] {\n  position: fixed;\n  bottom: 20px;\n  right: 40px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXGdhbWUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBSUE7RUFDRSxZQUFBO0FBSEY7O0FBTUE7RUFDSSxjQVJHO0VBU0gsaUJBQUE7QUFISjs7QUFNQTtFQUNFLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQWRLO0VBZUwsMEJBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7QUFIRjs7QUFLQTtFQUNFLGVBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtBQUZGIiwiZmlsZSI6ImdhbWUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIkZ29sZDogI2JmYWU0ODtcclxuJHNub3c6ICNGRkZCRkY7XHJcbiRnb2xkOiAjYmZhZTQ4O1xyXG5cclxuc2VjdGlvbntcclxuICBtYXJnaW46IDE2cHg7XHJcbn1cclxuXHJcbnN0cm9uZ3tcclxuICAgIGNvbG9yOiAkc25vdztcclxuICAgIGZvbnQtc2l6ZTogbGFyZ2VyO1xyXG4gIH1cclxuXHJcbi5zY29yZXtcclxuICBmb250LXNpemU6IHgtbGFyZ2U7XHJcbiAgYmFja2dyb3VuZDogIzMzMztcclxuICBjb2xvcjogJGdvbGQ7XHJcbiAgYm9yZGVyOiA1cHggJGdvbGQgZ3Jvb3ZlO1xyXG4gIG1hcmdpbjogMjBweCBhdXRvO1xyXG4gIHBhZGRpbmc6IDVweDtcclxufVxyXG4jc3RhbmRCdG57XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIGJvdHRvbTogMjBweDtcclxuICByaWdodDogNDBweDtcclxufVxyXG4iXX0= */"] });


/***/ }),

/***/ "jnk9":
/*!**************************************!*\
  !*** ./src/app/bye/bye.component.ts ***!
  \**************************************/
/*! exports provided: ByeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ByeComponent", function() { return ByeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class ByeComponent {
    constructor() { }
    ngOnInit() { }
}
ByeComponent.ɵfac = function ByeComponent_Factory(t) { return new (t || ByeComponent)(); };
ByeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ByeComponent, selectors: [["app-bye"]], decls: 2, vars: 0, template: function ByeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Thanks for playing!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["h2[_ngcontent-%COMP%] {\n  text-shadow: 2px 2px 8px #561f37;\n  margin: auto;\n  font-size: xxx-large;\n  color: #bfae48;\n  position: center;\n  align-content: center;\n  padding-top: 200px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXGJ5ZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdDQUFBO0VBQ0EsWUFBQTtFQUNBLG9CQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0VBQ0EscUJBQUE7RUFDQSxrQkFBQTtBQUNGIiwiZmlsZSI6ImJ5ZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImgye1xyXG4gIHRleHQtc2hhZG93OiAycHggMnB4IDhweCAjNTYxZjM3O1xyXG4gIG1hcmdpbjogYXV0bztcclxuICBmb250LXNpemU6IHh4eC1sYXJnZTtcclxuICBjb2xvcjogI2JmYWU0ODtcclxuICBwb3NpdGlvbjogY2VudGVyO1xyXG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcclxuICBwYWRkaW5nLXRvcDogMjAwcHg7XHJcbn1cclxuIl19 */"] });


/***/ }),

/***/ "tj0Q":
/*!*********************************************!*\
  !*** ./src/app/game/card/card.component.ts ***!
  \*********************************************/
/*! exports provided: CardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardComponent", function() { return CardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");


function CardComponent_p_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.card.value);
} }
function CardComponent_p_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "A");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CardComponent_p_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "J");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CardComponent_p_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Q");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CardComponent_p_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "K");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CardComponent_div_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\u2660");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CardComponent_div_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\u2663");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CardComponent_div_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\u2665");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CardComponent_div_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\u2666");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class CardComponent {
    constructor() { }
    ngOnInit() { }
}
CardComponent.ɵfac = function CardComponent_Factory(t) { return new (t || CardComponent)(); };
CardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CardComponent, selectors: [["app-card"]], inputs: { card: "card", cards: "cards" }, decls: 12, vars: 10, consts: [[1, "card"], [3, "ngSwitch"], ["style", "text-align: left;", 4, "ngSwitchDefault"], ["style", "text-align: left;", 4, "ngSwitchCase"], [2, "font-size", "xxx-large", "text-align", "center", "margin", "auto", 3, "ngSwitch"], [4, "ngSwitchCase"], [2, "text-align", "left"], [2, "text-align", "center", "color", "black"], [2, "color", "#561f37"]], template: function CardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](1, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, CardComponent_p_2_Template, 2, 1, "p", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, CardComponent_p_3_Template, 2, 0, "p", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, CardComponent_p_4_Template, 2, 0, "p", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, CardComponent_p_5_Template, 2, 0, "p", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, CardComponent_p_6_Template, 2, 0, "p", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, CardComponent_div_8_Template, 3, 0, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, CardComponent_div_9_Template, 3, 0, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, CardComponent_div_10_Template, 3, 0, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, CardComponent_div_11_Template, 3, 0, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitch", ctx.card.id);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitch", ctx.card.colour);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", 2);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgSwitch"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgSwitchDefault"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgSwitchCase"]], styles: [".card[_ngcontent-%COMP%] {\n  font-size: xx-large;\n  display: inline-block;\n  background: #FFFBFF;\n  border: 2px #561f37 solid;\n  border-radius: 10%;\n  box-shadow: 2px 2px 8px #333;\n  padding: 10px;\n  margin: auto;\n}\n.card[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  top: 20%;\n  display: block;\n  text-align: center;\n  position: relative;\n  padding: 5px;\n}\n@media (min-width: 800px) {\n  .card[_ngcontent-%COMP%] {\n    height: 14vw;\n    width: 9vw;\n  }\n  .card[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n    font-size: 10vw;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxjYXJkLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUdBO0VBQ0UsbUJBQUE7RUFDQSxxQkFBQTtFQUNBLG1CQUxLO0VBTUwseUJBQUE7RUFDQSxrQkFBQTtFQUNBLDRCQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7QUFGRjtBQUdFO0VBQ0UsUUFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtBQURKO0FBSUE7RUFDQTtJQUNFLFlBQUE7SUFDQSxVQUFBO0VBREE7RUFFRjtJQUNFLGVBQUE7RUFBQTtBQUNGIiwiZmlsZSI6ImNhcmQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIkbWFyb29uOiAjNTYxZjM3O1xyXG4kc25vdzogI0ZGRkJGRjtcclxuXHJcbi5jYXJkIHtcclxuICBmb250LXNpemU6IHh4LWxhcmdlO1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBiYWNrZ3JvdW5kOiAkc25vdztcclxuICBib3JkZXI6IDJweCAkbWFyb29uIHNvbGlkO1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwJTtcclxuICBib3gtc2hhZG93OiAycHggMnB4IDhweCAjMzMzO1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbiAgbWFyZ2luOiBhdXRvO1xyXG4gIHNwYW57XHJcbiAgICB0b3A6MjAlO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBwYWRkaW5nOiA1cHg7XHJcbiAgfVxyXG59XHJcbkBtZWRpYSAobWluLXdpZHRoOiA4MDBweCkge1xyXG4uY2FyZHtcclxuICBoZWlnaHQ6IDE0dnc7XHJcbiAgd2lkdGg6IDl2dztcclxuc3BhbntcclxuICBmb250LXNpemU6IDEwdnc7XHJcbn1cclxufVxyXG59XHJcbiJdfQ== */"] });


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home/home.component */ "9vUh");
/* harmony import */ var _game_game_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./game/game.component */ "jBAD");
/* harmony import */ var _bye_bye_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./bye/bye.component */ "jnk9");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");






const routes = [
    {
        path: '',
        component: _home_home_component__WEBPACK_IMPORTED_MODULE_1__["HomeComponent"],
        data: { animation: 'Home' },
    },
    {
        path: 'game',
        component: _game_game_component__WEBPACK_IMPORTED_MODULE_2__["GameComponent"],
        data: { animation: 'Game' },
    },
    {
        path: 'bye',
        component: _bye_bye_component__WEBPACK_IMPORTED_MODULE_3__["ByeComponent"],
        data: { animation: 'Bye' },
    },
];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes, { onSameUrlNavigation: 'reload' })], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]()
    .bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
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
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map