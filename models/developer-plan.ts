import { Plan, PlanType } from "./plan";

export class DeveloperPlan extends Plan {
  planName = 'Developer';
  type = PlanType.PRIVATE
  concurrentBuildNumber = 2;
  maxBuildTime = 45;
  buildsPerMonth = Number.POSITIVE_INFINITY;
  teamMembers = Number.POSITIVE_INFINITY;

  clone(): DeveloperPlan {
    return new DeveloperPlan();
  }
}
