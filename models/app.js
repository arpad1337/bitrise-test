"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var public_plan_1 = require("./public-plan");
var App = /** @class */ (function () {
    function App(name, user, plan) {
        this.name = name;
        this.user = user;
        this.plan = plan || new public_plan_1.PublicPlan();
    }
    Object.defineProperty(App.prototype, "limits", {
        get: function () {
            return this.plan.toJSON();
        },
        set: function (value) {
            this.plan.setLimits(value.concurrentBuildNumber, value.buildsPerMonth, value.maxBuildTime, value.teamMembers);
        },
        enumerable: true,
        configurable: true
    });
    App.prototype.inheritLimits = function () {
        this.plan = this.user.plan.clone();
    };
    return App;
}());
exports.App = App;
