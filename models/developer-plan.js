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
var DeveloperPlan = /** @class */ (function (_super) {
    __extends(DeveloperPlan, _super);
    function DeveloperPlan() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.planName = 'Developer';
        _this.type = plan_1.PlanType.PRIVATE;
        _this.concurrentBuildNumber = 2;
        _this.maxBuildTime = 45;
        _this.buildsPerMonth = Number.POSITIVE_INFINITY;
        _this.teamMembers = Number.POSITIVE_INFINITY;
        return _this;
    }
    DeveloperPlan.prototype.clone = function () {
        return new DeveloperPlan();
    };
    return DeveloperPlan;
}(plan_1.Plan));
exports.DeveloperPlan = DeveloperPlan;
