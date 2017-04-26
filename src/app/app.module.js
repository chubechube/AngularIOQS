"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var platform_browser_1 = require('@angular/platform-browser');
var http_1 = require('@angular/http');
var forms_1 = require('@angular/forms');
var flex_layout_1 = require('@angular/flex-layout');
//import { BsDropdownModule } from 'ng2-bootstrap';
var ng_lightning_1 = require('ng-lightning/ng-lightning');
var app_routing_module_1 = require('./app-routing.module');
// Imports for loading & configuring the in-memory web api
var app_component_1 = require('./app.component');
var dashboard_component_1 = require('./dashboard.component');
var users_component_1 = require('./Users/users.component');
var user_service_1 = require('./Services/user.service');
var user_search_component_1 = require('./Users/user-search.component');
var SpellsService_1 = require('./Services/SpellsService');
var select_charachter_classNG_1 = require('./Spells/select-charachter-classNG');
var user_detail_component_1 = require('./Users/user-detail.component');
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [
                platform_browser_1.BrowserModule,
                forms_1.FormsModule,
                http_1.HttpModule,
                flex_layout_1.FlexLayoutModule,
                ng_lightning_1.NglModule.forRoot(),
                app_routing_module_1.AppRoutingModule
            ],
            declarations: [
                app_component_1.AppComponent,
                dashboard_component_1.DashboardComponent,
                users_component_1.UsersComponent,
                user_search_component_1.UserSearchComponent,
                select_charachter_classNG_1.SelectCharactherClassNG,
                user_detail_component_1.UserDetailComponent
            ],
            providers: [user_service_1.UserService, SpellsService_1.SpellsService],
            bootstrap: [app_component_1.AppComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map