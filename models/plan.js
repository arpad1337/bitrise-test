"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var PlanType;
(function (PlanType) {
    PlanType[PlanType["PUBLIC"] = 0] = "PUBLIC";
    PlanType[PlanType["PRIVATE"] = 1] = "PRIVATE";
})(PlanType = exports.PlanType || (exports.PlanType = {}));
var Plan = /** @class */ (function () {
    function Plan() {
    }
    Plan.prototype.toJSON = function () {
        return {
            planName: this.planName,
            type: this.type,
            concurrentBuildNumber: this.concurrentBuildNumber,
            maxBuildTime: this.maxBuildTime,
            buildsPerMonth: this.buildsPerMonth,
            teamMembers: this.teamMembers
        };
    };
    Plan.prototype.setLimits = function (concurrentBuildNumber, buildsPerMonth, maxBuildTime, teamMembers) {
        if (this.type != PlanType.PUBLIC) {
            throw new Error('Plan is not public, limits are read only.');
        }
        this.concurrentBuildNumber = concurrentBuildNumber;
        this.buildsPerMonth = buildsPerMonth;
        this.maxBuildTime = maxBuildTime;
        this.teamMembers = teamMembers;
    };
    return Plan;
}());
exports.Plan = Plan;
