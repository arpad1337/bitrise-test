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
var FreePlan = /** @class */ (function (_super) {
    __extends(FreePlan, _super);
    function FreePlan() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.planName = 'Free Plan';
        _this.type = plan_1.PlanType.PRIVATE;
        _this.concurrentBuildNumber = 1;
        _this.maxBuildTime = 10;
        _this.buildsPerMonth = 200;
        _this.teamMembers = 2;
        return _this;
    }
    FreePlan.prototype.clone = function () {
        return new FreePlan();
    };
    return FreePlan;
}(plan_1.Plan));
exports.FreePlan = FreePlan;
