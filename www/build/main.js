webpackJsonp([0],{

/***/ 210:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QuotesService; });
var QuotesService = (function () {
    function QuotesService() {
        this.favoriteQuotes = [];
    }
    QuotesService.prototype.addQuoteToFavorites = function (quote) {
        this.favoriteQuotes.push(quote);
        console.log(this.favoriteQuotes);
    };
    QuotesService.prototype.removeQuoteFromFavorites = function (quote) {
        var position = this.favoriteQuotes.findIndex(function (quoteEl) {
            return quoteEl.id == quote.id;
        });
        this.favoriteQuotes.splice(position, 1);
    };
    QuotesService.prototype.getFavoriteQuotes = function () {
        return this.favoriteQuotes.slice();
    };
    QuotesService.prototype.isQuoteFavorite = function (quote) {
        return this.favoriteQuotes.find(function (quoteEl) {
            return quoteEl.id == quote.id;
        });
    };
    return QuotesService;
}());
//# sourceMappingURL=quotes.js.map

/***/ }),

/***/ 211:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingsService; });
var SettingsService = (function () {
    function SettingsService() {
        this.altBackground = false;
    }
    SettingsService.prototype.setBackground = function (isAlt) {
        this.altBackground = isAlt;
    };
    SettingsService.prototype.isAltBackground = function () {
        return this.altBackground;
    };
    return SettingsService;
}());
//# sourceMappingURL=settings.js.map

/***/ }),

/***/ 229:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	return new Promise(function(resolve, reject) { reject(new Error("Cannot find module '" + req + "'.")); });
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 229;

/***/ }),

/***/ 461:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__favorites_favorites__ = __webpack_require__(462);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__library_library__ = __webpack_require__(464);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TabsPage = (function () {
    function TabsPage() {
        this.favoritesPage = __WEBPACK_IMPORTED_MODULE_1__favorites_favorites__["a" /* FavoritesPage */];
        this.libraryPage = __WEBPACK_IMPORTED_MODULE_2__library_library__["a" /* LibraryPage */];
    }
    TabsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* Component */])({
            selector: 'page-tabs',
            template: "\n    <ion-tabs>\n      <ion-tab [root]=\"favoritesPage\" tabTitle=\"Favorites\" tabIcon=\"star\"></ion-tab>\n      <ion-tab [root]=\"libraryPage\" tabTitle=\"Library\" tabIcon=\"book\"></ion-tab>\n    </ion-tabs>\n  "
        }), 
        __metadata('design:paramtypes', [])
    ], TabsPage);
    return TabsPage;
}());
//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 462:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FavoritesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_quotes__ = __webpack_require__(210);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__quote_quote__ = __webpack_require__(463);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_settings__ = __webpack_require__(211);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var FavoritesPage = (function () {
    function FavoritesPage(quotesService, modalCtrl, settingsService) {
        this.quotesService = quotesService;
        this.modalCtrl = modalCtrl;
        this.settingsService = settingsService;
    }
    FavoritesPage.prototype.ionViewWillEnter = function () {
        this.quotes = this.quotesService.getFavoriteQuotes();
    };
    FavoritesPage.prototype.onViewQuote = function (quote) {
        var _this = this;
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_3__quote_quote__["a" /* QuotePage */], quote);
        modal.present();
        modal.onDidDismiss(function (remove) {
            if (remove) {
                _this.onRemoveFromFavorites(quote);
            }
        });
    };
    FavoritesPage.prototype.onRemoveFromFavorites = function (quote) {
        this.quotesService.removeQuoteFromFavorites(quote);
        // this.quotes = this.quotesService.getFavoriteQuotes();
        var position = this.quotes.findIndex(function (quoteEl) {
            return quoteEl.id == quote.id;
        });
        this.quotes.splice(position, 1);
    };
    FavoritesPage.prototype.getBackground = function () {
        return this.settingsService.isAltBackground() ? 'altQuoteBackground' : 'quoteBackground';
    };
    FavoritesPage.prototype.isAltBackground = function () {
        return this.settingsService.isAltBackground();
    };
    FavoritesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* Component */])({
            selector: 'page-favorites',template:/*ion-inline-start:"/Users/fzancanaro/Documents/GitHub/Quotes/src/pages/favorites/favorites.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-buttons start>\n      <button ion-button menuToggle>\n        <ion-icon name="menu"></ion-icon>\n      </button>\n    </ion-buttons>\n    <ion-title>Favorite Quotes</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-list>\n    <ion-item-sliding\n      *ngFor="let quote of quotes">\n      <ion-item\n        color="quoteBackground"\n        [ngClass]="{alt: isAltBackground()}"\n        (click)="onViewQuote(quote)">\n        <h2>{{ quote.person }}</h2>\n        <p>{{ quote.text }}</p>\n      </ion-item>\n      <ion-item-options>\n        <button\n          ion-button\n          color="danger"\n          (click)="onRemoveFromFavorites(quote)">\n          <ion-icon name="trash"></ion-icon>\n          Delete\n        </button>\n      </ion-item-options>\n    </ion-item-sliding>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"/Users/fzancanaro/Documents/GitHub/Quotes/src/pages/favorites/favorites.html"*/
        }), 
        __metadata('design:paramtypes', [__WEBPACK_IMPORTED_MODULE_2__services_quotes__["a" /* QuotesService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* ModalController */], __WEBPACK_IMPORTED_MODULE_4__services_settings__["a" /* SettingsService */]])
    ], FavoritesPage);
    return FavoritesPage;
}());
//# sourceMappingURL=favorites.js.map

/***/ }),

/***/ 463:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QuotePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(36);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var QuotePage = (function () {
    function QuotePage(viewCtrl, navParams) {
        this.viewCtrl = viewCtrl;
        this.navParams = navParams;
    }
    QuotePage.prototype.ionViewDidLoad = function () {
        this.person = this.navParams.get('person');
        this.text = this.navParams.get('text');
    };
    QuotePage.prototype.onClose = function (remove) {
        if (remove === void 0) { remove = false; }
        this.viewCtrl.dismiss(remove);
    };
    QuotePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* Component */])({
            selector: 'page-quote',template:/*ion-inline-start:"/Users/fzancanaro/Documents/GitHub/Quotes/src/pages/quote/quote.html"*/'\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>{{ person }}</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding text-center>\n  <ion-card>\n    <ion-card-content>\n      {{ text }}\n    </ion-card-content>\n    <ion-row>\n      <ion-col>\n        <button\n          ion-button\n          small\n          outline\n          color="danger"\n          (click)="onClose(true)">Unfavorite</button>\n      </ion-col>\n    </ion-row>\n  </ion-card>\n  <button ion-button color="danger" (click)="onClose()">Close</button>\n</ion-content>\n'/*ion-inline-end:"/Users/fzancanaro/Documents/GitHub/Quotes/src/pages/quote/quote.html"*/
        }), 
        __metadata('design:paramtypes', [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ViewController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], QuotePage);
    return QuotePage;
}());
//# sourceMappingURL=quote.js.map

/***/ }),

/***/ 464:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LibraryPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__data_quotes__ = __webpack_require__(612);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__quotes_quotes__ = __webpack_require__(465);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LibraryPage = (function () {
    function LibraryPage() {
        this.quotesPage = __WEBPACK_IMPORTED_MODULE_2__quotes_quotes__["a" /* QuotesPage */];
    }
    LibraryPage.prototype.ngOnInit = function () {
        this.quoteCollection = __WEBPACK_IMPORTED_MODULE_1__data_quotes__["a" /* default */];
    };
    LibraryPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* Component */])({
            selector: 'page-library',template:/*ion-inline-start:"/Users/fzancanaro/Documents/GitHub/Quotes/src/pages/library/library.html"*/'\n<ion-header>\n\n  <ion-navbar>\n    <ion-buttons start>\n      <button ion-button menuToggle>\n        <ion-icon name="menu"></ion-icon>\n      </button>\n    </ion-buttons>\n    <ion-title>Quotes Library</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <h3 text-center>Select your favorite Quote</h3>\n  <ion-list>\n    <button\n      ion-item\n      *ngFor="let quoteGroup of quoteCollection"\n      [navPush]="quotesPage"\n      [navParams]="quoteGroup">\n      <ion-icon [name]="quoteGroup.icon" item-left></ion-icon>\n      <h2>{{ quoteGroup.category | uppercase }}</h2>\n      <p>{{ quoteGroup.quotes.length }} Quotes</p>\n    </button>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"/Users/fzancanaro/Documents/GitHub/Quotes/src/pages/library/library.html"*/
        }), 
        __metadata('design:paramtypes', [])
    ], LibraryPage);
    return LibraryPage;
}());
//# sourceMappingURL=library.js.map

/***/ }),

/***/ 465:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QuotesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_quotes__ = __webpack_require__(210);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var QuotesPage = (function () {
    function QuotesPage(navParams, alertCtrl, quotesService) {
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.quotesService = quotesService;
    }
    QuotesPage.prototype.ngOnInit = function () {
        this.quoteGroup = this.navParams.data;
    };
    // ionViewDidLoad() {
    //   this.quoteGroup = this.navParams.data;
    // Add elvis operator (?) in template to use this approach
    // }
    QuotesPage.prototype.onAddToFavorites = function (selectedQuote) {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'Add Quote',
            subTitle: 'Are you sure?',
            message: 'Are you sure you want to add the quote?',
            buttons: [
                {
                    text: 'Yes, go ahead',
                    handler: function () {
                        _this.quotesService.addQuoteToFavorites(selectedQuote);
                    }
                },
                {
                    text: 'No, I changed my mind!',
                    role: 'cancel',
                    handler: function () {
                        console.log('Cancelled!');
                    }
                }
            ]
        });
        alert.present();
    };
    QuotesPage.prototype.onRemoveFromFavorites = function (quote) {
        this.quotesService.removeQuoteFromFavorites(quote);
    };
    QuotesPage.prototype.isFavorite = function (quote) {
        return this.quotesService.isQuoteFavorite(quote);
    };
    QuotesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* Component */])({
            selector: 'page-quotes',template:/*ion-inline-start:"/Users/fzancanaro/Documents/GitHub/Quotes/src/pages/quotes/quotes.html"*/'\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>{{ quoteGroup.category | uppercase }}</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-card *ngFor="let quote of quoteGroup.quotes; let i = index">\n    <ion-card-header>\n      #{{ i + 1 }}\n    </ion-card-header>\n    <ion-card-content>\n      <p>{{ quote.text }}</p>\n      <p class="author">{{ quote.person }}</p>\n    </ion-card-content>\n    <ion-row>\n      <ion-col text-right>\n        <button\n          ion-button\n          clear\n          small\n          (click)="onAddToFavorites(quote)"\n          *ngIf="!isFavorite(quote)">Favorite</button>\n        <button\n          ion-button\n          clear\n          small\n          color="danger"\n          (click)="onRemoveFromFavorites(quote)"\n          *ngIf="isFavorite(quote)">Unfavorite</button>\n      </ion-col>\n    </ion-row>\n  </ion-card>\n</ion-content>\n'/*ion-inline-end:"/Users/fzancanaro/Documents/GitHub/Quotes/src/pages/quotes/quotes.html"*/
        }), 
        __metadata('design:paramtypes', [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_2__services_quotes__["a" /* QuotesService */]])
    ], QuotesPage);
    return QuotesPage;
}());
//# sourceMappingURL=quotes.js.map

/***/ }),

/***/ 466:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_settings__ = __webpack_require__(211);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SettingsPage = (function () {
    function SettingsPage(settingsService) {
        this.settingsService = settingsService;
    }
    SettingsPage.prototype.onToggle = function (toggle) {
        this.settingsService.setBackground(toggle.checked);
    };
    SettingsPage.prototype.checkAltBackground = function () {
        return this.settingsService.isAltBackground();
    };
    SettingsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* Component */])({
            selector: 'page-settings',template:/*ion-inline-start:"/Users/fzancanaro/Documents/GitHub/Quotes/src/pages/settings/settings.html"*/'\n<ion-header>\n\n  <ion-navbar>\n    <ion-buttons start>\n      <button ion-button menuToggle>\n        <ion-icon name="menu"></ion-icon>\n      </button>\n    </ion-buttons>\n    <ion-title>Settings</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-grid>\n    <ion-row>\n      <ion-col>\n        <ion-label>Alternative Background</ion-label>\n      </ion-col>\n      <ion-col>\n        <ion-toggle\n          (ionChange)="onToggle($event)"\n          [checked]="checkAltBackground()"></ion-toggle>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n'/*ion-inline-end:"/Users/fzancanaro/Documents/GitHub/Quotes/src/pages/settings/settings.html"*/
        }), 
        __metadata('design:paramtypes', [__WEBPACK_IMPORTED_MODULE_1__services_settings__["a" /* SettingsService */]])
    ], SettingsPage);
    return SettingsPage;
}());
//# sourceMappingURL=settings.js.map

/***/ }),

/***/ 467:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(468);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(566);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 566:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_component__ = __webpack_require__(608);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_favorites_favorites__ = __webpack_require__(462);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_library_library__ = __webpack_require__(464);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_quotes_quotes__ = __webpack_require__(465);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_quote_quote__ = __webpack_require__(463);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_settings_settings__ = __webpack_require__(466);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_tabs_tabs__ = __webpack_require__(461);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__services_quotes__ = __webpack_require__(210);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__services_settings__ = __webpack_require__(211);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_3__pages_favorites_favorites__["a" /* FavoritesPage */],
                __WEBPACK_IMPORTED_MODULE_4__pages_library_library__["a" /* LibraryPage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_quotes_quotes__["a" /* QuotesPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_quote_quote__["a" /* QuotePage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_settings_settings__["a" /* SettingsPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_tabs_tabs__["a" /* TabsPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* MyApp */])
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_3__pages_favorites_favorites__["a" /* FavoritesPage */],
                __WEBPACK_IMPORTED_MODULE_4__pages_library_library__["a" /* LibraryPage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_quotes_quotes__["a" /* QuotesPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_quote_quote__["a" /* QuotePage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_settings_settings__["a" /* SettingsPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_tabs_tabs__["a" /* TabsPage */]
            ],
            providers: [
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_9__services_quotes__["a" /* QuotesService */],
                __WEBPACK_IMPORTED_MODULE_10__services_settings__["a" /* SettingsService */]
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 608:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_native__ = __webpack_require__(609);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_tabs_tabs__ = __webpack_require__(461);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_settings_settings__ = __webpack_require__(466);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var MyApp = (function () {
    function MyApp(platform, menuCtrl) {
        this.menuCtrl = menuCtrl;
        this.tabsPage = __WEBPACK_IMPORTED_MODULE_3__pages_tabs_tabs__["a" /* TabsPage */];
        this.settingsPage = __WEBPACK_IMPORTED_MODULE_4__pages_settings_settings__["a" /* SettingsPage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            __WEBPACK_IMPORTED_MODULE_2_ionic_native__["b" /* StatusBar */].styleDefault();
            __WEBPACK_IMPORTED_MODULE_2_ionic_native__["a" /* Splashscreen */].hide();
        });
    }
    MyApp.prototype.onLoad = function (page) {
        this.nav.setRoot(page);
        this.menuCtrl.close();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_15" /* ViewChild */])('nav'), 
        __metadata('design:type', __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* Component */])({template:/*ion-inline-start:"/Users/fzancanaro/Documents/GitHub/Quotes/src/app/app.html"*/'<ion-menu [content]="nav">\n  <ion-header>\n    <ion-toolbar>\n      <ion-title>Menu</ion-title>\n    </ion-toolbar>\n  </ion-header>\n  <ion-content>\n    <ion-list>\n      <button ion-item (click)="onLoad(tabsPage)">\n        <ion-icon name="quote" item-left></ion-icon>\n        Quotes\n      </button>\n      <button ion-item (click)="onLoad(settingsPage)">\n        <ion-icon name="settings" item-left></ion-icon>\n        Settings\n      </button>\n    </ion-list>\n  </ion-content>\n</ion-menu>\n\n<ion-nav [root]="tabsPage" #nav></ion-nav>\n'/*ion-inline-end:"/Users/fzancanaro/Documents/GitHub/Quotes/src/app/app.html"*/
        }), 
        __metadata('design:paramtypes', [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Platform */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* MenuController */]])
    ], MyApp);
    return MyApp;
}());
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 612:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ([
    {
        category: 'inspirational',
        quotes: [
            {
                id: '1',
                person: 'Theodore Roosevelt',
                text: 'Believe you can and you\'re halfway there'
            },
            {
                id: '2',
                person: 'Norman Vincent Peale',
                text: 'Change your thoughts and you change your world.'
            },
            {
                id: '3',
                person: 'Robert H. Schuller',
                text: 'What great thing would you attempt if you knew you could not fail?'
            }
        ],
        icon: 'brush'
    },
    {
        category: 'ability',
        quotes: [
            {
                id: '4',
                person: 'John Wooden',
                text: 'Ability may get you to the top, but it takes character to keep you there.'
            },
            {
                id: '5',
                person: 'Robert Frost',
                text: 'Education is the ability to listen to almost anything without losing your temper.'
            }
        ],
        icon: 'bicycle'
    },
    {
        category: 'philosophy',
        quotes: [
            {
                id: '6',
                person: 'Albert Einstein',
                text: 'Two things are infinite: the universe and human stupidity; and I\'m not sure about the universe.'
            },
            {
                id: '7',
                person: 'Mahatma Gandhi',
                text: 'Be the change that you wish to see in the world.'
            }
        ],
        icon: 'ion-android-bulb'
    },
    {
        category: 'motivational',
        quotes: [
            {
                id: '8',
                person: 'Jim Rohn',
                text: 'Either you run the day or the day runs you.'
            },
            {
                id: '9',
                person: 'Donna Brazile',
                text: 'I was motivated to be different in part because I was different.'
            }
        ],
        icon: 'body'
    }
]);
//# sourceMappingURL=quotes.js.map

/***/ })

},[467]);
//# sourceMappingURL=main.js.map