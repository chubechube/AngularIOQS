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
var http_1 = require('@angular/http');
var Rx_1 = require('rxjs/Rx');
require('rxjs/add/operator/catch');
require('rxjs/add/operator/toPromise');
var SpellsService = (function () {
    function SpellsService(http) {
        this.http = http;
        this.spellsUrl = 'api/spell'; // URL to web api
        this.headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        this.baseUrl = 'http://192.168.1.8:32769';
    }
    SpellsService.prototype.getSpellSub = function () {
        var url = this.baseUrl + "/spells/cleric";
        return this.http.get(url)
            .map(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    SpellsService.prototype.extractData = function (res) {
        var body = res.json();
        return body.data || {};
    };
    SpellsService.prototype.handleError = function (error) {
        // In a real world app, you might use a remote logging infrastructure
        var errMsg;
        if (error instanceof http_1.Response) {
            var body = error.json() || '';
            var err = body.error || JSON.stringify(body);
            errMsg = error.status + " - " + (error.statusText || '') + " " + err;
        }
        else {
            errMsg = error.message ? error.message : error.toString();
        }
        console.error(errMsg);
        return Rx_1.Observable.throw(errMsg);
    };
    SpellsService.prototype.getSpell = function (chClass) {
        var url = this.baseUrl + "/spells/" + chClass;
        return this.http.get(url)
            .toPromise()
            .then(function (response) { return response.json().data; })
            .catch(this.handleError);
    };
    /*private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
      }
    */
    SpellsService.prototype.getHeaders = function () {
        var headers = new http_1.Headers();
        headers.append('Accept', 'application/json');
        return headers;
    };
    SpellsService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], SpellsService);
    return SpellsService;
}());
exports.SpellsService = SpellsService;
function mapSpell(response) {
    // The response of the API has a results
    // property with the actual result
    return response.json().map(toSpell);
}
function toSpell(r) {
    var spell = ({
        id: r.id,
        name: r.name,
        level: r.cleric,
    });
    return spell;
}
//# sourceMappingURL=SpellsService.js.map