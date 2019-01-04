"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var plan_1 = require("./plan");
var PublicPlan = /** @class */ (function (_super) {
    __extends(PublicPlan, _super);
    function PublicPlan() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.planName = 'Public';
        _this.type = plan_1.PlanType.PUBLIC;
        _this.concurrentBuildNumber = 2;
        _this.maxBuildTime = 45;
        _this.buildsPerMonth = Number.POSITIVE_INFINITY;
        _this.teamMembers = Number.POSITIVE_INFINITY;
        return _this;
    }
    PublicPlan.prototype.clone = function () {
        var plan = new PublicPlan();
        plan.setLimits(this.concurrentBuildNumber, this.buildsPerMonth, this.maxBuildTime, this.teamMembers);
        return plan;
    };
    return PublicPlan;
}(plan_1.Plan));
exports.PublicPlan = PublicPlan;
