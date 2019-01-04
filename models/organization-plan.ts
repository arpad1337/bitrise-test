import { Plan, PlanType } from "./plan";

export class OrganizationPlan extends Plan {
  planName = 'Organization';
  type = PlanType.PRIVATE
  concurrentBuildNumber = 4;
  maxBuildTime = 90;
  buildsPerMonth = Number.POSITIVE_INFINITY;
  teamMembers = Number.POSITIVE_INFINITY;

  clone() {
    return new OrganizationPlan();
  }
}
