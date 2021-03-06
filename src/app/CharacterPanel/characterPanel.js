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
var router_1 = require('@angular/router');
var user_service_1 = require('../Services/user.service');
var CharactherPanel = (function () {
    function CharactherPanel(userService, route) {
        this.userService = userService;
        this.route = route;
    }
    CharactherPanel.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params
            .switchMap(function (params) { return _this.userService.getUserID(params['user_id']); })
            .subscribe(function (user) { _this.user = user; _this.spellLevel = new Array(user.playerLevel); });
    };
    CharactherPanel = __decorate([
        core_1.Component({
            selector: 'CharachterPanel',
            templateUrl: 'app/CharacterPanel/characterPanel.html'
        }), 
        __metadata('design:paramtypes', [user_service_1.UserService, router_1.ActivatedRoute])
    ], CharactherPanel);
    return CharactherPanel;
}());
exports.CharactherPanel = CharactherPanel;
//# sourceMappingURL=characterPanel.js.map