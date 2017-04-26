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
require('rxjs/add/operator/toPromise');
var UserService = (function () {
    function UserService(http) {
        this.http = http;
        this.usersUrl = 'api/users'; // URL to web api
        this.headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        this.baseUrl = 'http://192.168.1.8:3030';
    }
    UserService.prototype.getAll = function () {
        var user$ = this.http
            .get(this.baseUrl + "/pahtfinderUsers", { headers: this.getHeaders() })
            .map(mapUser);
        return user$;
    };
    UserService.prototype.getHeaders = function () {
        var headers = new http_1.Headers();
        headers.append('Accept', 'application/json');
        return headers;
    };
    UserService.prototype.getUsers = function () {
        return this.http.get(this.usersUrl)
            .toPromise()
            .then(function (response) { return response.json().data; })
            .catch(this.handleError);
    };
    UserService.prototype.getUserID = function (id) {
        var url = this.baseUrl + "/pahtfinderUsers?user_id=" + id;
        var user$ = this.http
            .get(this.baseUrl + "/pahtfinderUsers?user_id=" + id, { headers: this.getHeaders() })
            .map(mapSingleUser);
        return user$;
    };
    UserService.prototype.update = function (user) {
        var url = this.usersUrl + "/" + user.id;
        return this.http
            .put(url, JSON.stringify(user), { headers: this.headers })
            .toPromise()
            .then(function () { return user; })
            .catch(this.handleError);
    };
    UserService.prototype.create = function (name, password, email) {
        return this.http
            .post(this.usersUrl, JSON.stringify({ name: name }), { headers: this.headers })
            .toPromise()
            .then(function (res) { return res.json().data; })
            .catch(this.handleError);
    };
    UserService.prototype.delete = function (id) {
        var url = this.usersUrl + "/" + id;
        return this.http.delete(url, { headers: this.headers })
            .toPromise()
            .then(function () { return null; })
            .catch(this.handleError);
    };
    UserService.prototype.handleError = function (error) {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    };
    UserService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], UserService);
    return UserService;
}());
exports.UserService = UserService;
function mapSingleUser(response) {
    var user = response.json().map(toUser);
    console.log(user);
    return user[0];
}
function mapUser(response) {
    // The response of the API has a results
    // property with the actual result
    return response.json().map(toUser);
}
function toUser(r) {
    var user = ({
        _id: r._id,
        userName: r.userName,
        userPassword: r.userPassword,
        userEmail: r.userEmail,
        playerName: r.playerName,
        playerLevel: r.playerLevel,
        playerClass: r.playerClass,
        userMemorizedSpells: r.userMemorizedSpells
    });
    return user;
}
//# sourceMappingURL=user.service.js.map