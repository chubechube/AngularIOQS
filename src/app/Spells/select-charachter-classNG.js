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
var SpellsService_1 = require('./SpellsService');
var SelectCharactherClassNG = (function () {
    function SelectCharactherClassNG(spellsService) {
        this.spellsService = spellsService;
        this.mode = 'Observable';
        this.imagePath = "/assets/button_cleric.gif";
        this.counter = 0;
        this.buttonToggle = 0;
        this.buttonOpen = 0;
        this.apiSpells = " Vuoto ";
        this.items = [
            { value: 'cleric', name: 'Cleric' },
            { value: 'wiz', name: 'Wizard' },
            { value: 'sor', name: 'Sorcer' },
        ];
        this.setClickedRow = function (index) {
            this.selectedRow = index;
        };
    }
    SelectCharactherClassNG.prototype.onToggle = function ($event) {
        $event.stopPropagation();
        this.open = true;
    };
    SelectCharactherClassNG.prototype.onVoted = function ($event) {
        this.counter++;
    };
    SelectCharactherClassNG.prototype.onClickOpen = function ($event) {
        this.buttonOpen++;
    };
    SelectCharactherClassNG.prototype.onClickToggle = function ($event) {
        this.buttonToggle++;
    };
    SelectCharactherClassNG.prototype.callSpell = function ($event) {
    };
    SelectCharactherClassNG.prototype.getSpells = function (event) {
        var _this = this;
        console.log(event.target.id);
        this.spellsService.getSpellSub()
            .subscribe(function (spells) { return _this.spells = spells; }, function (error) { return _this.errorMessage = error; });
    };
    SelectCharactherClassNG = __decorate([
        core_1.Component({
            selector: 'demo-dropdown-basic',
            templateUrl: 'app/Spells/select-charachter-classNG.html',
            styleUrls: ['app/Spells/select-charachter-classNG.css']
        }), 
        __metadata('design:paramtypes', [SpellsService_1.SpellsService])
    ], SelectCharactherClassNG);
    return SelectCharactherClassNG;
}());
exports.SelectCharactherClassNG = SelectCharactherClassNG;
//# sourceMappingURL=select-charachter-classNG.js.map