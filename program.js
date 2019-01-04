"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var free_plan_1 = require("./models/free-plan");
var public_plan_1 = require("./models/public-plan");
var developer_plan_1 = require("./models/developer-plan");
var organization_plan_1 = require("./models/organization-plan");
var user_1 = require("./models/user");
var app_1 = require("./models/app");
var PlanFactory = /** @class */ (function () {
    function PlanFactory() {
    }
    PlanFactory.createPlanByName = function (name) {
        switch (name) {
            case 'Free Plan': {
                return new free_plan_1.FreePlan();
            }
            case 'Public': {
                return new public_plan_1.PublicPlan();
            }
            case 'Developer': {
                return new developer_plan_1.DeveloperPlan();
            }
            case 'Organization': {
                return new organization_plan_1.OrganizationPlan();
            }
            default: {
                throw new Error('Plan not found');
            }
        }
    };
    return PlanFactory;
}());
exports.PlanFactory = PlanFactory;
var UserFactory = /** @class */ (function () {
    function UserFactory() {
    }
    UserFactory.createUserWithPlan = function (username, planName) {
        return new user_1.User(username, PlanFactory.createPlanByName(planName));
    };
    return UserFactory;
}());
exports.UserFactory = UserFactory;
var Program = /** @class */ (function () {
    function Program() {
    }
    Program.createUserAccounts = function () {
        console.info('TEST#1 Creating plans');
        console.log("\n");
        var plans = ['Free Plan', 'Public', 'Developer', 'Organization'];
        plans.forEach(function (planName, i) {
            console.log("Creating user with plan", planName);
            console.log(UserFactory.createUserWithPlan('username#' + i, planName).toJSON());
        });
        console.log("Throwing expection on Uknown plan");
        try {
            UserFactory.createUserWithPlan('test', 'uknown');
            console.log('No error');
        }
        catch (e) {
            console.log('Error thrown:', e.message);
        }
        console.log("\n");
        console.log('-----------------------');
        console.log("\n");
    };
    Program.createPublicAndPrivateAppForUser = function () {
        console.info('TEST#2 Creating public and private apps');
        console.log("\n");
        console.log('Creating user');
        var user = UserFactory.createUserWithPlan('username#1', 'Organization');
        console.log('User created', user.toJSON());
        console.log('Creating app');
        var app = new app_1.App('app#1', user);
        console.log('App created', app.name, app.limits.planName);
        console.log('Creating user');
        var user2 = UserFactory.createUserWithPlan('username#2', 'Organization');
        console.log('User created', user.toJSON());
        console.log('Creating app');
        var app2 = new app_1.App('app#2', user, new free_plan_1.FreePlan());
        console.log('App created', app2.name, app2.limits.planName);
        console.log("\n");
        console.log('-----------------------');
        console.log("\n");
    };
    Program.setCustomLimitForPublicApp = function () {
        console.info('TEST#3 Setting custom limit for public app');
        console.log("\n");
        var user = UserFactory.createUserWithPlan('username#1', 'Organization');
        console.log('User created', user.toJSON());
        console.log('Creating app');
        var app = new app_1.App('app#1', user);
        console.log('App created', app.name, app.limits);
        console.log('Setting concurrent build number to 10');
        app.limits = __assign({}, app.limits, { concurrentBuildNumber: 10 });
        console.log('App updated', app.name, app.limits);
        var user2 = UserFactory.createUserWithPlan('username#2', 'Organization');
        console.log('User created', user.toJSON());
        console.log('Creating app');
        var app2 = new app_1.App('app#2', user, new free_plan_1.FreePlan());
        console.log('App created', app2.name, app2.limits.planName);
        console.log('Should throw on limit update');
        try {
            app2.limits = __assign({}, app2.limits, { concurrentBuildNumber: 10 });
            console.log('No error');
        }
        catch (e) {
            console.log('Error thrown:', e.message);
        }
        console.log("\n");
        console.log('-----------------------');
        console.log("\n");
    };
    Program.upgradePlan = function () {
        console.info('TEST#4 Inheriting owners plan for app');
        console.log("\n");
        var user = UserFactory.createUserWithPlan('username#1', 'Organization');
        console.log('User created', user.toJSON());
        console.log('Creating app');
        var app = new app_1.App('app#1', user);
        console.log('App created', app.name, app.limits);
        app.inheritLimits();
        console.log('App limits inherited from user', app.name, app.limits);
        console.log("\n");
        console.log('-----------------------');
        console.log("\n");
    };
    Program.main = function () {
        this.createUserAccounts();
        this.createPublicAndPrivateAppForUser();
        this.setCustomLimitForPublicApp();
        this.upgradePlan();
    };
    return Program;
}());
exports.Program = Program;
Program.main();
