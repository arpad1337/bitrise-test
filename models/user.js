"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var User = /** @class */ (function () {
    function User(username, plan) {
        this.username = username;
        this.plan = plan;
    }
    User.prototype.toJSON = function () {
        return {
            username: this.username,
            plan: this.plan.toJSON()
        };
    };
    return User;
}());
exports.User = User;
