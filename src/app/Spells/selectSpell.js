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
var SpellsService_1 = require('../Services/SpellsService');
var SelectSpell = (function () {
    function SelectSpell(spellsService) {
        this.spellsService = spellsService;
        this.status = { isopen: false };
        this.mode = 'Observable';
        this.selectedClass = { name: "Select a Class", value: "Select a Class" };
        this.classes = [
            { value: 'cleric', name: 'Cleric' },
            { value: 'wiz', name: 'Wizard' },
            { value: 'sor', name: 'Sorcer' },
            { value: 'shaman', name: 'Shaman' },
            { value: 'oracle', name: 'Oracle' },
            { value: 'druid', name: 'Druid' },
            { value: 'ranger', name: 'Ranger' },
            { value: 'magus', name: 'Magus' },
            { value: 'antipaladin', name: 'Antipaladin' },
            { value: 'inquisitor', name: 'Inquisitor' },
            { value: 'summoner', name: 'Summonrer' },
            { value: 'paladin', name: 'Paladin' },
            { value: 'alchemist', name: 'Alchemist' },
            { value: 'bloodrager', name: 'Bloodrager' },
            { value: 'psychic', name: 'Psychic' },
            { value: 'medium', name: 'Medium' },
            { value: 'mesmerist', name: 'Mesmerist' },
            { value: 'occultist', name: 'Occultist' },
            { value: 'spiritualist', name: 'Spiritualist' },
            { value: 'skald', name: 'Skald' },
            { value: 'investigator', name: 'Investigartor' },
            { value: 'hunter', name: 'Hunter' },
            { value: 'bard', name: 'Bard' }
        ];
        this.setClickedRow = function (index) {
            this.selectedRow = index;
        };
        this.setSelectedClass = function (classSeleceted) {
            this.selectedClass = classSeleceted;
            console.log("CLASSE " + this.selectedClass);
        };
        this.getSelectedClass = function () {
            return this.selectedClass.name;
        };
    }
    SelectSpell.prototype.dropdownMenu = function ($event) {
        $event.preventDefault();
        $event.stopPropagation();
        this.status.isopen = !this.status.isopen;
    };
    SelectSpell.prototype.getSpells = function (event) {
        var _this = this;
        console.log("QUERY " + this.selectedClass.value + " " + event.target.attributes.id.value);
        this.spellsService.getSpellSub(this.selectedClass.value, event.target.attributes.id.value)
            .subscribe(function (spells) { return _this.spells = spells; }, function (error) { return _this.errorMessage = error; });
    };
    SelectSpell = __decorate([
        core_1.Component({
            selector: 'demo-dropdown-basic',
            templateUrl: 'app/Spells/selectSpell.html',
            styleUrls: ['app/Spells/selectSpell.css']
        }), 
        __metadata('design:paramtypes', [SpellsService_1.SpellsService])
    ], SelectSpell);
    return SelectSpell;
}());
exports.SelectSpell = SelectSpell;
//# sourceMappingURL=selectSpell.js.map