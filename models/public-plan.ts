import { Plan, PlanType } from "./plan";

export class PublicPlan extends Plan {
  planName = 'Public';
  type = PlanType.PUBLIC
  concurrentBuildNumber = 2;
  maxBuildTime = 45;
  buildsPerMonth = Number.POSITIVE_INFINITY;
  teamMembers = Number.POSITIVE_INFINITY;

  clone() {
    const plan = new PublicPlan();
    plan.setLimits(this.concurrentBuildNumber, this.buildsPerMonth, this.maxBuildTime, this.teamMembers);
    return plan;
  }
}
